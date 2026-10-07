# Hermes Provider Routing and Fallback Snapshot

Status: verified
Evidence: PUBLISHED
Sources:
- https://hermes-agent.nousresearch.com/docs/user-guide/features/provider-routing
- https://hermes-agent.nousresearch.com/docs/user-guide/features/fallback-providers

## Provider routing
OpenRouter provider routing controls which underlying providers handle a request. Options include:
- sort: price, throughput, latency
- only: whitelist
- ignore: blacklist
- order: explicit priority
- require_parameters
- data_collection
- per-model overrides

Routing is OpenRouter-specific and is ignored by Nous Portal/direct provider connections.

This permits cost-first, speed-first, throughput-first, provider-pinned, privacy-exclusion, and ordered-fallback strategies.

## Fallback layers
Hermes documents three resilience layers:
1. Credential pools for multiple credentials within one provider.
2. Primary model fallback across provider:model pairs.
3. Auxiliary-task fallback for side tasks such as vision and compression.

The current fallback configuration is fallback_providers, an ordered list of provider/model entries. hermes fallback manages it interactively.

Fallback works across CLI, messaging gateway, Desktop/TUI, subagent delegation, and Cron, with documented inheritance/override behavior.

## Local/cloud hybrid
Official examples explicitly include a local model as a fallback for a cloud primary using a custom localhost endpoint. This validates a cloud-primary/local-fallback architecture as a supported Hermes pattern.

## Important distinction
Provider routing chooses the backend behind OpenRouter. Fallback providers switch to a different configured provider/model when the primary route fails. They solve different problems and can be combined.
