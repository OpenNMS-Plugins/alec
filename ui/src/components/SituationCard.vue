<script setup lang="ts">
import CheckCircle from '@featherds/icon/action/CheckCircle'
import { FeatherIcon } from '@featherds/icon'
import { groupBy, keys } from 'lodash'
import Cancel from '@featherds/icon/action/Cancel'
import { TSituation } from '@/types/TSituation'
import CONST from '@/helpers/constants'
import { formatDate } from '@/helpers/utils'
import { truncateText } from '@/helpers/utils'
import { formatDistanceStrict } from 'date-fns'
import { onMounted, ref } from 'vue'
import { getLLMSuggestion } from '@/services/AlecService'

const ACCEPTED = CONST.ACCEPTED
const REJECTED = CONST.REJECTED
const nowDate = new Date().getTime()

const props = defineProps<{
	situationInfo: TSituation
	small?: boolean
}>()
const emit = defineEmits(['situation-selected'])

const handleSituationSelected = () => {
	emit('situation-selected', props.situationInfo?.id)
}

// AI badge: one cheap GET per card on mount. Server returns 204 quickly when
// no record exists (feature off / call hasn't run), so we don't pay much when
// the integration is disabled. Slice 6 trade-off; a bulk endpoint would be a
// future optimization once we know how many cards a typical list shows.
const aiBadge = ref<'none' | 'pending' | 'ready' | 'failed'>('none')

onMounted(async () => {
	if (props.situationInfo?.id === undefined) return
	const result = await getLLMSuggestion(props.situationInfo.id)
	if (result && result.status) {
		aiBadge.value = result.status as 'pending' | 'ready' | 'failed'
	}
})
</script>

<template>
	<div
		v-on:click="handleSituationSelected"
		class="card"
		:class="{
			rejected: props.situationInfo.status == REJECTED
		}"
	>
		<div
			class="severity-line"
			:class="[`${props.situationInfo?.severity?.toLowerCase()}-bg dark`]"
		></div>
		<div class="content">
			<div class="title-row">
				<div class="title">Situation {{ props.situationInfo?.id }}</div>
				<span
					v-if="aiBadge !== 'none'"
					class="ai-badge"
					:class="aiBadge"
					:title="
						aiBadge === 'pending'
							? 'AI analysis in progress'
							: aiBadge === 'ready'
							? 'AI suggestions available'
							: 'Last AI request failed'
					"
					data-test="ai-badge"
				>
					AI{{ aiBadge === 'pending' ? '…' : '' }}
				</span>
				<div v-if="props.situationInfo.status == ACCEPTED" class="accepted">
					<FeatherIcon
						:icon="CheckCircle"
						aria-hidden="true"
						class="icon accepted"
					/>
				</div>
				<div v-if="props.situationInfo.status == REJECTED" class="rejected">
					<FeatherIcon
						:icon="Cancel"
						aria-hidden="true"
						class="icon rejected"
					/>
				</div>
			</div>
			<div>
				<span class="info-title"> Duration: </span>
				{{
					formatDistanceStrict(
						nowDate,
						new Date(props.situationInfo.firstEventTime)
					)
				}}
			</div>
			<div v-if="!props.small">
				<span class="info-title"> First Event: </span
				>{{ formatDate(props.situationInfo.firstEventTime) }}
			</div>
			<div class="description">
				{{
					truncateText(props.situationInfo.description, props.small ? 100 : 230)
				}}
			</div>
			<hr />
			<div class="count-info" v-if="props.situationInfo.relatedAlarms">
				Alarms:
				<span class="info-title">{{
					props.situationInfo.relatedAlarms.length
				}}</span>
			</div>
			<div
				class="info-title"
				v-for="node in keys(
					groupBy(props.situationInfo.relatedAlarms, 'nodeLabel')
				)"
				:key="node"
			>
				- {{ node }}
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.card {
	display: flex;
	width: 100%;
	flex-direction: row;
	background-color: var(--feather-elevation-background-0);
	cursor: pointer;
	border: 1px solid $border-grey;
	height: 100%;
	&:hover {
		border: 1px solid $dark-blue;
	}

	&.rejected {
		background-color: var(--feather-shade-3);
		opacity: 0.4;
	}
}
.title-row {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}
.title {
	font-size: 20px;
	font-weight: 600;
	word-break: break-all;
	margin-right: 5px;
}
.severity-line {
	min-width: 5px;
	width: 5px;
}
.content {
	padding: 15px;
	display: flex;
	flex-direction: column;
	width: 100%;
}
.icon {
	font-size: 24px;
}
.accepted {
	color: var(--feather-success);
}

.rejected {
	color: var(--feather-error);
}

.count {
	font-size: 18px;
	font-weight: 600;
	padding-right: 8px;
	padding-left: 3px;
	color: var(--feather-primary-text-on-surface);
}

.info-title {
	font-size: 15px;
	font-weight: 600;
}

.ai-badge {
	display: inline-flex;
	align-items: center;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 0.5px;
	padding: 2px 7px;
	border-radius: 10px;
	margin-right: auto;
	margin-left: 8px;
	cursor: help;

	&.pending {
		background: var(--feather-shade-3);
		color: var(--feather-secondary-text-on-surface);
	}
	&.ready {
		background: var(--feather-elevation-background-2);
		color: var(--feather-secondary);
	}
	&.failed {
		background: var(--feather-elevation-background-2);
		color: var(--feather-error);
	}
}
</style>
