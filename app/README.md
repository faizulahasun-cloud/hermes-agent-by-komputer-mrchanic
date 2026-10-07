# Hermes Mission Control

Mission Control is the operator control plane for Hermes Agent. Hermes remains the execution/runtime authority.

## Product path

`Mission Control → Hermes API/dashboard → Hermes sessions, profiles, Kanban, cron, tools and state`

Mission Control does not create a second agent runtime.

## Current capabilities

- Fleet cockpit from real Hermes profiles.
- Agent City presentation from the real profile roster.
- Native Hermes session chat with SSE streaming.
- Mission drafts with an explicit approval gate.
- Approved missions routed into native Kanban goal-mode tasks.
- Native Kanban decomposition for specialist routing after approval.
- Durable task-thread communication through Kanban comments.
- Mission stop/retry controls using native Kanban run/task controls.
- Live profile/session/cron/health/files telemetry refresh.
- Standalone browser UI under `app/`.
- Native Hermes dashboard plugin under `plugins/mission-control/dashboard/`.
- No npm frontend build is required for the standalone UI or dashboard plugin bundle.

## Install into Hermes

The repository contains a complete Hermes plugin package under `plugins/mission-control/`.

For a Git install, use the Hermes plugin installer with this repository, then enable the plugin:

```text
hermes plugins install faizulahasun-cloud/hermes-agent-by-komputer-mrchanic
hermes plugins enable mission-control
```

The dashboard plugin is under:

```text
plugins/mission-control/dashboard/
├── manifest.json
├── plugin_api.py
└── dist/
    ├── index.js
    └── style.css
```

Restart `hermes dashboard` after installation if the plugin tab does not appear. Hermes dashboard plugin discovery is cached per dashboard process.

## Standalone UI

Serve `app/` with any local static HTTP server and point it at the Hermes API server.

Default Hermes API server:

```text
http://127.0.0.1:8642
```

The API key is entered locally in the UI and stored only in browser local storage.

## Native boundaries

Hermes owns:

- agent loop and model/provider routing
- profiles and persistent sessions
- tools and computer/browser capabilities
- cron
- Kanban workers, decomposition, assignments and task events
- dashboard authentication and runtime state

Mission Control owns:

- operator cockpit
- mission abstraction and approval workflow
- fleet presentation
- unified mission/task communication presentation
- higher-level operator controls

## Validation

The repository includes GitHub Actions static validation for:

- JavaScript syntax
- Python syntax
- dashboard manifest JSON

Runtime validation still requires a live Hermes installation because the agent model, gateway, API credentials and machine state are not available inside GitHub.

## Security

Keep Hermes API keys local. Never commit credentials or machine secrets.
