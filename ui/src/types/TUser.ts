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
