<script setup lang="ts">
import { OnmsButton, OnmsDrawer } from '@opennms/onms-ui'
import { useSituationsStore } from '@/store/useSituationsStore'
import { ref, watch } from 'vue'
import UnassignedAlarmCard from '@/components/UnassignedAlarmCard.vue'
import { includes, remove } from 'lodash'
import CommonFilters from '@/components/CommonFilters.vue'
import { TAlarm } from '@/types/TSituation'
import type { Ref } from 'vue'
import NoResults from '@/elements/NoResults.vue'

const emit = defineEmits(['alarms-selected', 'drawer-alarms-closed'])

const props = defineProps<{
	visible: boolean
}>()
const situationStore = useSituationsStore()
const visible = ref(props.visible)
const alarmIds = ref([]) as Ref<number[]>
const severityFilters = ref(['all'])
const alarms = ref(situationStore.unassignedAlarms)

watch(props, () => {
	visible.value = props.visible
	alarmIds.value = []
	alarms.value = situationStore.unassignedAlarms
})

watch(
	() => situationStore.unassignedAlarms,
	() => {
		updateList()
	}
)

const addAlarm = (alarmId: number) => {
	if (!includes(alarmIds.value, alarmId)) {
		alarmIds.value.push(alarmId)
	} else {
		remove(alarmIds.value, (a) => a === alarmId)
	}
}

const addSelectedAlarms = () => {
	emit('alarms-selected', alarmIds.value)
}

const updateList = () => {
	let filtered = situationStore.unassignedAlarms
	if (!severityFilters.value.includes('all')) {
		filtered = filtered.filter((a) =>
			severityFilters.value.includes(a.severity)
		)
	}
	alarms.value = filtered
}

const filterList = (alarmsFiltered: TAlarm[]) => {
	alarms.value = alarmsFiltered
}
</script>

<template>
	<OnmsDrawer
		:visible="visible"
		header="Alarms"
		width="760px"
		@update:visible="visible = $event"
		@hide="emit('drawer-alarms-closed')"
	>
		<div class="content">
			<div class="header">
				<h4>ADD ALARMS</h4>
				<OnmsButton
					class="add-alarms-btn"
					:label="`Add ${alarmIds.length} Alarms`"
					@click="addSelectedAlarms"
				/>
			</div>
			<CommonFilters
				:list="situationStore.unassignedAlarms"
				@filtered-list="filterList"
			/>
			<div class="alarms-list" v-if="alarms.length">
				<div class="card" v-for="alarm in alarms" :key="alarm.id">
					<UnassignedAlarmCard
						:selected="includes(alarmIds, alarm.id)"
						:alarm="alarm"
						@selected-alarm="addAlarm"
					/>
				</div>
			</div>
			<NoResults v-else />
		</div>
	</OnmsDrawer>
</template>

<style lang="scss" scoped>
.content {
	padding: 10px;
	width: 700px;
}

.alarms-list {
	margin-top: 10px;
	overflow-y: scroll;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 750px;
	align-content: flex-start;
	padding-right: 5px;
}
.header {
	display: flex;
	justify-content: space-between;
	width: 94%;
	margin-bottom: 15px;
}
.card {
	width: 325px;
}
.empty {
	padding: var(--onms-spacing-xl);
}


</style>
