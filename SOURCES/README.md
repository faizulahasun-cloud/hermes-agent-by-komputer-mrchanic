# Hermes Source Collection

Purpose: build a durable, source-linked knowledge base for Hermes Agent, emphasizing creator-published workflows, prompts, profiles, skills, SOUL/persona patterns, multi-agent patterns, and practical tutorials.

## Rules

1. Source first. Keep the original URL and source identity before extracting knowledge.
2. Follow links. Every useful source is a node. Inspect its useful outbound links and add them to the catalog.
3. Separate source types: YouTube, official docs, creator tutorials, profiles/prompts, community discussions, and derived notes.
4. Do not fabricate creator intent. If a prompt/profile is reconstructed, label it reconstructed.
5. No hidden chain-of-thought collection. We collect publicly published prompts, instructions, profile files, SOUL/persona definitions, workflow descriptions, and conclusions, not private/internal reasoning.
6. Preserve provenance. Every extracted note points to source IDs.
7. Keep raw context separate from distilled knowledge.
8. Version captures instead of silently replacing changed sources.
9. Never commit API keys, auth tokens, private sessions, personal memory, or exported credentials.

## Indexes

- YouTube: SOURCES/youtube/index.md
- Web/tutorials: SOURCES/web/index.md
- Context folder rules: SOURCES/CONTEXT-FOLDER-RULES.md
- Extraction schema: SOURCES/EXTRACTION-SCHEMA.md

## Priority

P0 = Nous Research official material, then maintainer-authored material.
P1 = creator-authored profiles/prompts and major tutorial playlists.
P2 = specialized tutorials and community discussions.
Every useful outbound Hermes link discovered from P0/P1 sources becomes a new catalog entry.