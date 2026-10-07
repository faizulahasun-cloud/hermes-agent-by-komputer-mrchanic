# Prompt Patterns

These are normalized patterns, not verbatim copies of the creator's paid/downloadable prompt packs.

## Identity contract
Define name, owner, mission, responsibilities, forbidden responsibilities and stable identity. Verify identity in a fresh turn.

## Persistent specialist contract
Create a real Hermes profile rather than a temporary sub-agent when continuity is required. Give it its own SOUL/identity, memory, workspace and session history.

## Coordinator contract
Require explicit delegation, structured specialist briefs, progress reporting, failure reporting, no fabricated results and final responsibility for outcomes.

## Specialist contract
Require narrow role, fixed identity, role-specific memory, explicit handoff target and provisioning verification.

## Role-boundary response
When a specialist receives out-of-scope work, decline briefly and identify the correct teammate instead of silently expanding scope.

## Provisioning verification
Verify profile path, identity file and configuration; ask "Who are you?"; record the response; repeat in a fresh session when persistence matters.

## Team-awareness contract
Teach each specialist who the owner is, who the other specialists are, what each one owns and where handoffs go.

## Human approval gate
Gather -> rank/filter -> present proposals -> owner approval -> execute -> report. Apply this especially to sends, creates, writes, deletes and other side effects.

## Progress discipline
For multi-step work, announce the current step and report when waiting on another agent. Never fabricate progress.

## Automation silence
For monitoring jobs: if nothing new exists, return exactly the Hermes silent sentinel; otherwise produce the requested result. Do not apply silence to jobs whose purpose is to deliver every run.

## Routing audit
Verify chat ID, thread ID, target profile, routing configuration and absence of competing Telegram credentials in specialist profiles.

## Build discipline
State plan -> back up/checkpoint -> bounded change -> test -> inspect the actual artifact -> record outcome.

## Builder separation
Distinguish the agent that builds files/scripts/routes from the crew agents that own behavioral habits. A scheduled reasoning task should remain a Hermes Cron turn rather than a shell script imitating an agent.

## Model/effort matching
The creator's latest tips treat model choice and effort as workload-dependent. The useful research conclusion is to assign expensive reasoning only where the task warrants it rather than making every specialist identical.

## Connected-tool safety
Define the tool's purpose and approval boundary, test the smallest useful operation, then permit side effects. Keep credentials out of portable source/research material.
