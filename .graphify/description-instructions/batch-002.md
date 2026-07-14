# Node Description Batch 3 of 4

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

- "next_config_nextconfig": "nextConfig" | kind=code-symbol | source=next.config.ts:L3 | neighbors=[next.config.ts]
- "plugins_context_loader_budget_warn_msg": "BUDGET_WARN_MSG()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L95 | neighbors=[context-loader.js]
- "plugins_context_loader_cacheclear": "cacheClear()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L60 | neighbors=[context-loader.js]
- "plugins_context_loader_checkbudget": "checkBudget()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L216 | neighbors=[context-loader.js]
- "plugins_context_loader_checkpoint": "checkpoint()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L171 | neighbors=[context-loader.js]
- "plugins_context_loader_checkpoint_script": "CHECKPOINT_SCRIPT" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L23 | neighbors=[context-loader.js]
- "plugins_context_loader_decision_msg": "DECISION_MSG" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L101 | neighbors=[context-loader.js]
- "plugins_context_loader_dirname": "__dirname" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L20 | neighbors=[context-loader.js]
- "plugins_context_loader_getfilestouched": "getFilesTouched()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L231 | neighbors=[context-loader.js]
- "plugins_context_loader_golden_rules": "GOLDEN_RULES" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L83 | neighbors=[context-loader.js]
- "plugins_context_loader_graph_path": "GRAPH_PATH" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L22 | neighbors=[context-loader.js]
- "plugins_context_loader_graphify_stale_msg": "GRAPHIFY_STALE_MSG" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L105 | neighbors=[context-loader.js]
- "plugins_context_loader_graphifycache": "graphifyCache" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L33 | neighbors=[context-loader.js]
- "plugins_context_loader_isgenerictask": "isGenericTask()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L162 | neighbors=[context-loader.js]
- "plugins_context_loader_pendingdecisions": "pendingDecisions()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L199 | neighbors=[context-loader.js]
- "plugins_context_loader_root": "ROOT" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L21 | neighbors=[context-loader.js]
- "plugins_context_loader_savepluginstate": "savePluginState()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L76 | neighbors=[context-loader.js]
- "plugins_context_loader_scope_creep_msg": "SCOPE_CREEP_MSG()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L98 | neighbors=[context-loader.js]
- "plugins_context_loader_sessionsummary": "sessionSummary()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L184 | neighbors=[context-loader.js]
- "plugins_context_loader_shouldshowgraphifyresult": "shouldShowGraphifyResult()" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L252 | neighbors=[context-loader.js]
- "plugins_context_loader_state_file": "STATE_FILE" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L64 | neighbors=[context-loader.js]
- "plugins_context_loader_subagent_msg": "SUBAGENT_MSG" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L91 | neighbors=[context-loader.js]
- "plugins_context_loader_verify_msg": "VERIFY_MSG" | kind=code-symbol | source=.opencode/plugins/context-loader.js:L87 | neighbors=[context-loader.js]
- "scripts_export_schema_dirname": "__dirname" | kind=code-symbol | source=scripts/export-schema.mjs:L8 | neighbors=[export-schema.mjs]
- "scripts_export_schema_root": "ROOT" | kind=code-symbol | source=scripts/export-schema.mjs:L9 | neighbors=[export-schema.mjs]
- "scripts_export_schema_typetoreadable": "typeToReadable()" | kind=code-symbol | source=scripts/export-schema.mjs:L69 | neighbors=[export-schema.mjs]
- "scripts_extract_domain_context_map": "CONTEXT_MAP" | kind=code-symbol | source=scripts/extract-domain.mjs:L10 | neighbors=[extract-domain.mjs]
- "scripts_extract_domain_dirname": "__dirname" | kind=code-symbol | source=scripts/extract-domain.mjs:L8 | neighbors=[extract-domain.mjs]
- "scripts_extract_domain_root": "ROOT" | kind=code-symbol | source=scripts/extract-domain.mjs:L9 | neighbors=[extract-domain.mjs]
- "scripts_load_context_context_map": "CONTEXT_MAP" | kind=code-symbol | source=scripts/load-context.mjs:L11 | neighbors=[load-context.mjs]
- "scripts_load_context_dirname": "__dirname" | kind=code-symbol | source=scripts/load-context.mjs:L9 | neighbors=[load-context.mjs]
- "scripts_load_context_graph_json": "GRAPH_JSON" | kind=code-symbol | source=scripts/load-context.mjs:L12 | neighbors=[load-context.mjs]
- "scripts_load_context_root": "ROOT" | kind=code-symbol | source=scripts/load-context.mjs:L10 | neighbors=[load-context.mjs]
- "scripts_populate_vault_cwd": "CWD" | kind=code-symbol | source=scripts/populate-vault.mjs:L12 | neighbors=[populate-vault.mjs]
- "scripts_populate_vault_dirname": "__dirname" | kind=code-symbol | source=scripts/populate-vault.mjs:L11 | neighbors=[populate-vault.mjs]
- "scripts_populate_vault_main": "main()" | kind=code-symbol | source=scripts/populate-vault.mjs:L316 | neighbors=[populate-vault.mjs]
- "scripts_populate_vault_populateapiroutes": "populateAPIRoutes()" | kind=code-symbol | source=scripts/populate-vault.mjs:L142 | neighbors=[populate-vault.mjs]
- "scripts_populate_vault_populatecomandos": "populateComandos()" | kind=code-symbol | source=scripts/populate-vault.mjs:L18 | neighbors=[populate-vault.mjs]
- "scripts_populate_vault_populateenvvars": "populateEnvVars()" | kind=code-symbol | source=scripts/populate-vault.mjs:L65 | neighbors=[populate-vault.mjs]
- "scripts_populate_vault_populateestructura": "populateEstructura()" | kind=code-symbol | source=scripts/populate-vault.mjs:L104 | neighbors=[populate-vault.mjs]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: /Users/cesarbr/Documents/dev/personal/portafolio-web/portafolio-web/.graphify/description-instructions/batch-002.json

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
