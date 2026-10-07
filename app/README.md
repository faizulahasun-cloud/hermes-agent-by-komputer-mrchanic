# Hermes Mission Control

This app is the control-plane UI for Hermes Agent. Hermes remains the execution/runtime authority.

## Current foundation

- Uses Hermes native API surfaces instead of hard-coded agent/session/cron demo state.
- Stores the local backend URL and API key in browser local storage only.
- Reads native sessions and cron jobs.
- Keeps the Mission Control layer separate from Hermes execution.
- Uses vanilla HTML/CSS/JavaScript. No npm build or frontend dependency is required.

## Native Hermes boundary

Hermes provides the agent loop, sessions, tools, cron, dashboard/backend APIs and live runtime state. Mission Control must not reimplement those systems. The current Hermes API server exposes session control and streaming chat, while the web dashboard exposes sessions, logs, analytics, cron and system-management routes.

## Mission Control layer

The product-specific layer will add:

1. Fleet cockpit across profiles.
2. Mission lifecycle with plan and explicit owner approval.
3. Unified activity/delegation stream.
4. Operator controls for approve, stop, retry and assignment.
5. Fleet-wide files/docs and machine views.
6. Live presentation and Agent City.

The next implementation step is the fleet adapter and mission persistence/control layer, using Hermes native profile/session/task/event surfaces rather than a second agent backend.

## Local development

Serve the app directory from a local HTTP server. Configure the Hermes API endpoint in the app. Do not commit API keys.

For the native Hermes API server, the default documented port is 8642. Hermes web dashboard/backend uses 9119.

## Security

Keep Hermes API keys local. Do not put credentials into GitHub source, research files or generated static assets.
