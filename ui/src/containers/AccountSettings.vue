<script setup lang="ts">
import { FeatherRadioGroup, FeatherRadio } from '@featherds/radio'
import SituationListBtn from '@/elements/SituationListBtn.vue'
import { FeatherCheckbox } from '@featherds/checkbox'
import { FeatherInput } from '@featherds/input'
import MarkComplete from '@featherds/icon/action/MarkComplete'
import Help from '@featherds/icon/action/Help'
import Restore from '@featherds/icon/action/Restore'
import { FeatherIcon } from '@featherds/icon'
import CONST from '@/helpers/constants'
import { useUserStore } from '@/store/useUserStore'
import { computed, markRaw, ref } from 'vue'
import { FeatherButton } from '@featherds/button'
import { FeatherSnackbar } from '@featherds/snackbar'
import {
	closeAllOpenSituations,
	reEvaluateAllOpenAlarms
} from '@/services/AlecService'

const Icons = markRaw({
	MarkComplete,
	Help,
	Restore
})

const ENGINE_DEFAULTS = {
	alpha: 144.47117699,
	beta: 0.55257784,
	epsilon: 100
}

const userStore = useUserStore()
const engineName = ref(userStore.engineInfo?.engineName || CONST.ENGINE_DBSCAN)
const hellinger = ref(
	userStore.engineInfo?.distanceMeasureName === CONST.HELLINGER_OPTION
)
const alpha = ref(userStore.engineInfo?.alpha ?? ENGINE_DEFAULTS.alpha)
const beta = ref(userStore.engineInfo?.beta ?? ENGINE_DEFAULTS.beta)
const epsilon = ref(userStore.engineInfo?.epsilon ?? ENGINE_DEFAULTS.epsilon)

const isClustering = computed(() => engineName.value === CONST.ENGINE_DBSCAN)

const showHelp = ref(false)
const showNotification = ref(false)
const isError = ref(false)
const message = ref('')

const resetVariablesToDefaults = () => {
	alpha.value = ENGINE_DEFAULTS.alpha
	beta.value = ENGINE_DEFAULTS.beta
	epsilon.value = ENGINE_DEFAULTS.epsilon
}

const notify = (msg: string, error: boolean) => {
	message.value = msg
	isError.value = error
	showNotification.value = true
}

const saveConfiguration = async () => {
	const savedEngine = await userStore.setEngineInfo(
		engineName.value,
		hellinger.value,
		{
			alpha: Number(alpha.value),
			beta: Number(beta.value),
			epsilon: Number(epsilon.value)
		}
	)

	if (savedEngine) {
		userStore.getEngineInfo()
		notify('The settings were saved!', false)
	} else {
		notify('Error on saving the settings', true)
	}
}

const handleCloseAllSituations = async () => {
	if (
		!window.confirm(
			'Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone.'
		)
	) {
		return
	}
	const ok = await closeAllOpenSituations()
	notify(
		ok ? 'All open situations were closed.' : 'Failed to close situations.',
		!ok
	)
}

const handleReEvaluate = async () => {
	if (
		!window.confirm(
			'Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms.'
		)
	) {
		return
	}
	const ok = await reEvaluateAllOpenAlarms()
	notify(
		ok
			? 'Engine re-initialized. Alarms are being re-evaluated.'
			: 'Failed to re-evaluate alarms.',
		!ok
	)
}
</script>
<template>
	<SituationListBtn />
	<div class="container">
		<h3 data-test="page-title">Correlation Engine Configuration Page</h3>

		<div class="section">
			<div class="title">
				Choose the correlation engine that ALEC will use (see
				<a target="_blank" :href="CONST.URL_DOCUMENTATION"
					>Correlation Engines documentation</a
				>
				for more information):
			</div>
			<FeatherRadioGroup vertical v-model="engineName" label="" hideLabel>
				<FeatherRadio class="radio-item" :value="CONST.ENGINE_DBSCAN"
					>Clustering</FeatherRadio
				>
				<FeatherCheckbox
					v-model="hellinger"
					:disabled="!isClustering"
					class="checkbox"
				>
					<div class="hellinger">
						<strong>Hellinger distance</strong>
					</div>
				</FeatherCheckbox>
				<FeatherRadio
					class="radio-item"
					:value="CONST.ENGINE_LLM"
					disabled
					data-test="engine-llm"
				>
					LLM Based
				</FeatherRadio>
				<div class="caption" data-test="engine-llm-caption">Coming soon</div>
			</FeatherRadioGroup>
		</div>
		<div v-if="isClustering" class="section" data-test="variables-section">
			<div class="title-row">
				<div class="title">Correlation variables</div>
				<button
					type="button"
					class="icon-btn help-icon"
					:aria-expanded="showHelp"
					aria-label="Show help for correlation variables"
					data-test="variables-help"
					@click="showHelp = !showHelp"
				>
					<FeatherIcon :icon="Icons.Help" />
				</button>
				<button
					type="button"
					class="icon-btn reset-icon"
					aria-label="Reset correlation variables to defaults"
					data-test="variables-reset"
					@click="resetVariablesToDefaults"
				>
					<FeatherIcon :icon="Icons.Restore" />
				</button>
			</div>
			<div
				v-if="showHelp"
				class="help-popover"
				data-test="variables-help-popover"
			>
				<ul>
					<li>
						<strong>Alpha (α)</strong> — overall scaling of inter-alarm
						distance. Higher α &rarr; more conservative clustering (fewer
						clusters). <em>Default: {{ ENGINE_DEFAULTS.alpha }}</em>
					</li>
					<li>
						<strong>Beta (β)</strong> — weight between time (β) and topology
						(1−β), in <code>[0, 1]</code>. Higher β emphasises time proximity;
						lower β emphasises topology. <em>Default: {{ ENGINE_DEFAULTS.beta }}</em>
					</li>
					<li>
						<strong>Epsilon (ε)</strong> — DBScan radius. Higher ε clusters more
						aggressively; lower ε produces smaller, tighter clusters.
						<em>Default: {{ ENGINE_DEFAULTS.epsilon }}</em>
					</li>
				</ul>
			</div>
			<div class="variables">
				<FeatherInput
					v-model="alpha"
					type="number"
					label="Alpha"
					data-test="variable-alpha"
				/>
				<FeatherInput
					v-model="beta"
					type="number"
					label="Beta"
					data-test="variable-beta"
				/>
				<FeatherInput
					v-model="epsilon"
					type="number"
					label="Epsilon"
					data-test="variable-epsilon"
				/>
			</div>
		</div>
		<div class="action-row">
			<FeatherButton
				secondary
				data-test="close-all-btn"
				@click="handleCloseAllSituations"
			>
				Close All Open Situations
			</FeatherButton>
			<FeatherButton
				secondary
				data-test="reevaluate-btn"
				@click="handleReEvaluate"
			>
				Re-Evaluate All Open Alarms
			</FeatherButton>
			<FeatherButton
				primary
				class="save-btn"
				data-test="save-btn"
				@click="saveConfiguration"
			>
				<FeatherIcon :icon="Icons.MarkComplete" class="icon" />
				<span>Save Changes</span>
			</FeatherButton>
		</div>
		<FeatherSnackbar
			v-model="showNotification"
			right
			:error="isError"
			:timeout="6000"
		>
			{{ message }}
			<template v-slot:button>
				<FeatherButton @click="showNotification = false" text
					>dismiss</FeatherButton
				>
			</template>
		</FeatherSnackbar>
	</div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss';

.container {
	display: flex;
	padding-top: 20px;
	flex-direction: column;
	border: 1px solid variables.$border-grey;
	background-color: #ffffff;
	min-height: 650px;
	padding: 20px;
	width: 700px;
	margin: 20px auto;
}

.section {
	margin-top: 30px;
	border: 1px solid variables.$border-grey;
	padding: 10px 15px;
}

.title {
	font-size: 16px;
	font-weight: 600;
}

.radio-item {
	margin-bottom: 0 !important;
}

.checkbox {
	margin-left: var(--feather-spacing-l);
	margin-bottom: var(--feather-spacing-l) !important;
}

.caption {
	margin-left: var(--feather-spacing-xl);
	margin-top: -8px;
	font-size: 12px;
	color: #666;
	font-style: italic;
}

.title-row {
	display: flex;
	align-items: center;
	gap: 6px;
}

.icon-btn {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: transparent;
	border: none;
	padding: 2px;
	color: #666;
	font-size: 18px;
	cursor: pointer;
	border-radius: 50%;

	&:hover {
		color: #222;
		background: #f0f0f0;
	}

	&:focus-visible {
		outline: 2px solid #2086a4;
		outline-offset: 1px;
	}
}

.help-icon {
	cursor: help;
}

.help-popover {
	margin-top: 8px;
	padding: 10px 14px;
	background: #f8fafc;
	border: 1px solid variables.$border-grey;
	border-radius: 4px;
	font-size: 13px;
	line-height: 1.45;

	ul {
		margin: 0;
		padding-left: 18px;
	}

	li + li {
		margin-top: 6px;
	}

	code {
		font-family: monospace;
		font-size: 12px;
		background: #eef2f6;
		padding: 0 4px;
		border-radius: 2px;
	}

	em {
		color: #555;
	}
}

.variables {
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	margin-top: 12px;
}

.variables > * {
	min-width: 180px;
}

.action-row {
	display: flex;
	gap: 12px;
	justify-content: flex-end;
	margin-top: var(--feather-spacing-xxl);
	flex-wrap: wrap;
}

.icon {
	font-size: 19px;
	margin-right: 8px;
}
</style>
