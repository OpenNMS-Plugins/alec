export interface IWhoAmIResponse {
	fullName: string
	id: string
	internal: boolean
	roles: string[]
}

export type TEngine = {
	engineName: string
	distanceMeasureName: string
	alpha: number
	beta: number
	epsilon: number
	hellingerW?: number | null
	hellingerBias?: number | null
}

// Server-returned shape of the LLM integration config (GET /alec/llm/configuration).
// The API key itself is never returned — only whether one is currently stored.
// autoEvaluate gates the auto-fire-on-new-situation behavior; the Re-evaluate
// button works regardless.
export type TLLMConfigStatus = {
	enabled: boolean
	autoEvaluate: boolean
	// OpenAI-compatible API base URL and model id. The server returns its
	// defaults (OpenRouter + a Claude model) when nothing is stored yet.
	baseUrl: string
	model: string
	apiKeyPresent: boolean
}

// Wire shape for POST /alec/llm/configuration.
// Send apiKey only when the user actually typed a new one; omitting it lets
// the server keep the existing stored key while still flipping `enabled`.
// Set clearApiKey: true to wipe the stored key (also forces enabled=false server-side).
// baseUrl/model are sent on every save; blank values fall back to server defaults.
export type TLLMConfigRequest = {
	enabled: boolean
	autoEvaluate: boolean
	baseUrl?: string
	model?: string
	apiKey?: string
	clearApiKey?: boolean
}

// POST /alec/llm/validate — probe the endpoint/model/key. Blank fields fall
// back to the stored config server-side, so an already-saved key validates
// without re-sending it. `ok=false` carries a human-readable reason in message.
export type TLLMValidationResult = {
	ok: boolean
	message: string
}

// GET /alec/llm/suggestions/{situationId}.
// status one of "pending" | "ready" | "failed". Server returns 204 when no
// record exists yet — the service layer maps that to null below.
export type TLLMSuggestion = {
	situationId: string
	status: 'pending' | 'ready' | 'failed'
	rootCauses: string[]
	resolutions: string[]
	requestedAt: number
	completedAt: number | null
	error: string | null
	model: string
}

// GET /alec/llm/usage?days=N — aggregated rollup for the config-page meter.
export type TLLMUsage = {
	daysWindow: number
	totalTokens: number
	inputTokens: number
	outputTokens: number
	cacheReadInputTokens: number
	cacheCreationInputTokens: number
	calls: number
	successfulCalls: number
	failedCalls: number
	cacheHitRatio: number
	estimatedCostUsd: number
	pricingNote: string
}
