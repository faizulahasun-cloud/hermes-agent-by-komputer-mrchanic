# Hermes Delegation: Verified Runtime Model

Status: verified
Evidence: PUBLISHED
Source: https://hermes-agent.nousresearch.com/docs/user-guide/features/delegation

## Core facts
- delegate_task creates isolated child agents for bounded work.
- Parallel batches support up to 10 concurrent children by default; configurable.
- Children start a fresh conversation and do not inherit the parent's conversation/tool history.
- The parent must provide sufficient goal and context.
- Repository context files can be injected into children, but SOUL.md is excluded.
- Tasks can require structured JSON Schema output. Hermes validates the result and can issue one bounded correction turn.
- Child images can be forwarded for visual tasks.
- Background completion events are persisted in the profile state database.
- Child-owned background processes do not survive child completion unless waited, killed, or explicitly handed off to the parent.
- Subagents can use a different configured model/provider.
- Official cost strategy is frontier planner + inexpensive workers.
- delegate_task has a global delegation model; Kanban supports per-task model overrides.

## Important architectural distinction
Delegation is temporary child execution. Persistent profiles are durable identities/configuration. Kanban is the durable multi-agent task-board layer. Bot Mode is the persistent bot/interface layer.

## Useful patterns
1. Parallel research: split independent research questions into isolated children.
2. Code review + fix: give one child a bounded review/fix/test objective.
3. Multi-file refactoring: give the child complete project context and acceptance criteria.
4. Structured output: make children return machine-consumable records.
5. Cheap workers: keep planning quality high while moving repetitive execution to a cheaper model.

## Evidence boundary
These are normalized official runtime behaviors, not creator prompt copies.
