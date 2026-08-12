<script setup lang="ts">
import { TAlarm, TEvent } from '@/types/TSituation'
import { formatDate } from '@/helpers/utils'

const props = defineProps<{
	alarm: TAlarm
	proportion: number
	minStart: number | Date
	events: TEvent[]
}>()
const nowDate = new Date().getTime()
const getWidth = (
	alarmStart: Date | undefined,
	alarmEnd: Date | undefined | number
): number => {
	return alarmStart
		? (Number(alarmEnd) - Number(alarmStart)) * props.proportion
		: 0
}

const getOffset = (alarmStart: Date | undefined): number => {
	return alarmStart
		? (Number(alarmStart) - Number(props.minStart)) * props.proportion
		: 0
}
</script>

<template>
	<div class="row">
		<div
			class="line-gray"
			:style="{
				width: getOffset(props.events[0].createTime) + 'px'
			}"
		></div>
		<div
			class="circle"
			:title="formatDate(alarm.firstEventTime)"
			:class="[alarm.severity.toLowerCase()]"
		></div>
		<div
			class="event-trim"
			v-for="(event, key) in props.events"
			:key="event.id"
		>
			<div
				v-if="props.events[key + 1]"
				class="line"
				:class="[event.severity.toLowerCase()]"
				:style="{
					width:
						getWidth(event.createTime, props.events[key + 1].createTime) + 'px'
				}"
			></div>

			<div
				v-if="props.events[key + 1]"
				class="event"
				:title="formatDate(alarm.firstEventTime)"
				:class="[event.severity.toLowerCase()]"
			></div>
		</div>
		<div
			class="line"
			:class="[events[events.length - 1].severity.toLowerCase()]"
			:style="{
				width: getWidth(events[events.length - 1].createTime, nowDate) + 'px'
			}"
		></div>
	</div>
</template>

<style scoped lang="scss">
.row {
	display: flex;
	flex-direction: row;
	align-items: center;
	min-width: max-content;
}
.line {
	height: 2px;
}

.line-gray {
	height: 1px;
	background-color: var(--onms-shade-3);
}

.circle {
	width: 14px;
	height: 14px;
	border-radius: 25px;
	cursor: pointer;
}

.event-trim {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.event {
	width: 3px;
	height: 30px;
	border-radius: 25px;

	cursor: pointer;
}
</style>
