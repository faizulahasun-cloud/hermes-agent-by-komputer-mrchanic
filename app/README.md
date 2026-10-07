# Hermes Mission Control

First application layer for this repository.

## Current scope
- Dependency-free static frontend.
- Agent fleet view based on collected Hermes architecture.
- Mission queue modeled on Hermes Kanban concepts.
- Source/evidence view linked to the repository corpus.
- Workflow view for reusable orchestration patterns.
- Command surface is a UI stub until a Hermes runtime/API boundary is implemented.

## Boundary
The app does not embed credentials, live Hermes state, profiles, memories, or secrets. Those remain runtime-owned. The repository remains the portable/reproducible source layer.

## Next layer
Wire the command surface to a local Hermes gateway/API and replace static state with read-only runtime adapters. Add profile-specific adapters only when the profile contract is defined.