# Node Description Batch 1 of 4

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
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "plugins_context_loader": "context-loader.js" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L1 | neighbors=[039cf9d mejorandolo, BUDGET_WARN_MSG(), cacheClear(), cacheGet(), cacheKey(), cacheSet()]
- "lib_data": "data.ts" | kind=code-symbol | source=lib/data.ts:L1 | neighbors=[layout.tsx, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, b2c7237 cambios varios, dddb5f5 preparando, About.tsx]
- "commit:repo:github.com/CESARBR2025/portafolio-personal@039cf9db01a425d7f14468b976e75be945c6e597": "039cf9d mejorandolo" | kind=Commit | source=git | neighbors=[layout.tsx, page.tsx, main, dddb5f5 preparando, About.tsx, BackToTop.tsx]
- "commit:repo:github.com/CESARBR2025/portafolio-personal@1342ed7c7f6933afe5f1ef97066ad5f7ddca289e": "1342ed7 subiendo portafolio" | kind=Commit | source=git | neighbors=[layout.tsx, page.tsx, main, 039cf9d mejorandolo, About.tsx, Contact.tsx]
- "components_journey": "Journey.tsx" | kind=code-symbol | source=components/Journey.tsx:L1 | neighbors=[page.tsx, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, 84e258b mejorando portfaolio, flagMap, Journey()]
- "app_page": "page.tsx" | kind=code-symbol | source=app/page.tsx:L1 | neighbors=[Home(), About.tsx, BackToTop.tsx, Contact.tsx, Footer.tsx, Hero.tsx]
- "components_about": "About.tsx" | kind=code-symbol | source=components/About.tsx:L1 | neighbors=[page.tsx, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, 84e258b mejorando portfaolio, dddb5f5 preparando, About()]
- "lib_icons": "icons.tsx" | kind=code-symbol | source=lib/icons.tsx:L1 | neighbors=[1342ed7 subiendo portafolio, 84e258b mejorando portfaolio, b2c7237 cambios varios, dddb5f5 preparando, About.tsx, Journey.tsx]
- "scripts_populate_vault": "populate-vault.mjs" | kind=code-symbol | source=scripts/populate-vault.mjs:L1 | neighbors=[039cf9d mejorandolo, CWD, __dirname, main(), populateAPIRoutes(), populateComandos()]
- "scripts_load_context": "load-context.mjs" | kind=code-symbol | source=scripts/load-context.mjs:L1 | neighbors=[039cf9d mejorandolo, buildInstructions(), buildKeywords(), CONTEXT_MAP, __dirname, extractDomain()]
- "app_layout": "layout.tsx" | kind=code-symbol | source=app/layout.tsx:L1 | neighbors=[metadata, montserrat, RootLayout(), data.ts, siteConfig, 039cf9d mejorandolo]
- "components_hero": "Hero.tsx" | kind=code-symbol | source=components/Hero.tsx:L1 | neighbors=[page.tsx, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, dddb5f5 preparando, Hero(), ROLES]
- "components_projects": "Projects.tsx" | kind=code-symbol | source=components/Projects.tsx:L1 | neighbors=[page.tsx, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, 84e258b mejorando portfaolio, Projects(), data.ts]
- "scripts_export_schema": "export-schema.mjs" | kind=code-symbol | source=scripts/export-schema.mjs:L1 | neighbors=[039cf9d mejorandolo, __dirname, getColumns(), getEnums(), getSchemas(), getTables()]
- "commit:repo:github.com/CESARBR2025/portafolio-personal@140b4ea376e8b34d2beb2154c96ceb488b90c588": "140b4ea Initial commit from Create Next App" | kind=Commit | source=git | neighbors=[layout.tsx, page.tsx, main, 1342ed7 subiendo portafolio, eslint.config.mjs, next.config.ts]
- "commit:repo:github.com/CESARBR2025/portafolio-personal@84e258b5c881d36bbdef50e056922d319600df00": "84e258b mejorando portfaolio" | kind=Commit | source=git | neighbors=[main, b2c7237 cambios varios, About.tsx, Journey.tsx, Projects.tsx, icons.tsx]
- "commit:repo:github.com/CESARBR2025/portafolio-personal@dddb5f52c2e3a0bd5f110d822d6d3065286985f0": "dddb5f5 preparando" | kind=Commit | source=git | neighbors=[039cf9d mejorandolo, main, 84e258b mejorando portfaolio, About.tsx, Hero.tsx, data.ts]
- "components_footer": "Footer.tsx" | kind=code-symbol | source=components/Footer.tsx:L1 | neighbors=[page.tsx, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, Footer(), data.ts, navLinks]
- "components_nav": "Nav.tsx" | kind=code-symbol | source=components/Nav.tsx:L1 | neighbors=[page.tsx, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, Nav(), data.ts, navLinks]
- "lib_data_siteconfig": "siteConfig" | kind=code-symbol | source=lib/data.ts:L1 | neighbors=[layout.tsx, About.tsx, Contact.tsx, Footer.tsx, Hero.tsx, Nav.tsx]
- "branch:repo:github.com/CESARBR2025/portafolio-personal#main": "main" | kind=Branch | source=git | neighbors=[039cf9d mejorandolo, 1342ed7 subiendo portafolio, 140b4ea Initial commit from Create Next…, 84e258b mejorando portfaolio, b2c7237 cambios varios, dddb5f5 preparando]
- "components_contact": "Contact.tsx" | kind=code-symbol | source=components/Contact.tsx:L1 | neighbors=[page.tsx, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, Contact(), data.ts, siteConfig]
- "scripts_extract_domain": "extract-domain.mjs" | kind=code-symbol | source=scripts/extract-domain.mjs:L1 | neighbors=[039cf9d mejorandolo, CONTEXT_MAP, __dirname, extractDomain(), loadKeywords(), ROOT]
- "scripts_export_schema_main": "main()" | kind=code-symbol | source=scripts/export-schema.mjs:L76 | neighbors=[export-schema.mjs, getColumns(), getEnums(), getSchemas(), getTables()]
- "scripts_load_context_main": "main()" | kind=code-symbol | source=scripts/load-context.mjs:L117 | neighbors=[load-context.mjs, buildInstructions(), buildKeywords(), extractDomain(), queryGraph()]
- "commit:repo:github.com/CESARBR2025/portafolio-personal@b2c72377f19cfff4854fd2a7297462321e7cff76": "b2c7237 cambios varios" | kind=Commit | source=git | neighbors=[84e258b mejorando portfaolio, main, data.ts, icons.tsx]
- "lib_icons_iconimage": "IconImage()" | kind=code-symbol | source=lib/icons.tsx:L55 | neighbors=[About.tsx, Journey.tsx, Projects.tsx, icons.tsx]
- "plugins_context_loader_cacheget": "cacheGet()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L44 | neighbors=[context-loader.js, cacheKey(), graphifyQuery(), graphifySummary()]
- "plugins_context_loader_cacheset": "cacheSet()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L55 | neighbors=[context-loader.js, cacheKey(), graphifyQuery(), graphifySummary()]
- "components_backtotop": "BackToTop.tsx" | kind=code-symbol | source=components/BackToTop.tsx:L1 | neighbors=[page.tsx, 039cf9d mejorandolo, BackToTop()]
- "lib_data_navlinks": "navLinks" | kind=code-symbol | source=lib/data.ts:L28 | neighbors=[Footer.tsx, Nav.tsx, data.ts]
- "plugins_context_loader_cachekey": "cacheKey()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L35 | neighbors=[context-loader.js, cacheGet(), cacheSet()]
- "plugins_context_loader_graphifyquery": "graphifyQuery()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L116 | neighbors=[context-loader.js, cacheGet(), cacheSet()]
- "plugins_context_loader_graphifysummary": "graphifySummary()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L139 | neighbors=[context-loader.js, cacheGet(), cacheSet()]
- "scripts_load_context_buildinstructions": "buildInstructions()" | kind=code-symbol | source=scripts/load-context.mjs:L79 | neighbors=[load-context.mjs, resolvePath(), main()]
- "eslint_config": "eslint.config.mjs" | kind=code-symbol | source=eslint.config.mjs:L1 | neighbors=[140b4ea Initial commit from Create Next…, eslintConfig]
- "lib_data_projects": "projects" | kind=code-symbol | source=lib/data.ts:L160 | neighbors=[Projects.tsx, data.ts]
- "lib_data_roles": "roles" | kind=code-symbol | source=lib/data.ts:L22 | neighbors=[data.ts, Hero.tsx]
- "lib_data_techcategories": "techCategories" | kind=code-symbol | source=lib/data.ts:L41 | neighbors=[About.tsx, data.ts]
- "lib_data_timelinedata": "timelineData" | kind=code-symbol | source=lib/data.ts:L111 | neighbors=[Journey.tsx, data.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: /Users/cesarbr/Documents/dev/personal/portafolio-web/portafolio-web/.graphify/description-instructions/batch-000.json

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
