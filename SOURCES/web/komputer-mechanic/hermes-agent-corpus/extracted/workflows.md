# Extracted Workflows

These workflows are normalized from the creator's public Hermes-related material.

## Specialist team
Owner -> Orchestrator -> Specialist -> Verification -> Result

The coordinator decomposes work, sends a structured brief, specialist executes within its boundary, coordinator verifies, then reports the finished result.

## Telegram fleet
Telegram group:
- General -> main/orchestrator
- Topic A -> specialist A
- Topic B -> specialist B
- Topic C -> specialist C

One bot connection, profile routing underneath. Specialists do not need their own Telegram connection.

## Job-hunting pipeline
Orchestrator
-> Scout: search, deduplicate, score
-> human selection
-> Job Reader: inspect selected job
-> CV Adapter: tailor only from verified CV facts
-> output/tracker

This is a clear example of narrow specialists and staged handoff.

## Personal chief-of-staff
Orchestrator
-> communications
-> operations/calendar/tasks
-> research
-> finance
-> growth

The coordinator remains owner-facing while specialists handle bounded domains.

## Document/study pipeline
Input document
-> coordinator
-> specialist research/reading
-> structured notes
-> quiz/flashcard/planning specialists
-> final result

The creator uses this pattern to demonstrate chained specialist execution.

## Mission control
Runtime/data layer -> read-only adapters -> dashboard views -> mission/task controls -> optional direct execution controls.

The dashboard should consume real runtime state rather than hard-coded counters once backend integration begins.

## Durable memory
Raw source/originals -> normalized processed knowledge -> agent read-before-work -> agent write-after-work -> nightly maintenance -> Git safety net.

The creator's memory architecture deliberately keeps raw evidence immutable and processed knowledge editable.

## Quiet scheduled monitoring
Scheduled check -> inspect target -> if useful change/result exists, report -> otherwise return the exact silent sentinel -> Hermes suppresses notification.

## Connected-tool safety
Define purpose -> define approval boundary -> connect tool -> test read-only behavior -> only then allow writes/side effects.

## Specialist pipeline
Input/document/task -> coordinator -> specialist 1 -> structured handoff -> specialist 2 -> verification -> final output.

Examples include job search -> job reading -> CV adaptation and document upload -> research -> quiz/flashcards/planning.

## Backup/verify loop
Before change -> backup current working state -> make one change -> inspect/test actual result -> record outcome -> continue.

This is an operating discipline for the project, not a claim that every step is built into Hermes.

## Multiple runtime instances
Keep separate Hermes environments addressable independently when multiple setups share one server. Do not assume one global runtime state.

## Existing-crew integration
The latest Mission Control 3.0 material explicitly provides an existing-crew path: add Mission Control around current profiles rather than forcing a rename/rebuild. This is important for our project because the user's existing Hermes installation should remain authoritative.
