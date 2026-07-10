# Community Labeling

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the community listing below
and write 2-5 word plain-language names for each.

## Language

Write every name in English (en). Do not switch languages.

## Communities

Community 0: techCategories, TimelineItem, getIcon(, About.tsx, About(, icons.tsx, iconMap, IconProps, techIconKeys, TechMarquee.tsx, TechMarquee(, TimelineItem.tsx
Community 1: navLinks, siteConfig, page.tsx, Home(, Contact.tsx, Contact(, Footer.tsx, Footer(, Nav.tsx, Nav(
Community 2: main, 1342ed7 subiendo portafolio, 140b4ea Initial commit from Create Next App, eslint.config.mjs, eslintConfig, next.config.ts, nextConfig, postcss.config.mjs, config
Community 3: Project, projects, Projects.tsx, Projects(, data.ts, TechCategory, ProjectCard.tsx, ProjectCard(
Community 4: montserrat, layout.tsx, jetbrainsMono, metadata, RootLayout(
Community 5: roles, Hero.tsx, Hero(, Typewriter.tsx, Typewriter(
Community 6: timelineData, Journey.tsx, Journey(, SectionHeading.tsx, SectionHeading(

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
