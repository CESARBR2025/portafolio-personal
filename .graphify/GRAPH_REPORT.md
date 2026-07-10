# Graph Report - .  (2026-07-10)

## Corpus Check
- Corpus is ~9,130 words - fits in a single context window. You may not need a graph.

## Summary
- 55 nodes · 104 edges · 7 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 33 · imports_from: 29 · MODIFIES: 21 · imports: 18 · ON_BRANCH: 2 · PARENT_OF: 1


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 27 · Candidates: 33
- Excluded: 26 untracked · 42511 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `1342ed7`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `siteConfig` - 7 edges
2. `getIcon()` - 5 edges
3. `navLinks` - 3 edges
4. `roles` - 2 edges
5. `techCategories` - 2 edges
6. `TimelineItem` - 2 edges
7. `timelineData` - 2 edges
8. `Project` - 2 edges
9. `projects` - 2 edges
10. `montserrat` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities

### Community 0 - "Community 0"
Cohesion: 0.21
Nodes (6): techCategories, TimelineItem, getIcon(), iconMap, IconProps, techIconKeys

### Community 1 - "Community 1"
Cohesion: 0.27
Nodes (2): navLinks, siteConfig

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (6): main, 1342ed7 subiendo portafolio, 140b4ea Initial commit from Create Next App, eslintConfig, nextConfig, config

### Community 3 - "Community 3"
Cohesion: 0.36
Nodes (3): Project, projects, TechCategory

### Community 4 - "Community 4"
Cohesion: 0.40
Nodes (3): jetbrainsMono, metadata, montserrat

### Community 5 - "Community 5"
Cohesion: 0.40
Nodes (1): roles

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (1): timelineData

## Knowledge Gaps
- **10 isolated node(s):** `montserrat`, `jetbrainsMono`, `metadata`, `eslintConfig`, `TechCategory` (+5 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 1`** (2 nodes): `navLinks`, `siteConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 5`** (1 nodes): `roles`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 6`** (1 nodes): `timelineData`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `siteConfig` connect `Community 1` to `Community 4`, `Community 0`, `Community 5`, `Community 3`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `getIcon()` connect `Community 0` to `Community 3`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `navLinks` connect `Community 1` to `Community 3`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `montserrat`, `jetbrainsMono`, `metadata` to the rest of the system?**
  _10 weakly-connected nodes found - possible documentation gaps or missing edges._