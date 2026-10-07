# Hermes Computer Use: Verified Current Model

Status: verified
Evidence: PUBLISHED
Source: https://hermes-agent.nousresearch.com/docs/user-guide/features/computer-use

- Hermes can drive desktop applications on Windows, macOS, and Linux through a built-in computer_use toolset.
- The default driver is cua-driver over MCP/stdio.
- It reads accessibility trees and dispatches synthesized input without moving the real cursor or stealing foreground focus.
- Windows uses UIAutomation plus SendInput/PostMessage.
- Computer Use works with tool-capable cloud or local models, not only Anthropic-native computer-use APIs.
- Browser tasks should use the browser toolset, not computer_use.
- Permission modes include standard approvals and bounded capability-manifest mode; YOLO/unrestricted mode bypasses runtime prompts and is explicitly unsafe for untrusted environments.
- Destructive GUI actions are approval-gated. Password typing and permission-dialog clicking are prohibited by the agent safety contract.
- computer-use doctor is the primary diagnostic command.
- Screenshots are internally used for vision and are cached for explicit user-requested delivery.
- Text-only models can operate in degraded accessibility-tree mode.
- Local vision models through Ollama/vLLM/LM Studio are supported when they handle multimodal tool content.
- On Windows, elevated administrator windows cannot normally be driven by a medium-integrity Hermes process because of UIPI.
- Windows SSH sessions require an interactive desktop/session arrangement; the docs provide an opt-in scheduled driver pattern for that case.
