# Hermes File Roles and Memory Snapshot

Status: verified
Evidence: PUBLISHED
Source: https://hermes-agent.nousresearch.com/docs/user-guide/which-file-does-what

## File responsibilities
- SOUL.md: primary agent identity, personality, tone, communication style, and stylistic avoid-list. Loaded independently as system-prompt slot 1.
- USER.md: user profile and preferences. Maintained through persistent memory.
- MEMORY.md: agent's learned environment/project/tool notes. Maintained through persistent memory.
- AGENTS.md: project-specific instructions, conventions, architecture, commands, paths, and workflows.
- .hermes.md / HERMES.md: Hermes-specific project instructions with higher priority than AGENTS.md.
- CLAUDE.md and .cursorrules remain compatibility context-file types.

## Context precedence
Only one project context type is loaded per session: .hermes.md, then AGENTS.md, then CLAUDE.md, then .cursorrules. SOUL.md is independent.

## Frozen-memory behavior
USER.md and MEMORY.md are injected as a frozen system-prompt snapshot at session start. A memory write persists immediately to disk but does not rebuild the current prompt. The next session sees the updated snapshot. This preserves prefix-cache stability.

## Practical distinction
- Identity = SOUL.md
- User facts/preferences = USER.md
- Learned environment/project facts = MEMORY.md
- Project rules = AGENTS.md / .hermes.md
