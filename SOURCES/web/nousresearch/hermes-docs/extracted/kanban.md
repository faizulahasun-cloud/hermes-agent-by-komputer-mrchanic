# Hermes Kanban: Verified Multi-Agent Board Model

Status: verified
Evidence: PUBLISHED
Source: https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban

## Durable coordination
- Kanban is a SQLite-backed multi-agent board.
- Boards have separate SQLite databases plus workspace and log directories.
- Workers see only their assigned board through HERMES_KANBAN_BOARD.
- Boards can be created, switched, archived, deleted, and operated explicitly by slug.
- A gateway hosts the embedded dispatcher.
- Tasks are assigned to profiles and dispatched as workers.

## Worker context and task specialization
- Workers receive board/task lifecycle guidance automatically.
- A task can attach extra skills without changing the assignee profile.
- Attached skills must already exist on the assignee profile; Kanban does not install them at runtime.
- A task can pin a model/provider independently of the assignee profile.
- The default model comes from the worker profile when no task override exists.
- The dispatcher can therefore implement a frontier orchestrator + inexpensive worker architecture.

## Cost architecture
- Orchestrator/dispatcher can use a strong model for decomposition and routing.
- Worker profiles can use inexpensive models.
- Individual difficult cards can be pinned back to a stronger model.
- This gives finer control than the global delegation.model setting.

## Reliability / observability
- Board transitions expose plugin hooks for claimed, completed, and blocked tasks.
- Failed protocol behavior can block a card instead of silently accepting plain-text completion.
- Goal-mode cards can keep a worker in a bounded loop until an auxiliary judge accepts the result or the budget is exhausted.
- Task attachments are persisted and supplied to workers by path.

## Current relevance
Kanban is now a first-class Hermes orchestration primitive, not merely a creator dashboard convention. Creator workflows that describe "Kanban" should be mapped against this official runtime.
