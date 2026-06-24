import { defineStore } from 'pinia'
import { getUserRole } from '@/services/UserService'
import {
	getEngineInfo,
	saveEngineParameter,
	getLLMConfig,
	saveLLMConfig,
	getLLMUsage,
	getLLMBudget
} from '@/services/AlecService'
import CONST from '@/helpers/constants'

import {
	TEngine,
	TLLMConfigRequest,
	TLLMConfigStatus,
	TLLMUsage,
	TLLMBudget
} from '@/types/TUser'

type TState = {
	isAdmin: boolean
	userId: string | null
	engineInfo: TEngine | null
	llmConfig: TLLMConfigStatus | null
	llmUsage: TLLMUsage | null
	llmBudget: TLLMBudget | null
}

const engineDefaultValues = {
	alpha: 145,
	beta: 0.55,
	epsilon: 150,
	hellingerW: 4851.28,
	hellingerBias: -1986.00
}

export const useUserStore = defineStore('userStore', {
	state: (): TState => ({
		isAdmin: false,
		userId: null,
		engineInfo: null,
		llmConfig: null,
		llmUsage: null,
		llmBudget: null
	}),
	actions: {
		async getUserRole() {
			const result = await getUserRole()
			if (result) {
				this.isAdmin = result.roles.includes('ROLE_ADMIN')
				this.userId = result.id
			}
			return result
		},
		async getEngineInfo() {
			const result = await getEngineInfo()
			if (result) {
				this.engineInfo = result
			}
		},
		async setEngineInfo(
			engine: string,
			isHellinger: boolean,
			overrides?: Partial<
				Pick<
					TEngine,
					| 'alpha'
					| 'beta'
					| 'epsilon'
					| 'hellingerW'
					| 'hellingerBias'
					| 'clusterFrequencyMs'
					| 'clusterPrompt'
				>
			>
		) {
			const engineData: TEngine = {
				...engineDefaultValues,
				...overrides,
				distanceMeasureName: isHellinger
					? CONST.HELLINGER_OPTION
					: CONST.SPACE_DISTANCE_OPTION,
				engineName: engine
			}
			if (!isHellinger) {
				engineData.hellingerW = null
				engineData.hellingerBias = null
			}
			const result = await saveEngineParameter(engineData)
			if (result) {
				this.engineInfo = engineData
				return true
			}
			return false
		},
		async getLLMConfig() {
			const result = await getLLMConfig()
			if (result) {
				this.llmConfig = result
			}
			return result
		},
		async setLLMConfig(config: TLLMConfigRequest) {
			const result = await saveLLMConfig(config)
			if (result) {
				this.llmConfig = result
				return true
			}
			return false
		},
		async getLLMUsage(days: number = 30) {
			const result = await getLLMUsage(days)
			if (result) {
				this.llmUsage = result
			}
			return result
		},
		async getLLMBudget() {
			const result = await getLLMBudget()
			if (result) {
				this.llmBudget = result
			}
			return result
		}
	}
})
