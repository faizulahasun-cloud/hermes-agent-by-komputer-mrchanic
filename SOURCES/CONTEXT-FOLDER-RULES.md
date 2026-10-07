# Context Upload Folder Rules

This repository is a source library, not a dump folder. Use the same structure for every YouTube video, playlist, tutorial, documentation page, or community source.

## Canonical pattern

SOURCES/
  youtube/
    <creator-slug>/
      <playlist-or-topic-slug>/
        001-<video-slug>/
          source.md
          transcript.md
          links.md
          extracted/
            concepts.md
            prompts.md
            profiles.md
            workflows.md
            commands.md
            quotes.md
          assets/
  web/
    <domain-or-creator-slug>/
      <topic-slug>/
        source.md
        extracted/
  profiles/
    <creator-or-source-slug>/
      <profile-name>/
        profile.md
        provenance.md
        source-links.md
  derived/
    topic/

## One source = one source folder

For YouTube: source.md = metadata and canonical URL; transcript.md = transcript/context supplied by the user or legally/officially obtained; links.md = useful URLs from description, chapters, pinned comments, linked tutorials, and referenced repos; extracted/*.md = separated knowledge types.

## Naming

Use lowercase, hyphens, stable slugs, and numeric prefixes for ordered playlist videos. Do not put dates in folder names unless the title depends on a date.

Example: SOURCES/youtube/tonbi/onchain-hermes-tutorials/001-masterclass-installation-setup/

## Status

verified = URL and source identity confirmed.
discovered = found during traversal; not fully checked.
broken = URL no longer resolves.
superseded = replaced by a newer canonical source.
community = non-official source.
derived = generated from multiple sources and never primary evidence.

## Evidence labels

PUBLISHED = directly present in source.
QUOTED = short quotation with attribution.
PARAPHRASED = faithful restatement.
INFERRED = interpretation requiring citation.
RECONSTRUCTED = rebuilt from observable behavior or multiple sources.
UNKNOWN = do not guess.

## Prompt/profile collection

Collect only what is publicly published: system prompts, user prompts, reusable task prompts, SOUL.md/persona files, profile definitions, bot descriptions, skill files, workflow templates, configuration examples, and delegation/kanban patterns. Never label a reconstructed prompt as the creator's exact prompt.

## YouTube upload workflow

1. Create the source folder.
2. Save canonical URL and metadata in source.md.
3. Put supplied transcript/context in transcript.md.
4. Traverse every relevant link and record it in links.md.
5. Extract prompts, profiles, workflows, commands, and concepts separately.
6. Add source IDs and timestamps/headings to extracted items.
7. Create new source entries for newly discovered sources.
8. Update the global index.
9. Only then create derived summaries.

## Layer separation

Raw/context = what the creator actually published.
Knowledge = normalized facts and procedures.
Profile = reusable Hermes profile/SOUL/skill artifacts.
Derived = synthesis across creators.
