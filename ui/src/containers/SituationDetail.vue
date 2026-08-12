<script setup lang="ts">
import {
	OnmsButton,
	OnmsIcon,
	OnmsSpinner,
	OnmsTab,
	OnmsTabList,
	OnmsTabPanel,
	OnmsTabPanels,
	OnmsTabs,
	useOnmsToast
} from '@opennms/onms-ui'
import SituationDetailTab from '@/components/SituationDetailTab.vue'
import SituationMetricsTab from '@/components/SituationMetricsTab.vue'
import AISuggestionsTab from '@/components/AISuggestionsTab.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import { ref, watch, onMounted } from 'vue'
import { TSituation } from '@/types/TSituation'
import ArrowBack from '@/components/icons/navigation/ArrowBack.vue'
import { useAppStore } from '@/store/useAppStore'
import { useRoute } from 'vue-router'
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'

const router = useRouter()
const route = useRoute()
const paramId = parseInt(route.params.id as string)
const situationId = ref(paramId)
const situationStore = useSituationsStore()
const appStore = useAppStore()
const toast = useOnmsToast()
const tabNumber = ref<string | number>(0)

situationStore.getSituation(situationId.value)
situationStore.getUnassignedAlarms()

if (!situationStore.situations.length) {
	situationStore.getSituations()
	situationStore.getNodes()
}

const situation = ref()
const container = ref()
const loading = ref(true)

const filteredSituationsCurrentIndex = ref(
	situationStore.filteredSituations.findIndex((id) => id === situationId.value)
)

watch(
	() => situationStore.situationDetail,
	() => {
		situation.value = situationStore.situationDetail as TSituation
		loading.value = false
		situationStore.getUnassignedAlarms()
	}
)

onMounted(() => {
	const widthCont =
		document.getElementById('cont')?.getBoundingClientRect().width || 1200
	container.value = widthCont - 90
})

const showSituationList = () => {
	router.push({
		name: ROUTE.situations
	})
}
const showNextSituation = (step: number) => {
	const index = filteredSituationsCurrentIndex.value
	const id = situationStore.filteredSituations[index + step]
	router.push({
		name: ROUTE.situationDetail,
		params: {
			id
		}
	})
}

watch(route, () => {
	situationId.value = parseInt(route.params.id as string)
	situationStore.getSituation(situationId.value)
	filteredSituationsCurrentIndex.value =
		situationStore.filteredSituations.findIndex((id) => id == situationId.value)
})
appStore.$subscribe((mutation, storeState) => {
	if (storeState.showError && storeState.errorMessage) {
		toast.showToast({
			message: storeState.errorMessage,
			severity: 'error',
			timeout: 9000
		})
	}
})
</script>

<template>
	<div id="cont">
		<div class="btns-navigation">
			<OnmsButton @click="() => showSituationList()">
				<OnmsIcon :icon="ArrowBack" class="icon" />
				<span>Situation List</span>
			</OnmsButton>
			<div class="btns-prev-next">
				<OnmsButton
					:disabled="
						!situationStore.filteredSituations[
							filteredSituationsCurrentIndex - 1
						]
					"
					@click="() => showNextSituation(-1)"
				>
					<OnmsIcon :icon="ArrowBack" class="icon" />
					<span>Show Previous Situation </span>
				</OnmsButton>
				<OnmsButton
					:disabled="
						!situationStore.filteredSituations[
							filteredSituationsCurrentIndex + 1
						]
					"
					@click="() => showNextSituation(1)"
				>
					<span>Show Next Situation</span>
					<OnmsIcon :icon="ArrowBack" class="icon next" />
				</OnmsButton>
			</div>
		</div>
		<div class="spinner" v-if="loading"><OnmsSpinner /></div>
		<div v-else>
			<div v-if="situation" class="detail">
				<OnmsTabs v-model:value="tabNumber">
					<OnmsTabList>
						<OnmsTab :value="0">Details</OnmsTab>
						<OnmsTab :value="1">Metrics</OnmsTab>
						<OnmsTab :value="2" data-test="ai-suggestions-tab"
							>AI Suggestions</OnmsTab
						>
					</OnmsTabList>
					<OnmsTabPanels>
						<OnmsTabPanel :value="0" class="panel">
							<SituationDetailTab :situation-info="situation" />
						</OnmsTabPanel>
						<OnmsTabPanel :value="1" class="panel">
							<SituationMetricsTab
								v-if="container && tabNumber == 1"
								:situation="situation"
								:width="container"
							/>
						</OnmsTabPanel>
						<OnmsTabPanel :value="2" class="panel">
							<!-- Mount only when active so the polling loop in
							     AISuggestionsTab doesn't run for users who never open it.
							     :key forces a remount when the user navigates to another
							     situation in place (next/prev) — without it the component
							     keeps showing the previous situation's suggestions. -->
							<AISuggestionsTab
								v-if="tabNumber == 2"
								:key="situation.id"
								:situation-id="situation.id"
							/>
						</OnmsTabPanel>
					</OnmsTabPanels>
				</OnmsTabs>
			</div>
			<div v-else class="noSituation">
				Error. The situation {{ paramId }} does not exist.
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.btns-navigation {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.btns-prev-next {
	display: flex;
	gap: 8px;
}
.spinner {
	display: flex;
	justify-content: center;
	margin: 100px auto;
}
.detail {
	width: 100%;
	margin-top: 30px;
}
.icon {
	font-size: 20px;
	vertical-align: text-top;
	margin-right: 8px;
}

.next {
	margin-right: 0;
	margin-left: 8px;
	transform: rotateZ(180deg);
}

.noSituation {
	padding: 30px;
	border: 1px solid var(--onms-border-on-surface);
	background-color: var(--onms-surface);
	width: 600px;
	text-align: center;
	margin: 80px auto;
	font-size: 17px;
}
</style>
