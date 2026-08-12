<script setup lang="ts">
import { TAlarm } from '@/types/TSituation'
import { ref, watch, reactive } from 'vue'
import { remove } from 'lodash'
import AlarmDetail from '@/components/AlarmDetail.vue'
import { OnmsButton, OnmsCheckbox, OnmsIcon } from '@opennms/onms-ui'
import MarkComplete from '@/components/icons/action/MarkComplete.vue'
import { useSituationsStore } from '@/store/useSituationsStore'
import { sendActionMultiplyAlarms } from '@/services/AlarmService'
import {
	removeAlarmsFromSituation,
	assignAlarmsToSituation
} from '@/services/AlecService'

import CheckCircle from '@/components/icons/action/CheckCircle.vue'
import ExitToApp from '@/components/icons/action/ExitToApp.vue'
import DrawerSituations from '@/components/DrawerSituations.vue'
import DrawerAlarms from '@/components/DrawerAlarms.vue'

import { useAppStore } from '@/store/useAppStore'
import Delete from '@/components/icons/action/Delete.vue'
import Add from '@/components/icons/action/Add.vue'
import { markRaw } from 'vue'
import CommonFilters from '@/components/CommonFilters.vue'
import NoResults from '@/elements/NoResults.vue'

const Icons = markRaw({
	Add,
	Delete,
	MarkComplete,
	CheckCircle,
	ExitToApp
})
const appStore = useAppStore()

const situationStore = useSituationsStore()

type TState = {
	selectedAlarms: number[]
	alarms: TAlarm[]
}
const props = defineProps<{
	alarms: TAlarm[]
	situationId: number
}>()
const selectAll = ref(false)

const selectedFilters = ref(['all'])
const showSituations = ref(false)
const showUnassignedAlarms = ref(false)
const state: TState = reactive({
	selectedAlarms: [],
	alarms: props.alarms
})

watch(props, () => {
	selectedFilters.value = ['all']
	state.alarms = props.alarms
	state.selectedAlarms = []
	selectAll.value = false
})

const alarmSelected = (id: number) => {
	if (state.selectedAlarms.includes(id)) {
		remove(state.selectedAlarms, (a) => a == id)
	} else {
		state.selectedAlarms.push(id)
	}
}

const handleActionMultiplyAlarms = async (action: string) => {
	if (state.selectedAlarms.length) {
		await sendActionMultiplyAlarms(state.selectedAlarms, action)
		situationStore.getSituation(props.situationId)
		state.selectedAlarms = []
		selectAll.value = false
	} else {
		appStore.showErrorMsg('You need to choose at least one alarm!')
	}
}

const validateCountSelectedAlarms = () => {
	if (state.selectedAlarms.length === props.alarms.length) {
		appStore.showErrorMsg('You cannnot remove all alarms from the situation')
		return false
	}
	if (!state.selectedAlarms.length) {
		appStore.showErrorMsg('You need to choose at least one alarm!')
		return false
	}
	return true
}

const handleRemoveAlarm = async () => {
	if (validateCountSelectedAlarms()) {
		const result = await removeAlarmsFromSituation(
			props.situationId,
			state.selectedAlarms
		)
		if (result) {
			situationStore.getSituation(props.situationId)
		} else {
			appStore.showErrorMsg('Error on removing alarms :(')
		}
	}
}

const handleMoveToSituation = async (situationId: number) => {
	if (validateCountSelectedAlarms()) {
		const resultRemove = await removeAlarmsFromSituation(
			props.situationId,
			state.selectedAlarms
		)
		if (resultRemove) {
			await moveAlarms(situationId, state.selectedAlarms)
		} else {
			appStore.showErrorMsg('Error on moving the alarms :(')
		}
	}
	showSituations.value = false
}

const moveAlarms = async (situationId: number, alarmIds: number[]) => {
	if (alarmIds.length) {
		const resultMove = await assignAlarmsToSituation(situationId, alarmIds)
		if (resultMove) {
			situationStore.getSituation(situationId)
		} else {
			appStore.showErrorMsg('Error on moving the alarms :(')
		}
	} else {
		appStore.showErrorMsg('You need to select the alarms')
	}
}

const handleAddAlarmsToSituation = async (alarmIds: number[]) => {
	await moveAlarms(props.situationId, alarmIds)
	showUnassignedAlarms.value = false
}

const handleMoveClick = () => {
	if (state.selectedAlarms.length) {
		showSituations.value = true
	} else {
		appStore.showErrorMsg('You need to choose at least one alarm!')
	}
}

const filterList = (alarmsFiltered: TAlarm[]) => {
	state.alarms = alarmsFiltered
}
</script>

<template>
	<div class="container">
		<div class="header">
			<div class="title">Alarms</div>
			<OnmsButton
				class="add-alarms-btn"
				@click="showUnassignedAlarms = true"
			>
				<OnmsIcon :icon="Icons.Add" class="icon add" />
				<span>Add Alarms</span>
			</OnmsButton>
		</div>

		<div class="alarms-container">
			<div class="filters">
				<CommonFilters
					:list="props.alarms"
					@filtered-list="filterList"
					isOpen
				/>
			</div>
			<div class="list">
				<div class="row actions">
					<OnmsCheckbox
						v-model="selectAll"
						inputId="select-all-alarms"
						aria-label="selected"
					/>
					<OnmsButton
						variant="text"
						@click="() => handleActionMultiplyAlarms('clear')"
					>
						<OnmsIcon :icon="Icons.MarkComplete" class="icon clear" />
						<span>Clear</span>
					</OnmsButton>
					<OnmsButton
						variant="text"
						@click="() => handleActionMultiplyAlarms('ack')"
					>
						<OnmsIcon :icon="Icons.CheckCircle" class="icon ack" />
						<span>Acknowledge</span>
					</OnmsButton>
					<OnmsButton variant="text" @click="handleMoveClick">
						<OnmsIcon :icon="Icons.ExitToApp" class="icon move" />
						<span>Move</span>
					</OnmsButton>
					<OnmsButton variant="text" @click="handleRemoveAlarm">
						<OnmsIcon :icon="Icons.Delete" class="icon remove" />
						<span>Remove</span>
					</OnmsButton>
				</div>

				<div class="section">
					<div class="alarm-list" v-if="state.alarms.length > 0">
						<div v-for="alarmInfo in state.alarms" :key="alarmInfo.id">
							<AlarmDetail
								:alarm="alarmInfo"
								:selectAll="selectAll"
								:situation-id="props.situationId"
								@alarm-selected="alarmSelected"
							/>
						</div>
					</div>
					<NoResults v-else />
				</div>
			</div>
		</div>
	</div>

	<DrawerSituations
		:situationId="props.situationId"
		:visible="showSituations"
		@situation-selected="handleMoveToSituation"
		@drawer-closed="() => (showSituations = false)"
	/>
	<DrawerAlarms
		:visible="showUnassignedAlarms"
		@alarms-selected="handleAddAlarmsToSituation"
		@drawer-alarms-closed="() => (showUnassignedAlarms = false)"
	/>
</template>

<style scoped lang="scss">
.container {
	border: 1px solid var(--onms-border-on-surface);
	padding: 15px;
	background-color: var(--onms-surface);
}
.header {
	display: flex;
}
.row {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.list {
	width: 100%;
}
.actions {
	margin-top: 20px;
	padding-left: 15px;
	gap: 10px;
}

.alarms-container {
	display: flex;
}

.add-alarms-btn {
	margin-left: auto;
}

.title {
	font-size: 21px;
	font-weight: 600;
	padding: 5px;
	padding-bottom: 10px;
}

.alarm-list {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	> div {
		margin-top: 15px;
		width: 100%;
	}
}

.icon {
	font-size: 18px;
	margin-right: 4px;
	vertical-align: text-bottom !important;

	&.clear {
		color: var(--onms-primary);
	}
	&.ack {
		color: var(--onms-success);
	}
	&.move {
		color: var(--onms-indeterminate);
		font-size: 20px;
	}
	&.remove {
		color: var(--onms-error);
		font-size: 21px;
	}
	&.add {
		font-size: 20px;
	}
}

.filters {
	min-width: 20%;
	background-color: var(--onms-surface);
	margin-right: 15px;
	margin-top: 9px;
}
</style>
