<script setup lang="ts">
import { OnmsRadioButton } from '@opennms/onms-ui'
import { watch, ref } from 'vue'

const props = defineProps<{
	preSelected?: number
}>()

const emit = defineEmits(['filter-date-selected'])

const timePeriods = [
	{ id: 1, name: 'No filter' },
	{ id: 2, name: 'Today' },
	{ id: 3, name: 'Yesterday' },
	{ id: 4, name: 'This week' }
]
const selectedTimePeriod = ref(props.preSelected || timePeriods[0].id)

watch(props, () => {
	if (props.preSelected) {
		selectedTimePeriod.value = props.preSelected
	}
})

const onSelect = (id: number) => {
	selectedTimePeriod.value = id
	emit('filter-date-selected', id)
}
</script>

<template>
	<div class="radio-dates" role="radiogroup" aria-label="Filter by start date">
		<div class="radio-option" v-for="item in timePeriods" :key="item.id">
			<OnmsRadioButton
				:modelValue="selectedTimePeriod"
				:value="item.id"
				:inputId="`filter-date-${item.id}`"
				@update:modelValue="onSelect(item.id)"
			/>
			<label :for="`filter-date-${item.id}`">{{ item.name }}</label>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.radio-dates {
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 8px;
}

.radio-option {
	display: flex;
	align-items: center;
	gap: 6px;

	label {
		cursor: pointer;
	}
}
</style>
