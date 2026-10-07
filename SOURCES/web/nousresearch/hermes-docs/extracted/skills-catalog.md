# Official Hermes Skills Catalog Snapshot

Status: verified
Evidence: PUBLISHED
Sources:
- https://hermes-agent.nousresearch.com/docs/reference/skills-catalog
- https://hermes-agent.nousresearch.com/docs/reference/optional-skills-catalog

## Bundled skills
The current catalog includes built-in skills spanning Apple, autonomous agents, creative work, DevOps, email, media, note-taking, productivity, research, social media, software development, and web.

Notable agent/system skills:
- claude-code
- codex
- computer-use
- hermes-agent
- opencode

Notable research/knowledge skills:
- grounded-citations
- llm-wiki
- arxiv
- competitor-news-monitor

Notable software-development skills:
- github
- hermes-agent-skill-authoring
- requesting-code-review
- simplify-code
- systematic-debugging
- test-driven-development

Notable media/web skills:
- youtube-content
- blocked-page-recovery

Notable productivity skills:
- google-workspace
- notion
- pdf
- docx
- powerpoint
- xlsx

## Optional skills
Optional skills are shipped under optional-skills/ but are not active by default. They are installed explicitly with hermes skills install official/<category>/<skill>.

Current catalog categories include autonomous-ai-agents, blockchain, communication, creative, data-science, devops, dogfood, email, finance, gaming, health, MCP, migration, MLOps, payments, productivity, research, software development, and web.

Important multi-agent/research candidates:
- agent-merge-conflict-arbiter
- dynamic-workflow
- honcho
- kanban-video-orchestrator
- live-dashboard
- watchers
- duckduckgo-search
- gitnexus-explorer

Important MCP candidates:
- fastmcp
- mcp-oauth-remote-gateway
- mcporter

The catalog is a discovery index. Individual SKILL.md definitions must be captured separately when they materially describe Hermes operation, orchestration, memory, research, delegation, or source collection.
