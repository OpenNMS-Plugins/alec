<script setup lang="ts">
import Add from '@/components/icons/action/Add.vue'
import Cancel from '@/components/icons/action/Cancel.vue'

import { OnmsButton, OnmsIcon, OnmsTextarea, useOnmsToast } from '@opennms/onms-ui'
import FormField from '@/components/Common/FormField.vue'
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'

import CommonFilters from '@/components/CommonFilters.vue'

import { TNewSituation, TAlarm } from '@/types/TSituation'
import { useSituationsStore } from '@/store/useSituationsStore'
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import ArrowBack from '@/components/icons/navigation/ArrowBack.vue'
import { remove, includes } from 'lodash'
import { createSituations } from '@/services/AlecService'
import type { Ref } from 'vue'
import { ref, watch } from 'vue'
import NoResults from '@/elements/NoResults.vue'

const router = useRouter()
const toast = useOnmsToast()
const situationStore = useSituationsStore()

const descriptionText = ref()
const descriptionError = ref('')

const diagnosticText = ref()
const diagnosticError = ref('')

const alarmIds = ref([]) as Ref<number[]>
const errorAlarmList = ref(false)

const alarms = ref(situationStore.unassignedAlarms)

if (!alarms.value.length) {
	situationStore.getUnassignedAlarms()
}

watch(
	() => situationStore.unassignedAlarms,
	() => {
		alarms.value = situationStore.unassignedAlarms
	}
)

const showSituationList = () => {
	router.push({
		name: ROUTE.situations
	})
}

const addAlarm = (alarmId: number) => {
	errorAlarmList.value = false
	if (!includes(alarmIds.value, alarmId)) {
		alarmIds.value.push(alarmId)
	} else {
		remove(alarmIds.value, (a) => a === alarmId)
	}
}

const validateForm = () => {
	const errorMsg = 'This field should not be empty'
	let isValid = true
	if (!descriptionText.value) {
		descriptionError.value = errorMsg
		isValid = false
	}
	if (!diagnosticText.value) {
		diagnosticError.value = errorMsg
		isValid = false
	}
	if (alarmIds.value.length < 2) {
		errorAlarmList.value = true
		isValid = false
	}
	return isValid
}

const createSituation = async () => {
	if (validateForm()) {
		const situationInfo: TNewSituation = {
			alarmIdList: alarmIds.value,
			diagnosticText: diagnosticText.value,
			description: descriptionText.value
		}
		const result = await createSituations(situationInfo)
		if (!result) {
			toast.showToast({
				message: 'Error on creating new situation :(',
				severity: 'error',
				timeout: 6000
			})
		} else {
			router.push({
				name: ROUTE.situations
			})
		}
	}
}

const cleanFields = () => {
	descriptionText.value = ''
	diagnosticText.value = ''
	alarmIds.value = []
	alarms.value = situationStore.unassignedAlarms
}

const filterList = (list: TAlarm[]) => {
	alarms.value = list
}
</script>

<template>
	<div class="container">
		<OnmsButton class="back-btn" @click="() => showSituationList()">
			<OnmsIcon :icon="ArrowBack" aria-hidden="true" class="icon" />
			<span>Situation List</span>
		</OnmsButton>
		<h2>New Situation</h2>
		<div class="form">
			<div class="fields">
				<FormField
					label="Description"
					for="new-situation-description"
					:error="descriptionError"
				>
					<OnmsTextarea
						v-model="descriptionText"
						id="new-situation-description"
						:rows="5"
						:invalid="!!descriptionError"
					/>
				</FormField>
				<FormField
					label="Diagnostic Text"
					for="new-situation-diagnostic"
					:error="diagnosticError"
				>
					<OnmsTextarea
						v-model="diagnosticText"
						id="new-situation-diagnostic"
						:rows="5"
						:invalid="!!diagnosticError"
					/>
				</FormField>
				<div v-if="errorAlarmList" class="errorList">
					You must add at least 2 alarms.
				</div>
				<div class="footer">
					<OnmsButton variant="ghost" class="btn" @click="cleanFields">
						<OnmsIcon :icon="Cancel" aria-hidden="true" class="icon" />
						<span>Clear</span>
					</OnmsButton>
					<OnmsButton class="btn-add" @click="createSituation">
						<OnmsIcon :icon="Add" aria-hidden="true" class="icon" />
						<span>Add Situation</span>
					</OnmsButton>
				</div>
			</div>
			<div class="alarm-column">
				<div class="header-alarms">
					<h3>Add Unassociated Alarms</h3>
					<div>
						<div class="totalAlarms" :class="{ errorList: errorAlarmList }">
							Total Alarms Added:
							<span class="total">{{ alarmIds.length }}</span>
						</div>
					</div>
				</div>
				<div class="list">
					<div class="filters">
						<CommonFilters
							:list="situationStore.unassignedAlarms"
							@filtered-list="filterList"
							isOpen
						/>
					</div>
					<div v-if="alarms.length" class="alarms">
						<div v-for="alarm in alarms" :key="alarm.id" class="alarm-card">
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
	</div>
</template>

<style lang="scss" scoped>
.back-btn {
	margin-bottom: 20px;
}

.form {
	display: flex;
	background-color: var(--onms-surface);
	border: 1px solid var(--onms-border-on-surface);
	padding: 20px;
	margin-top: 20px;
	min-height: 750px;
}

.alarm-column {
	width: 100%;
	margin-left: 20px;
	border: 1px solid var(--onms-border-on-surface);
	padding: 10px 15px;
	border-radius: 5px;
}

.alarms {
	height: 650px;
	overflow-y: auto;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	width: 100%;
	flex-wrap: wrap;
	align-content: flex-start;
}
.alarm-card {
	width: 49%;
}

.fields {
	display: flex;
	flex-direction: column;
	width: 600px;
	> div {
		margin-bottom: 20px;
	}
}

.icon {
	font-size: 19px;
	margin-right: 5px;
}

.totalAlarms {
	font-size: 16px;
}

.total {
	font-size: 18px;
}

.errorList {
	color: var(--onms-error);
}

.footer {
	flex-grow: 1;
	display: flex;
	align-items: end;
	gap: 12px;
}

.list {
	display: flex;
}

.filters {
	min-width: 30%;
	margin-right: 15px;
	margin-top: 9px;
}

.header-alarms {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
}
</style>
