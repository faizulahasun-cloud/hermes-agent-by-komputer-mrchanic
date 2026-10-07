# Official Hermes Documentation Feature Map

Status: verified
Evidence: PUBLISHED
Source: https://hermes-agent.nousresearch.com/docs/llms.txt

## Core runtime and state
- CLI, TUI, configuration, sessions, profiles, git worktrees, Docker backend.
- Security, checkpoints/rollback, Bot Mode, native Desktop, egress isolation, managed scope, secrets.
- Profile distributions provide versioned/shareable profile definitions while preserving user state.

## Context, identity, memory
- MEMORY.md and USER.md persistent memory.
- Project context files: .hermes.md, AGENTS.md, CLAUDE.md, global SOUL.md, .cursorrules.
- @ references can attach files, folders, diffs, commits, and URLs.
- Personality/SOUL.md is a separate identity layer.
- External memory providers include Honcho, OpenViking, Mem0, Hindsight, Holographic, RetainDB, ByteRover, and Supermemory.

## Extensibility
- Skills: progressive disclosure, agent-managed skills, Skills Hub.
- Plugins: tools, hooks, integrations, middleware, observer hooks, application declarations.
- MCP, ACP, API server, provider plugins, browser provider plugins, memory-provider plugins, secret-source plugins.

## Automation and multi-agent
- Cron, delegation, durable SQLite Kanban, persistent goals, code execution, hooks, batch processing.
- Kanban has multi-gateway deployment and worker lanes.
- Messaging includes A2A and webhook-triggered runs.
- Official guides include delegation patterns, automation blueprints, GitHub PR review, and team Telegram assistant.

## Browser / computer / media
- Browser control with local Chromium/CDP and cloud providers.
- Computer Use.
- Vision, image generation, TTS, voice mode.
- X search, web search/extract, document extraction, deliverable mode.

## Messaging / interfaces
- Telegram, Discord, Slack, WhatsApp, Signal, SMS, Matrix, Mattermost, Home Assistant, email, Teams, LINE, IRC, WeCom, Weixin, Google Chat, Open WebUI, webhooks, relay, A2A, and more.
- Desktop supports Windows, macOS, Linux.

## Model/provider layer
- OpenRouter provider routing.
- Fallback providers.
- Credential pools.
- Local models and Ollama.
- Gemini, Vertex, Bedrock, Microsoft Foundry, MiniMax OAuth, xAI Grok OAuth, and other provider paths.
- Nous Portal provides bundled model/tool access but is subscription-based.

## Developer architecture
- Architecture, agent loop, prompt assembly, context compression/caching, gateway internals, session storage, provider runtime.
- Adding tools/providers/platform adapters/skills.
- Plugin LLM access, plugin catalog submission, programmatic integration, subagent lifecycle API, trajectory format, tools runtime.

## Reference surface
- CLI and slash commands.
- Environment variables.
- Built-in tools and toolsets.
- MCP configuration.
- Model catalog.
- Bundled and optional skill catalogs.
- FAQ/troubleshooting and automation blueprint catalog.

This file is a normalized map, not a substitute for the individual source pages.
