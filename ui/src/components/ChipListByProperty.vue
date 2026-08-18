<script setup lang="ts">
import { TAlarm, TSituation } from '@/types/TSituation'
import { OnmsChip } from '@opennms/onms-ui'
import { ref, watch, computed, reactive } from 'vue'
import { groupBy, keys } from 'lodash'
import StatusColor from '@/elements/StatusColor.vue'

const emit = defineEmits(['selected-option'])

type TState = {
	alarms: (TAlarm | TSituation)[]
}
const props = defineProps<{
	alarms: (TAlarm | TSituation)[]
	property: string
	preSelected?: string[]
	isVertical?: boolean
}>()
const selectAll = ref(false)

const alarmFilters = computed(() => keys(groupBy(props.alarms, props.property)))
const selectedFilters = ref(
	props.preSelected?.length ? props.preSelected : ['all']
)
const state: TState = reactive({
	alarms: props.alarms
})

const handleAlarmFilters = (selected: string) => {
	selectedFilters.value = selectedFilters.value.filter((f) => f !== 'all')
	if (selectedFilters.value.includes(selected)) {
		selectedFilters.value = selectedFilters.value.filter((f) => f !== selected)
	} else {
		selectedFilters.value.push(selected)
	}
	if (selected === 'all' || selectedFilters.value.length === 0) {
		selectedFilters.value = ['all']
	}
	emit('selected-option', selectedFilters.value)
}

watch(props, () => {
	selectedFilters.value = props.preSelected?.length
		? props.preSelected
		: ['all']
	state.alarms = props.alarms
	selectAll.value = false
})
</script>

<template>
	<div
		:key="selectedFilters.toString()"
		v-if="alarmFilters.length > 0"
		class="chip-list"
		:class="{ vertical: props.isVertical }"
	>
		<OnmsChip
			:class="{ clicked: selectedFilters.includes('all') }"
			@click="handleAlarmFilters('all')"
		>
			ALL
		</OnmsChip>
		<OnmsChip
			:class="[
				{ clicked: selectedFilters.includes(option) },
				`${option?.toLowerCase()}-color`
			]"
			v-for="option in alarmFilters"
			:key="option"
			@click="handleAlarmFilters(option)"
		>
			<StatusColor v-if="property == 'severity'" :severity="option" />{{
				option
			}}
		</OnmsChip>
	</div>
</template>

<style scoped lang="scss">
.chip-list {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;

	> * {
		cursor: pointer;
	}
}

.vertical {
	flex-direction: column;
	align-items: start;
	margin-right: 20px;
}

.clicked {
	border: 2px solid var(--onms-primary) !important;
	background-color: var(--onms-shade-3) !important;
}
</style>
