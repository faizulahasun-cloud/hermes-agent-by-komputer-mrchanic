# Extracted Concepts

Evidence source: Komputer Mechanic Hermes tutorials
Evidence class: PARAPHRASED unless otherwise noted

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
Monitoring jobs can return exactly the Hermes silent sentinel when nothing changed, preventing unnecessary notifications.

## Mission control
Operational dashboards expose agent state, tasks, activity, assignments, files/outputs and system health. Newer creator material adds missions, approval, shell, voice and visual fleet views.

## Shared team awareness
Specialists know the owner, teammates, responsibilities and handoff structure. Coordinators should pass structured briefs.

## Provisioning verification
Create profile -> write identity/config -> verify -> ask "Who are you?" -> confirm expected role -> continue.

## Cheap-first execution
Filter/rank cheaply before invoking expensive downstream processing. The job-hunting workflow is a concrete example.

## Backend truth
A polished dashboard is not evidence of a live system. The creator's later Mission Control work distinguishes designed/demo UI from live backend state and emphasizes metrics derived from real runtime/server data.

## Durable wiki memory
The creator's memory build uses plain Markdown as durable knowledge, separates raw originals from processed knowledge, distinguishes owner-world facts from external research, and uses nightly maintenance plus Git.

## Build/runtime separation
Files, scripts, routes and jobs belong to the build layer; behavioral habits belong to agents. This separation reduces accidental coupling and makes updates safer.

## Verification over declaration
Screenshots, test responses, actual files and runtime checks are preferred over an agent simply saying a task is complete.

## Multiple Hermes setups
The latest creator material treats multiple Hermes setups on one server as a valid configuration pattern. Each setup needs clear runtime boundaries.

## Mission Control evolution
The creator's dashboard concept evolved from read-only observation to a broader control plane containing missions, approvals, files, shell, voice and fleet-management concepts. These are research findings, not automatic requirements for our implementation.
