<script setup lang="ts">
import { OnmsCheckbox } from '@opennms/onms-ui'
import { truncateText } from '@/helpers/utils'
import { TAlarm } from '@/types/TSituation'
import { formatDistanceStrict } from 'date-fns'

const emit = defineEmits(['selected-alarm'])
const nowDate = new Date().getTime()

const props = defineProps<{
	alarm: TAlarm
	selected: boolean
}>()
</script>

<template>
	<div class="alarm" :class="{ selected: props.selected }">
		<div class="alarmInfo">
			<div class="triangle" :class="[`${alarm.severity.toLowerCase()}`]"></div>
			<OnmsCheckbox
				:modelValue="props.selected"
				:inputId="`select-unassigned-alarm-${alarm.id}`"
				aria-label="selected"
				@update:modelValue="emit('selected-alarm', alarm.id)"
			/>

			<div class="alarm-title">{{ alarm.nodeLabel }} - {{ alarm.id }}</div>
		</div>
		<div>
			<strong> Duration: </strong>
			{{ formatDistanceStrict(nowDate, new Date(alarm.firstEventTime)) }}
		</div>
		<div class="description">
			{{ truncateText(alarm.description, 120) }}
		</div>
	</div>
</template>

<style lang="scss" scoped>
.alarm {
	margin-bottom: 15px;
	padding: 15px;
	border: 1px solid var(--onms-border-on-surface);
	position: relative;
	min-height: 140px;
	background-color: var(--onms-surface);
	&.selected {
		border: 1px solid var(--onms-primary);
	}
}
.alarmInfo {
	display: flex;
	align-items: center;
	gap: 6px;
}

.alarm-title {
	font-size: 16px;
	font-weight: 600;
}
.description {
	font-size: 13px;
}

.triangle {
	width: 12%;
	padding-bottom: 8%;
	overflow: hidden;
	position: absolute;
	top: 0%;
	left: 88%;
	// The global severity classes paint the whole element; only the rotated
	// :before corner may carry the severity color here.
	background-color: transparent !important;

	&.critical {
		&:before {
			background-color: var(--onms-error);
		}
	}

	&.major {
		&:before {
			background-color: var(--onms-major);
		}
	}

	&.minor {
		&:before {
			background-color: var(--onms-minor);
		}
	}

	&.warning {
		&:before {
			background-color: var(--onms-warning);
		}
	}

	&.indeterminate {
		&:before {
			background-color: var(--onms-indeterminate);
		}
	}

	&.normal {
		&:before {
			background-color: var(--onms-success);
		}
	}

	&.cleared {
		&:before {
			background-color: var(--onms-cleared);
		}
	}

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform-origin: 100% 100%;
		transform: rotate(45deg);
	}
}
</style>
