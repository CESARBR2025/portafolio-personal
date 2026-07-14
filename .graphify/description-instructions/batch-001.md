# Node Description Batch 2 of 4

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

- "lib_data_timelineentry": "TimelineEntry" | kind=code-symbol | source=lib/data.ts:L100 | neighbors=[Journey.tsx, data.ts]
- "lib_icons_geticon": "getIcon()" | kind=code-symbol | source=lib/icons.tsx:L97 | neighbors=[icons.tsx, About.tsx]
- "next_config": "next.config.ts" | kind=code-symbol | source=next.config.ts:L1 | neighbors=[140b4ea Initial commit from Create Next…, nextConfig]
- "plugins_context_loader_contextloaderplugin": "ContextLoaderPlugin()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L258 | neighbors=[context-loader.js, loadPluginState()]
- "plugins_context_loader_loadpluginstate": "loadPluginState()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L67 | neighbors=[context-loader.js, ContextLoaderPlugin()]
- "postcss_config": "postcss.config.js" | kind=code-symbol | source=postcss.config.js:L1 | neighbors=[039cf9d mejorandolo, 140b4ea Initial commit from Create Next…]
- "scripts_export_schema_getcolumns": "getColumns()" | kind=code-symbol | source=scripts/export-schema.mjs:L39 | neighbors=[export-schema.mjs, main()]
- "scripts_export_schema_getenums": "getEnums()" | kind=code-symbol | source=scripts/export-schema.mjs:L51 | neighbors=[export-schema.mjs, main()]
- "scripts_export_schema_getschemas": "getSchemas()" | kind=code-symbol | source=scripts/export-schema.mjs:L20 | neighbors=[export-schema.mjs, main()]
- "scripts_export_schema_gettables": "getTables()" | kind=code-symbol | source=scripts/export-schema.mjs:L29 | neighbors=[export-schema.mjs, main()]
- "scripts_extract_domain_extractdomain": "extractDomain()" | kind=code-symbol | source=scripts/extract-domain.mjs:L38 | neighbors=[extract-domain.mjs, loadKeywords()]
- "scripts_extract_domain_loadkeywords": "loadKeywords()" | kind=code-symbol | source=scripts/extract-domain.mjs:L14 | neighbors=[extract-domain.mjs, extractDomain()]
- "scripts_load_context_buildkeywords": "buildKeywords()" | kind=code-symbol | source=scripts/load-context.mjs:L14 | neighbors=[load-context.mjs, main()]
- "scripts_load_context_extractdomain": "extractDomain()" | kind=code-symbol | source=scripts/load-context.mjs:L31 | neighbors=[load-context.mjs, main()]
- "scripts_load_context_querygraph": "queryGraph()" | kind=code-symbol | source=scripts/load-context.mjs:L64 | neighbors=[load-context.mjs, main()]
- "scripts_load_context_resolvepath": "resolvePath()" | kind=code-symbol | source=scripts/load-context.mjs:L44 | neighbors=[load-context.mjs, buildInstructions()]
- "app_layout_jetbrainsmono": "jetbrainsMono" | kind=code-symbol | source=app/layout.tsx:L10 | neighbors=[layout.tsx]
- "app_layout_metadata": "metadata" | kind=code-symbol | source=app/layout.tsx:L12 | neighbors=[layout.tsx]
- "app_layout_montserrat": "montserrat" | kind=code-symbol | source=app/layout.tsx:L6 | neighbors=[layout.tsx]
- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=app/layout.tsx:L25 | neighbors=[layout.tsx]
- "app_page_home": "Home()" | kind=code-symbol | source=app/page.tsx:L10 | neighbors=[page.tsx]
- "components_about_about": "About()" | kind=code-symbol | source=components/About.tsx:L4 | neighbors=[About.tsx]
- "components_backtotop_backtotop": "BackToTop()" | kind=code-symbol | source=components/BackToTop.tsx:L3 | neighbors=[BackToTop.tsx]
- "components_contact_contact": "Contact()" | kind=code-symbol | source=components/Contact.tsx:L7 | neighbors=[Contact.tsx]
- "components_footer_footer": "Footer()" | kind=code-symbol | source=components/Footer.tsx:L5 | neighbors=[Footer.tsx]
- "components_hero_hero": "Hero()" | kind=code-symbol | source=components/Hero.tsx:L13 | neighbors=[Hero.tsx]
- "components_hero_roles": "ROLES" | kind=code-symbol | source=components/Hero.tsx:L7 | neighbors=[Hero.tsx]
- "components_journey_flagmap": "flagMap" | kind=code-symbol | source=components/Journey.tsx:L5 | neighbors=[Journey.tsx]
- "components_journey_journey": "Journey()" | kind=code-symbol | source=components/Journey.tsx:L24 | neighbors=[Journey.tsx]
- "components_journey_timelineitemcomponent": "TimelineItemComponent()" | kind=code-symbol | source=components/Journey.tsx:L47 | neighbors=[Journey.tsx]
- "components_journey_typeconfig": "typeConfig" | kind=code-symbol | source=components/Journey.tsx:L12 | neighbors=[Journey.tsx]
- "components_nav_nav": "Nav()" | kind=code-symbol | source=components/Nav.tsx:L6 | neighbors=[Nav.tsx]
- "components_projects_projects": "Projects()" | kind=code-symbol | source=components/Projects.tsx:L7 | neighbors=[Projects.tsx]
- "eslint_config_eslintconfig": "eslintConfig" | kind=code-symbol | source=eslint.config.mjs:L5 | neighbors=[eslint.config.mjs]
- "lib_data_project": "Project" | kind=code-symbol | source=lib/data.ts:L149 | neighbors=[data.ts]
- "lib_data_techcategory": "TechCategory" | kind=code-symbol | source=lib/data.ts:L36 | neighbors=[data.ts]
- "lib_data_timelineitem": "TimelineItem" | kind=code-symbol | source=lib/data.ts:L71 | neighbors=[data.ts]
- "lib_icons_iconmap": "iconMap" | kind=code-symbol | source=lib/icons.tsx:L7 | neighbors=[icons.tsx]
- "lib_icons_iconprops": "IconProps" | kind=code-symbol | source=lib/icons.tsx:L3 | neighbors=[icons.tsx]
- "lib_icons_techiconkeys": "techIconKeys" | kind=code-symbol | source=lib/icons.tsx:L265 | neighbors=[icons.tsx]

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
