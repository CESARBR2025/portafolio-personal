# Node Description Batch 1 of 2

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

- "lib_data": "data.ts" | kind=code-symbol | source=lib/data.ts:L1 | neighbors=[layout.tsx, 1342ed7 subiendo portafolio, About.tsx, Contact.tsx, Footer.tsx, Hero.tsx]
- "commit:repo:github.com/CESARBR2025/portafolio-personal@1342ed7c7f6933afe5f1ef97066ad5f7ddca289e": "1342ed7 subiendo portafolio" | kind=Commit | source=git | neighbors=[layout.tsx, page.tsx, main, About.tsx, Contact.tsx, Footer.tsx]
- "app_page": "page.tsx" | kind=code-symbol | source=app/page.tsx:L1 | neighbors=[Home(), About.tsx, Contact.tsx, Footer.tsx, Hero.tsx, Journey.tsx]
- "components_about": "About.tsx" | kind=code-symbol | source=components/About.tsx:L1 | neighbors=[page.tsx, 1342ed7 subiendo portafolio, About(), data.ts, siteConfig, techCategories]
- "lib_icons": "icons.tsx" | kind=code-symbol | source=lib/icons.tsx:L1 | neighbors=[1342ed7 subiendo portafolio, About.tsx, getIcon(), iconMap, IconProps, techIconKeys]
- "app_layout": "layout.tsx" | kind=code-symbol | source=app/layout.tsx:L1 | neighbors=[jetbrainsMono, metadata, montserrat, RootLayout(), data.ts, siteConfig]
- "commit:repo:github.com/CESARBR2025/portafolio-personal@140b4ea376e8b34d2beb2154c96ceb488b90c588": "140b4ea Initial commit from Create Next App" | kind=Commit | source=git | neighbors=[layout.tsx, page.tsx, main, 1342ed7 subiendo portafolio, eslint.config.mjs, next.config.ts]
- "components_hero": "Hero.tsx" | kind=code-symbol | source=components/Hero.tsx:L1 | neighbors=[page.tsx, 1342ed7 subiendo portafolio, Hero(), data.ts, roles, siteConfig]
- "components_journey": "Journey.tsx" | kind=code-symbol | source=components/Journey.tsx:L1 | neighbors=[page.tsx, 1342ed7 subiendo portafolio, Journey(), data.ts, timelineData, SectionHeading.tsx]
- "components_projects": "Projects.tsx" | kind=code-symbol | source=components/Projects.tsx:L1 | neighbors=[page.tsx, 1342ed7 subiendo portafolio, Projects(), data.ts, projects, ProjectCard.tsx]
- "lib_data_siteconfig": "siteConfig" | kind=code-symbol | source=lib/data.ts:L1 | neighbors=[layout.tsx, About.tsx, Contact.tsx, Footer.tsx, Hero.tsx, Nav.tsx]
- "ui_projectcard": "ProjectCard.tsx" | kind=code-symbol | source=components/ui/ProjectCard.tsx:L1 | neighbors=[1342ed7 subiendo portafolio, Projects.tsx, data.ts, Project, icons.tsx, getIcon()]
- "ui_timelineitem": "TimelineItem.tsx" | kind=code-symbol | source=components/ui/TimelineItem.tsx:L1 | neighbors=[1342ed7 subiendo portafolio, Journey.tsx, data.ts, TimelineItem, icons.tsx, getIcon()]
- "components_contact": "Contact.tsx" | kind=code-symbol | source=components/Contact.tsx:L1 | neighbors=[page.tsx, 1342ed7 subiendo portafolio, Contact(), data.ts, siteConfig, SectionHeading.tsx]
- "components_footer": "Footer.tsx" | kind=code-symbol | source=components/Footer.tsx:L1 | neighbors=[page.tsx, 1342ed7 subiendo portafolio, Footer(), data.ts, navLinks, siteConfig]
- "components_nav": "Nav.tsx" | kind=code-symbol | source=components/Nav.tsx:L1 | neighbors=[page.tsx, 1342ed7 subiendo portafolio, Nav(), data.ts, navLinks, siteConfig]
- "ui_sectionheading": "SectionHeading.tsx" | kind=code-symbol | source=components/ui/SectionHeading.tsx:L1 | neighbors=[1342ed7 subiendo portafolio, About.tsx, Contact.tsx, Journey.tsx, Projects.tsx, SectionHeading()]
- "lib_icons_geticon": "getIcon()" | kind=code-symbol | source=lib/icons.tsx:L261 | neighbors=[About.tsx, icons.tsx, ProjectCard.tsx, TechMarquee.tsx, TimelineItem.tsx]
- "ui_techmarquee": "TechMarquee.tsx" | kind=code-symbol | source=components/ui/TechMarquee.tsx:L1 | neighbors=[1342ed7 subiendo portafolio, About.tsx, icons.tsx, getIcon(), TechMarquee()]
- "lib_data_navlinks": "navLinks" | kind=code-symbol | source=lib/data.ts:L26 | neighbors=[Footer.tsx, Nav.tsx, data.ts]
- "ui_typewriter": "Typewriter.tsx" | kind=code-symbol | source=components/ui/Typewriter.tsx:L1 | neighbors=[1342ed7 subiendo portafolio, Hero.tsx, Typewriter()]
- "branch:repo:github.com/CESARBR2025/portafolio-personal#main": "main" | kind=Branch | source=git | neighbors=[1342ed7 subiendo portafolio, 140b4ea Initial commit from Create Next…]
- "eslint_config": "eslint.config.mjs" | kind=code-symbol | source=eslint.config.mjs:L1 | neighbors=[140b4ea Initial commit from Create Next…, eslintConfig]
- "lib_data_project": "Project" | kind=code-symbol | source=lib/data.ts:L151 | neighbors=[data.ts, ProjectCard.tsx]
- "lib_data_projects": "projects" | kind=code-symbol | source=lib/data.ts:L161 | neighbors=[Projects.tsx, data.ts]
- "lib_data_roles": "roles" | kind=code-symbol | source=lib/data.ts:L19 | neighbors=[Hero.tsx, data.ts]
- "lib_data_techcategories": "techCategories" | kind=code-symbol | source=lib/data.ts:L39 | neighbors=[About.tsx, data.ts]
- "lib_data_timelinedata": "timelineData" | kind=code-symbol | source=lib/data.ts:L82 | neighbors=[Journey.tsx, data.ts]
- "lib_data_timelineitem": "TimelineItem" | kind=code-symbol | source=lib/data.ts:L71 | neighbors=[data.ts, TimelineItem.tsx]
- "next_config": "next.config.ts" | kind=code-symbol | source=next.config.ts:L1 | neighbors=[140b4ea Initial commit from Create Next…, nextConfig]
- "postcss_config": "postcss.config.mjs" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[140b4ea Initial commit from Create Next…, config]
- "app_layout_jetbrainsmono": "jetbrainsMono" | kind=code-symbol | source=app/layout.tsx:L10 | neighbors=[layout.tsx]
- "app_layout_metadata": "metadata" | kind=code-symbol | source=app/layout.tsx:L15 | neighbors=[layout.tsx]
- "app_layout_montserrat": "montserrat" | kind=code-symbol | source=app/layout.tsx:L5 | neighbors=[layout.tsx]
- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=app/layout.tsx:L28 | neighbors=[layout.tsx]
- "app_page_home": "Home()" | kind=code-symbol | source=app/page.tsx:L9 | neighbors=[page.tsx]
- "components_about_about": "About()" | kind=code-symbol | source=components/About.tsx:L9 | neighbors=[About.tsx]
- "components_contact_contact": "Contact()" | kind=code-symbol | source=components/Contact.tsx:L7 | neighbors=[Contact.tsx]
- "components_footer_footer": "Footer()" | kind=code-symbol | source=components/Footer.tsx:L5 | neighbors=[Footer.tsx]
- "components_hero_hero": "Hero()" | kind=code-symbol | source=components/Hero.tsx:L7 | neighbors=[Hero.tsx]

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
