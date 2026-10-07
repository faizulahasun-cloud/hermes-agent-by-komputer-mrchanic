# Mission Control Build Steps

1. Establish the runtime boundary: Hermes stays the agent engine, tools, sessions, profiles, cron and Kanban authority.
2. Replace the static demo frontend with native Hermes runtime data.
3. Ship Mission Control as a Hermes dashboard plugin so it runs inside the authenticated local dashboard instead of creating a second backend.
4. Add Mission Control state only for product concepts Hermes does not own: missions, approval state, operator metadata and reports.
5. Build fleet cockpit across Hermes profiles and recent activity.
6. Build mission planning and approval workflow. Approval must precede any execution adapter.
7. Connect approved missions to Hermes-native sessions/tasks instead of implementing another agent loop.
8. Add unified activity/delegation view from Hermes sessions, Kanban events and runtime logs.
9. Add operator controls with explicit safety boundaries: approve, reject, stop, retry and assignment.
10. Add files/docs and machine views by consuming Hermes-native file, log and system APIs.
11. Add live updates using Hermes WebSocket/event surfaces where available.
12. Add presentation layer: cockpit/Agent City style visualization after the operational data path is reliable.
13. Verify each layer against a real Hermes installation before calling the feature operational.
