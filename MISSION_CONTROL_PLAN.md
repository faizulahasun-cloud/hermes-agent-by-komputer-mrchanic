# Mission Control Build Steps

## Canonical application surface map

```
MISSION CONTROL
│
├── 🖥 Cockpit
│
├── 👥 Fleet
│   └── Agent Detail
│
├── 🎯 Missions
│   └── Mission Detail
│
├── 📋 Tasks / Kanban
│
├── 💬 Communication
│
├── 🗨 Sessions / Chat
│
├── ⚡ Activity
│
├── 📁 Files
│
├── ⌨ Shell
│
├── ⏰ Schedules
│
├── ❤️ Health
│
├── 🌐 Agent City
│
└── 🎙 Voice
```

This navigation is the target application structure. Each surface should consume Hermes-native runtime data or Mission Control state only where Hermes has no equivalent.

1. Establish the runtime boundary: Hermes stays the agent engine, tools, sessions, profiles, cron and Kanban authority.
2. Replace the static demo frontend with native Hermes runtime data.
3. Ship Mission Control as a Hermes dashboard plugin so it runs inside the authenticated local dashboard instead of creating a second backend.
4. Add Mission Control state only for product concepts Hermes does not own: missions, approval state, operator metadata and reports.
5. Build the Cockpit and Fleet views, including Agent Detail.
6. Build Missions, including Mission Detail and approval workflow. Approval must precede any execution adapter.
7. Build Tasks / Kanban using Hermes-native Kanban data and controls.
8. Build Communication from Hermes-native agent/session/delegation events where available.
9. Build Sessions / Chat on Hermes-native sessions and streaming APIs.
10. Build Activity from Hermes sessions, Kanban events and runtime logs.
11. Build Files from Hermes-native file APIs.
12. Build Shell from Hermes-native shell/runtime surfaces where supported; do not create a second terminal execution backend.
13. Build Schedules from Hermes-native Cron APIs.
14. Build Health from Hermes status/system APIs.
15. Build Agent City as the visualization layer over the real Fleet/runtime state.
16. Build Voice as an interface over supported Hermes voice/runtime capabilities, without creating a second agent loop.
17. Add live updates using Hermes WebSocket/event surfaces where available.
18. Verify each surface against a real Hermes installation before calling it operational.
