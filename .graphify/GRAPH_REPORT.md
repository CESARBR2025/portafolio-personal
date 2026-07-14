# Graph Report - .  (2026-07-14)

## Corpus Check
- Corpus is ~26,605 words - fits in a single context window. You may not need a graph.

## Summary
- 125 nodes · 205 edges · 11 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: contains: 97 · MODIFIES: 44 · imports_from: 19 · calls: 17 · imports: 17 · ON_BRANCH: 6 · PARENT_OF: 5


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 39 · Candidates: 70
- Excluded: 8 untracked · 44136 ignored · 0 sensitive · 16 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `b2c7237`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `siteConfig` - 7 edges
2. `main()` - 5 edges
3. `main()` - 5 edges
4. `cacheGet()` - 4 edges
5. `cacheSet()` - 4 edges
6. `IconImage()` - 4 edges
7. `cacheKey()` - 3 edges
8. `graphifyQuery()` - 3 edges
9. `graphifySummary()` - 3 edges
10. `navLinks` - 3 edges

## Surprising Connections (you probably didn't know these)
- `039cf9d mejorandolo` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 1 → community 2_
- `140b4ea Initial commit from Create Next App` --ON_BRANCH--> `main`  [EXTRACTED]
  git → git  _Bridges community 4 → community 2_
- `140b4ea Initial commit from Create Next App` --PARENT_OF--> `1342ed7 subiendo portafolio`  [EXTRACTED]
  git → git  _Bridges community 4 → community 1_

## Communities

### Community 0 - "Community 0"
Cohesion: 0.08
Nodes (18): cacheGet(), cacheKey(), cacheSet(), CHECKPOINT_SCRIPT, ContextLoaderPlugin(), DECISION_MSG, __dirname, GOLDEN_RULES (+10 more)

### Community 1 - "Community 1"
Cohesion: 0.24
Nodes (4): 039cf9d mejorandolo, 1342ed7 subiendo portafolio, navLinks, siteConfig

### Community 2 - "Community 2"
Cohesion: 0.27
Nodes (9): main, 84e258b mejorando portfaolio, b2c7237 cambios varios, dddb5f5 preparando, techCategories, getIcon(), iconMap, IconProps (+1 more)

### Community 3 - "Community 3"
Cohesion: 0.17
Nodes (2): CWD, __dirname

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (6): jetbrainsMono, metadata, montserrat, 140b4ea Initial commit from Create Next App, eslintConfig, nextConfig

### Community 5 - "Community 5"
Cohesion: 0.27
Nodes (10): buildInstructions(), buildKeywords(), CONTEXT_MAP, __dirname, extractDomain(), GRAPH_JSON, main(), queryGraph() (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (7): __dirname, getColumns(), getEnums(), getSchemas(), getTables(), main(), ROOT

### Community 7 - "Community 7"
Cohesion: 0.29
Nodes (5): ROLES, Project, roles, TechCategory, TimelineItem

### Community 8 - "Community 8"
Cohesion: 0.29
Nodes (4): flagMap, typeConfig, timelineData, TimelineEntry

### Community 9 - "Community 9"
Cohesion: 0.40
Nodes (5): CONTEXT_MAP, __dirname, extractDomain(), loadKeywords(), ROOT

### Community 10 - "Community 10"
Cohesion: 0.50
Nodes (2): projects, IconImage()

## Knowledge Gaps
- **36 isolated node(s):** `__dirname`, `ROOT`, `GRAPH_PATH`, `CHECKPOINT_SCRIPT`, `graphifyCache` (+31 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 3`** (2 nodes): `CWD`, `__dirname`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `projects`, `IconImage()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `siteConfig` connect `Community 1` to `Community 4`, `Community 2`, `Community 7`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `IconImage()` connect `Community 10` to `Community 2`, `Community 8`?**
  _High betweenness centrality (0.000) - this node is a cross-community bridge._
- **What connects `__dirname`, `ROOT`, `GRAPH_PATH` to the rest of the system?**
  _36 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.08275862068965517 - nodes in this community are weakly interconnected._