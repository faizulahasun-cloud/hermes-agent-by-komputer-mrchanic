import json
import os
import sqlite3
from pathlib import Path

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

router = APIRouter()
DB = Path(os.environ.get("HERMES_HOME", str(Path.home() / ".hermes"))) / "mission-control.db"


def db():
    DB.parent.mkdir(parents=True, exist_ok=True)
    con = sqlite3.connect(DB)
    con.row_factory = sqlite3.Row
    con.execute(
        """CREATE TABLE IF NOT EXISTS missions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        goal TEXT NOT NULL,
        plan TEXT NOT NULL DEFAULT '[]',
        status TEXT NOT NULL DEFAULT 'draft',
        profile TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        report TEXT
    )"""
    )
    return con


class MissionApproval(BaseModel):
    task_id: str | None = None


class MissionIn(BaseModel):
    title: str = Field(min_length=1, max_length=200)
    goal: str = Field(min_length=1, max_length=10000)
    plan: list[str] = Field(default_factory=list, max_length=100)
    profile: str | None = Field(default=None, max_length=200)


@router.get("/missions")
def list_missions():
    con = db()
    try:
        rows = con.execute(
            "SELECT * FROM missions ORDER BY updated_at DESC, id DESC"
        ).fetchall()
        return {"missions": [dict(r, plan=json.loads(r["plan"])) for r in rows]}
    finally:
        con.close()


@router.post("/missions")
def create_mission(body: MissionIn):
    title = body.title.strip()
    goal = body.goal.strip()
    if not title or not goal:
        raise HTTPException(422, "Mission title and goal cannot be blank")

    con = db()
    try:
        cur = con.execute(
            "INSERT INTO missions(title,goal,plan,profile) VALUES(?,?,?,?)",
            (title, goal, json.dumps(body.plan), body.profile),
        )
        con.commit()
        return {"id": cur.lastrowid, "status": "draft"}
    finally:
        con.close()


@router.post("/missions/{mission_id}/approve")
def approve_mission(mission_id: int, body: MissionApproval):
    con = db()
    try:
        cur = con.execute(
            """UPDATE missions
               SET status='approved',
                   updated_at=CURRENT_TIMESTAMP,
                   report=CASE
                       WHEN ? IS NULL THEN report
                       ELSE json_object('task_id', ?)
                   END
               WHERE id=? AND status='draft'""",
            (body.task_id, body.task_id, mission_id),
        )
        con.commit()
        if cur.rowcount != 1:
            raise HTTPException(409, "Mission is not in draft state")
        return {"ok": True, "status": "approved", "task_id": body.task_id}
    finally:
        con.close()


@router.post("/missions/{mission_id}/reject")
def reject_mission(mission_id: int):
    con = db()
    try:
        cur = con.execute(
            "UPDATE missions SET status='rejected', updated_at=CURRENT_TIMESTAMP WHERE id=? AND status='draft'",
            (mission_id,),
        )
        con.commit()
        if cur.rowcount != 1:
            raise HTTPException(409, "Mission is not in draft state")
        return {"ok": True, "status": "rejected"}
    finally:
        con.close()
