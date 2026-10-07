# Hermes Native Windows: Verified Current Model

Status: verified
Evidence: PUBLISHED
Source: https://hermes-agent.nousresearch.com/docs/user-guide/windows-native

## Native support
- Hermes runs natively on Windows 10/11 without WSL, Cygwin, or Docker.
- Native CLI, TUI, messaging gateway, Cron, Chromium browser, MCP, local Ollama/LM Studio/llama-server, dashboard, and login auto-start are supported.
- Windows gateway auto-start uses Scheduled Tasks with a Startup-folder fallback and does not require admin rights.
- Windows terminal commands use Git Bash through Hermes's terminal runtime.

## Installer / paths
- PowerShell installer supports branch/commit pinning, custom HERMES_HOME and install directory, noninteractive mode, desktop build, and path diagnostics.
- Default source install uses %LOCALAPPDATA%\\hermes.
- User data, credentials, sessions, plugins, skills, and logs live under the Hermes home.
- HERMES_HOME and installer arguments can relocate these paths.

## Current Windows details
- Hermes has an explicit UTF-8 console shim.
- Default editor is Notepad if EDITOR/VISUAL is unset.
- VS Code needs code --wait when used as EDITOR.
- Ctrl+Enter inserts a newline in modern Windows terminals.
- Browser dependencies are managed by Hermes's package manager.
- Native Windows ARM64 has specific optional-dependency exclusions.

## Gateway
- hermes gateway install registers an ONLOGON Scheduled Task with limited rights when possible.
- Fallback is a hidden Startup-folder VBScript.
- hermes gateway status/start/stop/restart/uninstall manage the gateway lifecycle.
- The current docs explicitly favor Scheduled Tasks over Windows Services for normal login-scoped use.

## Security / data
- API keys in HERMES_HOME/.env are the normal path.
- The docs caution against putting secrets in global Windows user environment variables unless intentionally exposed to all processes.
