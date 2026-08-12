<script setup lang="ts">
import { TSituation } from '@/types/TSituation'
import { formatDistanceStrict } from 'date-fns'
import { minBy, groupBy, sortBy, reverse } from 'lodash'
import { OnmsIconButton, OnmsSelect } from '@opennms/onms-ui'
import AddCircleAlt from '@/components/icons/action/AddCircleAlt.vue'
import TimeLine from '@/components/Timeline.vue'
import Remove from '@/components/icons/action/Remove.vue'
import Refresh from '@/components/icons/navigation/Refresh.vue'
import ChevronRight from '@/components/icons/navigation/ChevronRight.vue'
import ExpandMore from '@/components/icons/navigation/ExpandMore.vue'
import FormField from '@/components/Common/FormField.vue'
import { formatDate } from '@/helpers/utils'
import { ref, watch } from 'vue'
import EventsList from '@/components/EventsList.vue'

import { useSituationsStore } from '@/store/useSituationsStore'
const situationStore = useSituationsStore()

type TSortOption = {
	id: number
	name: string
}

const panelShow = ref(0)
const options: TSortOption[] = [
	{ id: 1, name: 'Creation Time' },
	{ id: 2, name: 'Severity' },
	{ id: 3, name: 'Duration' }
]
const sortedOption = ref(options[0])
const props = defineProps<{
	situation: TSituation
	width: number
}>()
const maxWidth = ref(props.width)
const container = ref(props.width)

const nowDate = ref(new Date().getTime())
const getEvents = () => {
	if (!props.situation.events) {
		const ids = props.situation?.alarms?.map((a) => a.id)
		situationStore.getEvents(props.situation.id, ids)
	}
}
getEvents()

const getProportion = () => {
	nowDate.value = new Date().getTime()
	return maxWidth.value / (Number(nowDate.value) - Number(minStart.value))
}

const relatedAlarms = ref(props.situation.alarms)
const minStart = ref(
	minBy(props.situation?.alarms, 'firstEventTime')?.firstEventTime ||
		new Date().getTime()
)

const proportion = ref(getProportion())

watch(props, () => {
	minStart.value =
		minBy(props.situation?.alarms, 'firstEventTime')?.firstEventTime ||
		new Date().getTime()
	getEvents()
	maxWidth.value = container.value
	proportion.value = getProportion()
	relatedAlarms.value = props.situation.alarms
	sortedOption.value = options[0]
})

const sortChanged = (value: unknown) => {
	const sortObj = value as TSortOption | undefined
	if (sortObj) {
		sortedOption.value = sortObj
	}
	//by creationTime (comes by default)
	if (sortObj?.id === 1) {
		relatedAlarms.value = props.situation.alarms
	}
	//by severity
	if (sortObj?.id === 2) {
		const alarmGrouped = groupBy(relatedAlarms.value, 'severity')
		const alarms = [
			...(alarmGrouped['CRITICAL'] || []),
			...(alarmGrouped['MAJOR'] || []),
			...(alarmGrouped['MINOR'] || []),
			...(alarmGrouped['WARNING'] || []),
			...(alarmGrouped['NORMAL'] || []),
			...(alarmGrouped['CLEARED'] || []),
			...(alarmGrouped['INDETERMINATE'] || [])
		]
		relatedAlarms.value = alarms.filter((a) => a)
	}
	//by duration
	if (sortObj?.id === 3) {
		const sorted = reverse(
			sortBy(
				props.situation.alarms,
				(a) => Number(a.lastEventTime) - Number(a.firstEventTime)
			)
		)
		relatedAlarms.value = sorted
	}
}

const handleClickZoomIn = () => {
	maxWidth.value += 100
	proportion.value = getProportion()
}

const handleClickZoomOut = () => {
	maxWidth.value -= 100
	proportion.value = getProportion()
}

const handleClickZoomReset = () => {
	maxWidth.value = container.value
	proportion.value = getProportion()
}

const expandPanel = (alarmToShow: number) => {
	panelShow.value = alarmToShow
}

const closePanel = () => {
	panelShow.value = 0
}
</script>

<template>
	<div class="section detail">
		<div
			class="severity-line"
			:class="[props.situation?.severity?.toLowerCase()]"
		></div>
		<div>
			<div class="id">Situation {{ props.situation.id }}</div>

			<div>
				Duration:
				{{ formatDistanceStrict(nowDate, new Date(minStart)) }}
			</div>
		</div>
	</div>
	<div v-if="relatedAlarms && relatedAlarms.length > 0" class="section">
		<div class="id">Alarms</div>
		<div class="action-btns">
			<FormField label="Sort by:" for="metrics-sort-select" class="select">
				<OnmsSelect
					:modelValue="sortedOption"
					:options="options"
					optionLabel="name"
					inputId="metrics-sort-select"
					data-test="select-sort"
					@update:modelValue="sortChanged"
				/>
			</FormField>
			<div class="zoom">
				Zoom
				<div>
					<OnmsIconButton
						:icon="AddCircleAlt"
						iconSize="24px"
						class="zoom-icon"
						title="Zoom in"
						@click="handleClickZoomIn"
					/>
					<OnmsIconButton
						:icon="Refresh"
						iconSize="24px"
						class="zoom-icon"
						title="Reset zoom"
						@click="handleClickZoomReset"
					/>
					<OnmsIconButton
						:icon="Remove"
						iconSize="24px"
						class="zoom-icon"
						title="Zoom out"
						@click="handleClickZoomOut"
					/>
				</div>
			</div>
		</div>
		<div
			v-if="container"
			class="alarms"
			:style="{
				width: container + 50 + 'px'
			}"
		>
			<div class="times">
				<div>
					{{ formatDate(minStart) }}
				</div>
				<div>
					{{ formatDate(nowDate) }}
				</div>
			</div>
			<div class="timeline-container" v-if="situation.events">
				<div class="timeline" v-for="alarm in relatedAlarms" :key="alarm.id">
					<div class="alarm-id">
						{{ alarm.nodeLabel }} - {{ alarm.id }}
						<OnmsIconButton
							v-if="panelShow === alarm.id"
							:icon="ExpandMore"
							iconSize="20px"
							class="expand"
							title="Collapse events"
							@click="closePanel"
						/>
						<OnmsIconButton
							v-else
							:icon="ChevronRight"
							iconSize="20px"
							class="expand"
							title="Expand events"
							@click="() => expandPanel(alarm.id)"
						/>
					</div>
					<TimeLine
						:alarm="alarm"
						:proportion="proportion"
						:min-start="minStart"
						:events="props.situation.events[alarm.id]"
					/>
					<div class="panel" v-if="panelShow === alarm.id">
						<EventsList :events="props.situation.events[alarm.id]" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
::-webkit-scrollbar {
	height: 5px;
	width: 5px;
	background-color: var(--onms-background);
}

::-webkit-scrollbar-thumb {
	background: var(--onms-shade-3);
}

.severity-line {
	width: 4px;
	margin-right: 10px;
}
.section {
	background-color: var(--onms-surface);
	border: 1px solid var(--onms-border-on-surface);
	margin-top: 10px;
	padding: 15px;
}

.detail {
	@extend .section;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
}

.id {
	font-weight: 600;
	font-size: 21px;
	margin-bottom: 15px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.alarms {
	margin-top: 10px;
	display: flex;
	flex-direction: column;
}
.alarm-id {
	font-size: 14px;
	font-weight: 600;
	display: flex;
	align-items: center;
	color: var(--onms-secondary-text-on-surface);
	margin-bottom: 5px;
}
.container {
	display: flex;
	flex-direction: row;
	max-height: 600px;
	overflow-y: auto;
}

.ids {
	display: flex;
	flex-direction: column;
	width: 18%;
}
.timeline-container {
	flex-direction: column;
	display: flex;
	overflow-x: auto;
	padding-left: 10px;
	flex: 1;
	display: flex;
	overflow: auto;
}

.timeline {
	align-items: center;
	margin-bottom: 17px;
	padding-top: 5px;
	min-width: max-content;
}

.times {
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid var(--onms-border-on-surface);
	margin-bottom: 15px;
	justify-content: space-between;
}

.select {
	width: auto;
}

.action-btns {
	display: flex;
	flex-direction: row;
	padding-top: 10px;
	> div {
		margin-right: 20px;
	}
}

.zoom {
	border: 1px solid var(--onms-border-on-surface);
	padding: 6px 15px;
	border-radius: 5px;
	min-width: 160px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
}

.zoom-icon {
	margin-left: 5px;
}

.panel {
	padding: 10px;
	margin: 5px;
}
.expand {
	margin-left: 5px;
}
</style>
