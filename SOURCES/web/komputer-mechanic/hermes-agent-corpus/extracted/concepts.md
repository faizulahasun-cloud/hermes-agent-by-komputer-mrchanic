# Extracted Concepts

Evidence source: Komputer Mechanic Hermes tutorials
Evidence class: PARAPHRASED

## Persistent profile vs temporary subagent
Persistent profiles provide durable identity, memory, workspace and session continuity. Temporary subagents are task-scoped fresh conversations.

## Orchestrator-first architecture
Owner -> Orchestrator -> Specialist profiles -> tools/workflows.

The orchestrator routes and owns outcomes instead of performing every specialist task.

## Hard role boundaries
Each specialist receives a narrow responsibility, explicit non-responsibilities, stable identity and a named teammate for out-of-scope work.

## Dedicated memory
Memory is treated as role-specific state. Research, writing, development and coordination can each retain different useful information.

## Telegram topic routing
One Telegram bot connection can serve multiple specialist profiles through forum topics and profile routing. Specialists do not need separate Telegram connections.

## Quiet automation
Monitoring jobs can return exactly [SILENT] when nothing changed, preventing unnecessary notifications.

## Mission control
Operational dashboards expose agent state, tasks, activity, assignments, files/outputs and system health. Some builds add shell, voice and visual views.

## Shared team awareness
Specialists know the owner, teammates, responsibilities and handoff structure. Coordinators should pass structured briefs.

## Provisioning verification
Create profile -> write identity/config -> verify -> ask "Who are you?" -> confirm expected role -> continue.

## Cheap-first execution
Filter/rank cheaply before invoking expensive downstream processing. The job-hunting workflow is a concrete example.
