# Hermes Goals and Loops: Verified Automation Semantics

Status: verified
Evidence: PUBLISHED
Sources:
- https://hermes-agent.nousresearch.com/docs/user-guide/features/goals
- https://hermes-agent.nousresearch.com/docs/user-guide/features/loops

## /goal
- A persistent goal survives across turns in one session.
- After each turn a judge checks whether the objective is satisfied.
- If not satisfied, Hermes continues automatically until done, paused/cleared, or budget exhaustion.
- A completion contract can define outcome, verification, constraints, boundaries, and stop_when.
- Quality gates can require shell commands to pass before a goal is judged complete.
- /goal is single-session and does not create or assign Kanban work.

## /loop
- Re-runs a prompt or slash command on a recurring cadence inside the current session.
- It is timer/self-paced monitoring, not a durable scheduled job.
- Fixed intervals or self-paced backoff are supported.
- Stop conditions include LOOP_COMPLETE, run caps, evidence-based --until conditions, manual stop, and max_ticks.
- Loop state survives resume and compression.
- One loop exists per session.

## Boundary with Cron and Kanban
- /loop = repeated monitoring/work in the current session.
- /goal = one objective iterated until a judge accepts it.
- Cron = unattended scheduled work outside sessions.
- Kanban = many durable tasks with profiles, dependencies, handoffs and worker sessions.
