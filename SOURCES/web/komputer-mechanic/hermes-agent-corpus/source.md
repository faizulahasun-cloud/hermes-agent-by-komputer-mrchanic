# Komputer Mechanic Hermes Agent Corpus

Source: https://komputermechanic.com/
Checked: 2026-10-07
Classification: community / creator tutorial source

## Hermes-specific sources

1. Hermes Agent Tips: 7 Upgrades for Your AI Agent Team
https://komputermechanic.com/tutorials/hermes-agent-tips
11 prompts, 3 parts. Persistent specialist agents, per-agent memory, Telegram topic routing, role isolation, testing, and quiet Cron behavior.

2. How to Build a PREMIUM Hermes Agent Mission Control Dashboard
https://komputermechanic.com/tutorials/hermes-dashboard
31 prompts, 15 parts. Telegram Orchestrator + persistent Discord specialists + live mission control.

3. Build a Hermes Mission Control — 5-Agent AI Fleet on Telegram
https://komputermechanic.com/tutorials/hermes-mission-control
37 prompts. Orchestrator + Scout/Scribe/Reach/Dev, dedicated Telegram channels, dashboard and delegation.

4. Build an AI Personal Assistant on Telegram
https://komputermechanic.com/tutorials/hermes-personal-assistant
28 prompts. Chief-of-staff Orchestrator plus COMMS/OPS/SCOUT/FINANCE/GROWTH specialists.

5. Build an Autonomous AI Job-Hunting System
https://komputermechanic.com/tutorials/ai-job-hunting-agent
30 prompts. Forge + Scout + Job Reader + CV Adapter, fixed role boundaries, memory, routing, logging, scheduled scans and Telegram control.

6. Hermes AI Student Companion & Mission Control Dashboard
Catalogued at https://komputermechanic.com/tutorials
Six-agent arrangement using Telegram/Discord surfaces.

7. How to Give Your AI Agents Persistent Memory: Build an Agent Operating System
https://komputermechanic.com/tutorials/how-to-give-ai-agents-persistent-memory
26 prompts. Shared Markdown wiki, separation of owner-world facts from external claims, nightly maintenance, dashboard visibility and Git safety.

8. How to Build a Hermes Agent Mission Control Dashboard 3.0
https://komputermechanic.com/tutorials/hermes-agent-mission-control-dashboard-3
46 prompts. NEXORA/EXECUTOR fleet management, missions, files, shell, voice, Agent City and existing-crew integration.

9. How to Build a Premium 3D Website with Hermes Agent
https://komputermechanic.com/tutorials/how-to-build-a-premium-3d-website-with-hermes-agent
27 prompts. Hermes as a practical coding/build agent over SSH with screenshots, backups, preview and visual verification.

## Key evidence

The 7-Upgrades tutorial distinguishes persistent profiles from temporary subagents and gives persistent agents their own identity, memory and workspace.

It documents a Telegram pattern where one bot maintains the connection and topics are routed to specialist profiles. Specialist profiles should not independently hold the Telegram bot token.

It documents a quiet Cron convention: when a scheduled monitoring run has nothing new to report, returning exactly [SILENT] suppresses delivery.

Mission-control tutorials repeatedly use owner -> orchestrator -> persistent specialists -> tools/workflows.

The job-hunting tutorial gives especially clear role boundaries: Forge coordinates, Scout searches/ranks, Job Reader handles one selected job description, and CV Adapter structures/tailors only from verified CV facts.

This repository records evidence and concise extracted patterns, not complete paid/downloadable prompt packs.
