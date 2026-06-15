// ===========================================================================
// LLM provider / model suggestions for the Root Cause Analysis config page.
// ===========================================================================
//
// These are *suggestions* only. The Endpoint and Model fields remain free-text
// (essential for locally hosted models), and ALEC ships with NO default
// selected — the operator picks a provider + model here.
//
// ---------------------------------------------------------------------------
// HOW TO UPDATE (do this each release — model line-ups and prices change often)
// ---------------------------------------------------------------------------
//  1. Edit `LLM_PROVIDERS` below. List each provider's models in the ORDER you
//     want them suggested. We deliberately do NOT show price/capability labels
//     in the dropdown (to avoid biasing the operator's choice) — the only signal
//     is list order. By convention we order most-capable first, but that is just
//     an editorial ordering, not a displayed recommendation. The optional `tier`
//     field documents that intent for maintainers; it is not rendered.
//  2. Use each provider's NATIVE model-id spelling:
//        - Anthropic direct  -> `claude-sonnet-4-6`        (dashes, no prefix)
//        - OpenAI direct      -> `gpt-4o`
//        - OpenRouter         -> `anthropic/claude-sonnet-4.6` (vendor/dotted)
//     The wrong spelling for an endpoint is rejected by that provider.
//  3. `matches` is a list of lowercase substrings tested against the entered
//     Endpoint URL's text to decide which provider's models to suggest. Keep
//     them specific (host names, or a distinctive port for local servers).
//  4. Local runtimes (LM Studio, Ollama) intentionally have NO model list —
//     the available models are whatever the operator has loaded, so we only
//     prompt them to type/copy the id from their server.
//  5. Bump `LLM_SUGGESTIONS_REVIEWED` so the UI can show when this was last
//     curated.
//
// Keep the model ids in sync with anything referenced in the docs
// (docs/modules/reference/pages/llm-root-cause-analysis.adoc).
// ===========================================================================

export const LLM_SUGGESTIONS_REVIEWED = '2026-06'

// Editorial ordering hint for maintainers only — NOT displayed (see header).
export type ModelTier = 'advanced' | 'balanced' | 'economy'

export interface ModelSuggestion {
	id: string
	tier: ModelTier
}

export interface ProviderSuggestion {
	name: string
	baseUrl: string
	// Lowercase substrings matched against the entered Endpoint URL to pick the
	// model list to suggest.
	matches: string[]
	// Short hint about the key this provider expects (shown in the menu).
	keyHint: string
	// Local runtimes bill nothing and have operator-specific model lists.
	local?: boolean
	models: ModelSuggestion[]
}

export const LLM_PROVIDERS: ProviderSuggestion[] = [
	{
		name: 'Anthropic (Claude)',
		baseUrl: 'https://api.anthropic.com/v1/',
		matches: ['api.anthropic.com'],
		keyHint: 'sk-ant-… key',
		models: [
			{ id: 'claude-opus-4-8', tier: 'advanced' },
			{ id: 'claude-sonnet-4-6', tier: 'balanced' },
			{ id: 'claude-haiku-4-5', tier: 'economy' }
		]
	},
	{
		name: 'OpenAI',
		baseUrl: 'https://api.openai.com/v1',
		matches: ['api.openai.com'],
		keyHint: 'sk-… key',
		models: [
			{ id: 'gpt-4o', tier: 'advanced' },
			{ id: 'o4-mini', tier: 'balanced' },
			{ id: 'gpt-4o-mini', tier: 'economy' }
		]
	},
	{
		name: 'OpenRouter',
		baseUrl: 'https://openrouter.ai/api/v1',
		matches: ['openrouter.ai'],
		keyHint: 'sk-or-… key',
		models: [
			{ id: 'anthropic/claude-opus-4.1', tier: 'advanced' },
			{ id: 'openai/gpt-4o', tier: 'advanced' },
			{ id: 'anthropic/claude-sonnet-4.6', tier: 'balanced' },
			{ id: 'google/gemini-2.5-flash', tier: 'economy' },
			{ id: 'meta-llama/llama-3.3-70b-instruct', tier: 'economy' }
		]
	},
	{
		name: 'LM Studio',
		baseUrl: 'http://127.0.0.1:1234/v1',
		matches: ['127.0.0.1:1234', 'localhost:1234'],
		keyHint: 'any non-empty value (ignored by the server)',
		local: true,
		models: []
	},
	{
		name: 'Ollama',
		baseUrl: 'http://127.0.0.1:11434/v1',
		matches: [':11434'],
		keyHint: 'any non-empty value (ignored by the server)',
		local: true,
		models: []
	}
]

/** The provider whose `matches` the entered endpoint URL contains, if any. */
export const providerForUrl = (
	url: string | undefined
): ProviderSuggestion | undefined => {
	const u = (url || '').toLowerCase()
	if (!u) return undefined
	return LLM_PROVIDERS.find((p) => p.matches.some((m) => u.includes(m)))
}

/** Endpoint suggestions: every known provider. */
export const endpointSuggestions = (): ProviderSuggestion[] => LLM_PROVIDERS

/**
 * Model suggestions appropriate to the entered endpoint. Empty for an unknown
 * or local endpoint (the caller shows a "type your own" hint in that case).
 */
export const modelSuggestionsForUrl = (
	url: string | undefined
): ModelSuggestion[] => providerForUrl(url)?.models ?? []
