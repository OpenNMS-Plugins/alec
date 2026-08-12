<script setup lang="ts">
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import type { Ref } from 'vue'
import { ref, watch, markRaw } from 'vue'
import { remove, includes } from 'lodash'
import ExitToApp from '@/components/icons/action/ExitToApp.vue'
import {
	OnmsButton,
	OnmsCheckbox,
	OnmsIcon,
	OnmsSpinner,
	useOnmsToast
} from '@opennms/onms-ui'
import DrawerSituations from '@/components/DrawerSituations.vue'
import { assignAlarmsToSituation } from '@/services/AlecService'
import ArrowBack from '@/components/icons/navigation/ArrowBack.vue'
import NewSituationBtn from '@/elements/NewSituationBtn.vue'
import { TAlarm } from '@/types/TSituation'
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'
import CommonFilters from '@/components/CommonFilters.vue'
import NoResults from '@/elements/NoResults.vue'

const Icons = markRaw({
	ArrowBack,
	ExitToApp
})
const router = useRouter()
const toast = useOnmsToast()
const situationStore = useSituationsStore()
situationStore.getUnassignedAlarms()
situationStore.getSituations()
if (!situationStore.nodes.length) {
	situationStore.getNodes()
}

const alarms = ref([]) as Ref<TAlarm[]>
const alarmIds = ref([]) as Ref<number[]>
const selectAll = ref(false)
const showSituations = ref(false)
const loading = ref(true)

watch(
	() => situationStore.unassignedAlarms,
	() => {
		alarms.value = situationStore.unassignedAlarms
		loading.value = false
	}
)

const addAlarm = (alarmId: number) => {
	if (!includes(alarmIds.value, alarmId)) {
		alarmIds.value.push(alarmId)
	} else {
		remove(alarmIds.value, (a) => a === alarmId)
	}
}

const handleSelect = () => {
	if (selectAll.value) {
		alarmIds.value = alarms.value.map((a: TAlarm) => a.id)
	} else {
		alarmIds.value = []
	}
}

const handleMoveToSituation = async (situationId: number) => {
	const resultMove = await assignAlarmsToSituation(situationId, alarmIds.value)
	if (resultMove) {
		situationStore.getUnassignedAlarms()
	} else {
		toast.showToast({
			message: 'Error on moving the alarms :(',
			severity: 'error',
			timeout: 6000
		})
	}
	showSituations.value = false
}

const showSituationList = () => {
	router.push({
		name: ROUTE.situations
	})
}

const handleMoveClick = () => {
	if (alarmIds.value.length) {
		showSituations.value = true
	} else {
		toast.showToast({
			message: 'You need to choose at least one alarm!',
			severity: 'warn',
			timeout: 6000
		})
	}
}
const filterList = (alarmsFiltered: TAlarm[]) => {
	alarms.value = alarmsFiltered
}
</script>

<template>
	<div class="container">
		<div class="nav-btns">
			<OnmsButton @click="() => showSituationList()">
				<OnmsIcon :icon="Icons.ArrowBack" aria-hidden="true" class="icon" />
				<span>Situation List</span>
			</OnmsButton>
			<NewSituationBtn />
		</div>
		<h2>List Unassociated Alarms</h2>
		<div class="content">
			<div class="filters">
				<CommonFilters
					:list="situationStore.unassignedAlarms"
					@filtered-list="filterList"
					isOpen
				/>
			</div>

			<div class="list">
				<div class="action-btns">
					<OnmsCheckbox
						v-model="selectAll"
						inputId="select-all-unassigned-alarms"
						aria-label="selected"
						@update:modelValue="handleSelect"
					/>
					<OnmsButton variant="text" @click="handleMoveClick">
						<OnmsIcon :icon="Icons.ExitToApp" class="icon move" />
						<span>Move</span>
					</OnmsButton>
				</div>
				<div class="spinner" v-if="loading"><OnmsSpinner /></div>
				<div v-else>
					<div v-if="alarms.length" class="alarms">
						<div v-for="alarm in alarms" :key="alarm.id" class="card">
							<UnassignedAlarmCard
								:selected="includes(alarmIds, alarm.id)"
								:alarm="alarm"
								@selected-alarm="addAlarm"
							/>
						</div>
					</div>
					<NoResults v-else />
				</div>
			</div>
		</div>
		<DrawerSituations
			:situationId="0"
			:visible="showSituations"
			@situation-selected="handleMoveToSituation"
			@drawer-closed="() => (showSituations = false)"
		/>
	</div>
</template>

<style lang="scss" scoped>
.content {
	display: flex;
	margin-top: var(--onms-spacing-m);
}

.filters {
	width: 330px;
	min-width: 20%;
	margin-right: 20px;
}

.list {
	width: 100%;
}
.nav-btns {
	display: flex;
	justify-content: space-between;
	margin-bottom: var(--onms-spacing-m);
}
.action-btns {
	background-color: var(--onms-surface);
	padding: 12px 15px;
	border: 1px solid var(--onms-border-on-surface);
	display: flex;
	align-items: center;
	> * {
		margin-right: 10px;
	}
}

.alarms {
	height: 800px;
	overflow-y: auto;
	display: flex;
	flex-wrap: nowrap;
	width: 100%;
	flex-wrap: wrap;
	align-content: flex-start;
	margin-top: var(--onms-spacing-m);
	> div {
		margin-right: 1%;
	}
	> div:nth-child(3n) {
		margin-right: 0;
	}
}

.card {
	display: flex;
	width: 32.5%;
}

.icon {
	font-size: 18px;
	margin-right: 4px;
	vertical-align: sub;

	&.move {
		color: var(--onms-primary);
		font-size: 20px;
	}
}

.filters {
	min-width: 20%;
	background-color: var(--onms-surface);
	margin-right: 15px;
	border: 1px solid var(--onms-border-on-surface);
}

.spinner {
	display: flex;
	justify-content: center;
	margin: 100px auto;
}
</style>
