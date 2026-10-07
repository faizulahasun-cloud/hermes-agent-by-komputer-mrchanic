# Komputer Mechanic: Hermes Architecture Findings

## Evidence basis

Primary source IDs: KM-H01 through KM-H09 in `catalog.md`.

## 1. Persistent specialists, not temporary sub-agents

The creator repeatedly uses a small permanent crew. Each specialist has a stable profile, identity, role boundary, workspace, memory, and session continuity. The main agent remains the owner-facing coordinator.

Observed role examples include:
- Research / Scout
- Writer / Scribe
- Developer / Dev
- Marketing / Reach
- Job Reader
- CV Adapter
- Study roles such as Scholar, Quizmaster, Planner, and Vault

## 2. Explicit role boundaries

The specialist is instructed to refuse out-of-scope work briefly and name the correct teammate. The intent is to prevent every profile from becoming a general-purpose chatbot.

## 3. Coordinator owns outcomes

The orchestrator is not merely a message switchboard. The creator's later designs make it responsible for decomposition, delegation, verification, progress reporting, and returning a finished result.

## 4. One interface can route to multiple profiles

A recurring Telegram design keeps one bot connection while routing forum topics to separate Hermes profiles. The specialist profiles themselves do not hold the Telegram connection. The creator uses an external, update-safe routing plugin/configuration rather than modifying Hermes core.

## 5. Mission Control is an observability/control layer

The dashboard pattern is deliberately separate from the agent runtime. It surfaces agent activity, missions, schedules, files/content, model usage, system health, and later direct controls. Earlier versions emphasize read-only observation; the latest 3.0 design expands toward shell, voice, mission approval, and fleet management.

## 6. Backend truth over demo state

The creator explicitly distinguishes demo UI from real backend data. The newer Mission Control material describes pages that start with designed demo data and then fill from the real crew as the backend becomes available. Another dashboard tutorial explicitly describes metrics tracing to a real server database.

## 7. Memory survives conversation compaction

The memory-system design treats chat history as transient. Durable knowledge is stored in plain Markdown, with a shared wiki/read-write workflow. The creator separates the user's world from external research and keeps originals untouched.

## 8. Scheduled work should be selective

For recurring checks, the creator uses an exact silent sentinel such as `[SILENT]` when there is nothing new. This avoids notification spam while leaving deliberate briefings/reminders visible.

## 9. Approval before consequential actions

The creator repeatedly installs rules requiring a plan before actions that send, create, or change things. This is especially important for connected tools and autonomous routines.

## 10. Build and runtime layers should stay distinct

The memory tutorial explicitly distinguishes the builder's responsibility for files/scripts/routes/jobs from the agents' responsibility for behavioral habits. A scheduled job that reasons should remain a Hermes cron turn on a named profile rather than a shell script pretending to be an agent.

## 11. Backup and verification are operational rules

The creator repeatedly uses backup-before-change and verify-by-looking/testing before declaring a step complete. This is a workflow discipline, not a claim that Hermes itself provides all of the safety mechanism.

## 12. Several Hermes setups can coexist

The latest tips explicitly discusses multiple Hermes setups on one server. This supports treating each runtime/profile collection as an independently addressable environment rather than assuming one global agent process.

## 13. Latest 3.0 direction

The September/October 2026 Mission Control 3.0 material expands the dashboard concept to:
- agent-to-agent communication visibility
- mission board and approval
- agent files
- real shell
- voice mode
- fleet hiring/retirement
- 3D Agent City
- Windows-specific fixes
- compatibility handling for newer mission data

These are creator product/tutorial features, not automatically requirements for this repository.
