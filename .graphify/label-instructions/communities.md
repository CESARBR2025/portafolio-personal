# Community Labeling

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the community listing below
and write 2-5 word plain-language names for each.

## Language

Write every name in English (en). Do not switch languages.

## Communities

Community 0: cacheGet(, cacheKey(, cacheSet(, graphifyQuery(, graphifySummary(, context-loader.js, BUDGET_WARN_MSG(, cacheClear(, checkBudget(, checkpoint(, CHECKPOINT_SCRIPT, ContextLoaderPlugin(
Community 1: navLinks, siteConfig, page.tsx, Home(, 039cf9d mejorandolo, 1342ed7 subiendo portafolio, BackToTop.tsx, BackToTop(, Contact.tsx, Contact(, Footer.tsx, Footer(
Community 2: main, 84e258b mejorando portfaolio, b2c7237 cambios varios, dddb5f5 preparando, About.tsx, About(, techCategories, icons.tsx, getIcon(, iconMap, IconProps, techIconKeys
Community 3: populate-vault.mjs, CWD, __dirname, main(, populateAPIRoutes(, populateComandos(, populateEnvVars(, populateEstructura(, populateFeatures(, populateLibrerias(, populateMiddleware(, populateServerActions(
Community 4: layout.tsx, jetbrainsMono, metadata, montserrat, RootLayout(, 140b4ea Initial commit from Create Next App, eslint.config.mjs, eslintConfig, next.config.ts, nextConfig, postcss.config.js
Community 5: main(, load-context.mjs, buildInstructions(, buildKeywords(, CONTEXT_MAP, __dirname, extractDomain(, GRAPH_JSON, queryGraph(, resolvePath(, ROOT
Community 6: main(, export-schema.mjs, __dirname, getColumns(, getEnums(, getSchemas(, getTables(, ROOT, typeToReadable(
Community 7: Hero.tsx, Hero(, ROLES, data.ts, Project, TechCategory, TimelineItem
Community 8: Journey.tsx, flagMap, Journey(, TimelineItemComponent(, typeConfig, timelineData, TimelineEntry
Community 9: extract-domain.mjs, CONTEXT_MAP, __dirname, extractDomain(, loadKeywords(, ROOT
Community 10: IconImage(, Projects.tsx, Projects(, projects

## Instructions

Write a single JSON object mapping each community id (as a string) to its
2-5 word name to: /Users/cesarbr/Documents/dev/personal/portafolio-web/portafolio-web/.graphify/label-instructions/communities.json

Example:
```json
{
  "0": "Authentication Flow",
  "1": "Authentication Flow",
  "2": "Authentication Flow"
}
```

Then re-run `graphify update` (or `graphify label`) to ingest the names.
