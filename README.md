# hermes-agent-by-komputer-mechanic

## Hermes source collection

This repository is being organized as a source-linked collection of Hermes Agent creator methods, profiles, prompts, skills, workflows, and tutorials.

Start here: [SOURCES/README.md](SOURCES/README.md)

### Current source indexes
- [YouTube index](SOURCES/youtube/index.md)
- [Web/tutorial index](SOURCES/web/index.md)
- [Context upload folder rules](SOURCES/CONTEXT-FOLDER-RULES.md)
- [Extraction schema](SOURCES/EXTRACTION-SCHEMA.md)

### Existing source links
- https://youtu.be/h9SsHkRSHxo?si=VReycEmIo7lyE6x-
- https://youtube.com/playlist?list=PL69yrflDdJUtHioazc_aBngQpxDYOJsqH&si=Y-y2_PJ7JKbxa9BJ

The collection process follows links recursively: source -> linked videos/playlists -> linked websites/repos/profiles -> extracted prompts/profiles/workflows -> derived knowledge.

## Mission Control application

The canonical operator navigation is:

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

Agent Detail belongs under Fleet and Mission Detail belongs under Missions. This surface map is the application information-architecture contract. Hermes remains the runtime authority for agents, profiles, sessions, tools, Kanban, schedules and machine state; Mission Control presents and controls those capabilities without creating a second agent runtime.
