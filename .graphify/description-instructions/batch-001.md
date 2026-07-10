# Node Description Batch 2 of 2

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "components_journey_journey": "Journey()" | kind=code-symbol | source=components/Journey.tsx:L5 | neighbors=[Journey.tsx]
- "components_nav_nav": "Nav()" | kind=code-symbol | source=components/Nav.tsx:L6 | neighbors=[Nav.tsx]
- "components_projects_projects": "Projects()" | kind=code-symbol | source=components/Projects.tsx:L7 | neighbors=[Projects.tsx]
- "eslint_config_eslintconfig": "eslintConfig" | kind=code-symbol | source=eslint.config.mjs:L5 | neighbors=[eslint.config.mjs]
- "lib_data_techcategory": "TechCategory" | kind=code-symbol | source=lib/data.ts:L34 | neighbors=[data.ts]
- "lib_icons_iconmap": "iconMap" | kind=code-symbol | source=lib/icons.tsx:L5 | neighbors=[icons.tsx]
- "lib_icons_iconprops": "IconProps" | kind=code-symbol | source=lib/icons.tsx:L3 | neighbors=[icons.tsx]
- "lib_icons_techiconkeys": "techIconKeys" | kind=code-symbol | source=lib/icons.tsx:L265 | neighbors=[icons.tsx]
- "next_config_nextconfig": "nextConfig" | kind=code-symbol | source=next.config.ts:L3 | neighbors=[next.config.ts]
- "postcss_config_config": "config" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[postcss.config.mjs]
- "ui_projectcard_projectcard": "ProjectCard()" | kind=code-symbol | source=components/ui/ProjectCard.tsx:L4 | neighbors=[ProjectCard.tsx]
- "ui_sectionheading_sectionheading": "SectionHeading()" | kind=code-symbol | source=components/ui/SectionHeading.tsx:L1 | neighbors=[SectionHeading.tsx]
- "ui_techmarquee_techmarquee": "TechMarquee()" | kind=code-symbol | source=components/ui/TechMarquee.tsx:L5 | neighbors=[TechMarquee.tsx]
- "ui_timelineitem_timelineitem": "TimelineItem()" | kind=code-symbol | source=components/ui/TimelineItem.tsx:L5 | neighbors=[TimelineItem.tsx]
- "ui_typewriter_typewriter": "Typewriter()" | kind=code-symbol | source=components/ui/Typewriter.tsx:L5 | neighbors=[Typewriter.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: /Users/cesarbr/Documents/dev/personal/portafolio-web/portafolio-web/.graphify/description-instructions/batch-001.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
