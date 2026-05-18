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

// Server-returned shape of the Claude integration config (GET /alec/claude/configuration).
// The API key itself is never returned — only whether one is currently stored.
export type TClaudeConfigStatus = {
	enabled: boolean
	apiKeyPresent: boolean
}

// Wire shape for POST /alec/claude/configuration.
// Send apiKey only when the user actually typed a new one; omitting it lets
// the server keep the existing stored key while still flipping `enabled`.
// Set clearApiKey: true to wipe the stored key (also forces enabled=false server-side).
export type TClaudeConfigRequest = {
	enabled: boolean
	apiKey?: string
	clearApiKey?: boolean
}

// GET /alec/claude/suggestions/{situationId}.
// status one of "pending" | "ready" | "failed". Server returns 204 when no
// record exists yet — the service layer maps that to null below.
export type TClaudeSuggestion = {
	situationId: string
	status: 'pending' | 'ready' | 'failed'
	rootCauses: string[]
	resolutions: string[]
	requestedAt: number
	completedAt: number | null
	error: string | null
	model: string
}

// GET /alec/claude/usage?days=N — aggregated rollup for the config-page meter.
export type TClaudeUsage = {
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
