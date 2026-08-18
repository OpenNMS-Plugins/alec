<script setup lang="ts">
import { useSituationsStore } from '@/store/useSituationsStore'
import SituationCard from '@/components/SituationCard.vue'
import SimplePagination from '@/components/SimplePagination.vue'
import CommonFilters from '@/components/CommonFilters.vue'

import { OnmsButton, OnmsIcon, OnmsSpinner } from '@opennms/onms-ui'
import View from '@/components/icons/action/View.vue'
import { reactive, ref, watch } from 'vue'
import { chunk } from 'lodash'
import { TSituation } from '@/types/TSituation'
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'

import NewSituationBtn from '@/elements/NewSituationBtn.vue'
import ConfigurationInfo from '@/components/ConfigurationInfo.vue'
import { useUserStore } from '@/store/useUserStore'
import NoResults from '@/elements/NoResults.vue'

const router = useRouter()
const situationStore = useSituationsStore()
const userStore = useUserStore()

situationStore.getSituations()
situationStore.getNodes()
situationStore.getUnassignedAlarms()
userStore.getEngineInfo()

const PAGE_SIZE = 9

type TState = {
	situations: TSituation[]
	selectedSituationIndex: number
	situationSelected: number | null
	nodes: Record<string, string | number>[]
	results: Record<string, string | number>[]
	nodeSelectedValue: Record<string, string> | undefined
	allSituations: Array<TSituation>[]
}
const state: TState = reactive({
	situations: [],
	selectedSituationIndex: 0,
	situationSelected: null,
	nodes: [],
	results: [],
	nodeSelectedValue: undefined,
	allSituations: []
})
const loading = ref(true)
const currentPage = ref(0)
const totalPages = ref(1)
const totalSituations = ref(0)

const setNodes = () => {
	state.nodes = situationStore.nodes
	state.results = situationStore.nodes
}
watch(
	() => situationStore.situations,
	() => {
		loading.value = false
		setNodes()
		initPaging(situationStore.situations)
	}
)

const onGotoPage = (nextPage: number) => {
	currentPage.value = nextPage
	state.situations = state.allSituations[currentPage.value]
}

const showDetail = (id: number) => {
	router.push({
		name: ROUTE.situationDetail,
		params: {
			id
		}
	})
}

const viewUnassignedAlarms = () => {
	router.push({
		name: ROUTE.viewUnassignedAlarms
	})
}

const initPaging = (list: TSituation[]) => {
	totalSituations.value = list.length
	state.allSituations = chunk(list, PAGE_SIZE)
	const ids = list.map((s) => s.id)
	situationStore.filteredSituations = ids
	currentPage.value = 0
	state.situations = state.allSituations[0]
	totalPages.value = state.allSituations.length
}

const filterList = (list: TSituation[]) => {
	if (list.length) {
		initPaging(list)
	} else {
		state.situations = []
	}
}
</script>

<template>
	<div class="list-main">
		<div class="header">
			<h2>Situation List</h2>
			<div class="link-btns">
				<OnmsButton
					class="view-situation-btn"
					variant="outlined"
					@click="() => viewUnassignedAlarms()"
				>
					<OnmsIcon :icon="View" class="icon" />
					<span>View Unassociated Alarms</span>
				</OnmsButton>
				<NewSituationBtn />
				<ConfigurationInfo />
			</div>
		</div>
		<div class="content">
			<div class="left-filters">
				<CommonFilters
					:list="situationStore.situations"
					@filtered-list="filterList"
					isOpen
					isSituation
					saveFilters
				/>
			</div>

			<div class="container">
				<div class="autocomplete">
					<div v-if="state.situations && state.situations.length">
						Result: {{ state.situations?.length }} of
						{{ totalSituations }}
					</div>
				</div>
				<OnmsSpinner class="spinner" v-if="loading" />
				<div v-else>
					<div v-if="state.situations && state.situations.length">
						<div class="situation-list">
							<div
								class="card"
								v-for="situationInfo in state.situations"
								:key="situationInfo.id"
							>
								<SituationCard
									@click="() => showDetail(situationInfo.id)"
									:situation-info="situationInfo"
								/>
							</div>
						</div>
						<div class="footer-pager" v-if="totalSituations > PAGE_SIZE">
							<div>Page: {{ currentPage + 1 }} of {{ totalPages }}</div>
							<SimplePagination
								@go-to-page="onGotoPage"
								:currentPage="currentPage"
								:totalPages="totalPages"
							/>
						</div>
					</div>
					<NoResults v-else />
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
}

.link-btns {
	display: flex;
	align-items: center;
}

.view-situation-btn {
	margin-right: 8px;
}

.content {
	display: flex;
	margin-top: 20px;
}

.list-main {
	min-height: 800px;
}

.icon {
	font-size: 17px;
	margin-right: 5px;
}

h2 {
	margin-top: 0;
	margin-bottom: 15px !important;
}

.autocomplete {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
}

.left-filters {
	width: 25%;
	background-color: var(--onms-surface);
	margin-right: 15px;
	border: 1px solid var(--onms-border-on-surface);
}
.container {
	display: flex;
	padding-top: 20px;
	flex-direction: column;
	border: 1px solid var(--onms-border-on-surface);
	background-color: var(--onms-surface);
	width: 100%;
	min-height: 750px;
}

.situation-list {
	display: flex;
	margin: 0px auto;
	flex-wrap: wrap;
	width: 100%;
	padding-bottom: 15px;

	> div {
		width: 32%;
		margin-top: 20px;
		margin-left: 1%;
	}
}

.footer-pager {
	display: flex;
	justify-content: center;
	margin-top: auto;
	margin-bottom: 30px;
	> :first-child {
		margin-right: 15px;
	}
}

.spinner {
	margin: 100px auto;
}
</style>
