<script setup lang="ts">
import { OnmsButton, OnmsIcon } from '@opennms/onms-ui'
import CheckCircle from '@/components/icons/action/CheckCircle.vue'
import KeyboardArrowUp from '@/components/icons/hardware/KeyboardArrowUp.vue'
import MarkComplete from '@/components/icons/action/MarkComplete.vue'
import { sendAcknowledge, sendAction } from '@/services/AlarmService'
import { sendFeedbackAcceptSituation } from '@/services/AlecService'

import CONST from '@/helpers/constants'
import { TAlarm, TSituation } from '@/types/TSituation'

import { useSituationsStore } from '@/store/useSituationsStore'

const props = defineProps<{
	alarm: TAlarm | TSituation
	direction: 'horizontal' | 'vertical'
	showClear?: boolean
	isSituation?: boolean
	situationId: number
}>()
const situationStore = useSituationsStore()

const handleAcknowledgeAction = async (isAck: boolean) => {
	const result = await sendAcknowledge(props.alarm.id, isAck)
	if (result) {
		situationStore.getSituation(props.situationId)
	}
	if (props.isSituation) {
		await sendFeedbackAcceptSituation(
			props.situationId,
			CONST.ACCEPTED.toLowerCase()
		)
	}
}

const handleAction = async (action: string) => {
	const result = await sendAction(props.alarm.id, action)
	if (result) {
		situationStore.getSituation(props.situationId)
	}
}
</script>
<template>
	<div
		class="action-btns-group"
		:class="props.direction === 'horizontal' ? 'horizontal' : 'vertical'"
	>
		<OnmsButton
			v-if="!alarm.ackTime"
			variant="text"
			class="acction-btn"
			@click="() => handleAcknowledgeAction(true)"
		>
			<OnmsIcon :icon="CheckCircle" class="icon ack" />
			<span>Acknowledge</span>
		</OnmsButton>
		<OnmsButton
			v-if="alarm.severity != 'CRITICAL'"
			variant="text"
			class="acction-btn"
			@click="() => handleAction(CONST.ESCALATE)"
		>
			<OnmsIcon :icon="KeyboardArrowUp" class="icon escalate" />
			<span>Escalate</span>
		</OnmsButton>
		<OnmsButton
			v-if="
				props.showClear &&
				alarm.severity != 'NORMAL' &&
				alarm.severity != 'CLEARED'
			"
			variant="text"
			class="acction-btn"
			@click="() => handleAction(CONST.CLEAR)"
		>
			<OnmsIcon :icon="MarkComplete" class="icon clear" />
			<span>Clear</span>
		</OnmsButton>
	</div>
</template>

<style lang="scss" scoped>
.action-btns-group {
	display: flex;
	> button {
		margin-left: 0 !important;
	}

	&.vertical {
		flex-direction: column;
		> button {
			min-width: 170px;
			margin-bottom: 12px;
		}
		> button:last-child {
			margin-bottom: 0;
		}
	}
	&.horizontal {
		flex-direction: row;
		> button {
			margin-right: 12px;
		}
		> button:last-child {
			margin-right: 0;
		}
	}
}

.icon {
	font-size: 18px;
	margin-right: 4px;
	vertical-align: sub;

	&.ack {
		color: var(--onms-success);
	}
	&.unack {
		color: var(--onms-error);
	}
	&.escalate {
		color: var(--onms-error);
		font-size: 20px;
	}
	&.clear {
		color: var(--onms-primary);
	}
}
</style>
