<script setup lang="ts">
import { OnmsIconButton, OnmsTextarea } from '@opennms/onms-ui'
import EditMode from '@/components/icons/action/EditMode.vue'
import Cancel from '@/components/icons/action/Cancel.vue'
import CheckCircle from '@/components/icons/action/CheckCircle.vue'
import { TMemo } from '@/types/TSituation'
import { saveMemo, deleteMemo } from '@/services/AlarmService'
import { useAppStore } from '@/store/useAppStore'
import { watch, ref } from 'vue'

const appStore = useAppStore()

const props = defineProps<{
	id: number
	label: string
	memo: TMemo
	type: 'journal' | 'memo'
	situationId: number
	boxType?: 'small' | 'normal'
}>()
const isEdit = ref(false)
const memoText = ref(props.memo?.body)

watch(props, () => {
	memoText.value = props.memo?.body
	isEdit.value = false
})

const showEditInput = () => {
	isEdit.value = !isEdit.value
}

const removeMemo = async () => {
	isEdit.value = false
	const result = await deleteMemo(props.id, props.type)
	if (result) {
		memoText.value = ''
	} else {
		appStore.showErrorMsg('Error on removing memo :(')
	}
}

const saveMemoText = async () => {
	isEdit.value = false
	if (memoText.value && memoText.value !== '') {
		const result = await saveMemo(props.id, props.type, memoText.value)
		if (!result) {
			appStore.showErrorMsg('Error on saving memo :(')
		}
	}
}
</script>

<template>
	<div :class="[props.boxType === 'small' ? 'box-small' : 'box']">
		<div class="row">
			<div class="label">{{ label }}</div>
			<div class="action-icons">
				<OnmsIconButton
					v-if="!isEdit"
					:icon="EditMode"
					:iconSize="props.boxType === 'small' ? '18px' : '22px'"
					class="icon-btn edit"
					title="Edit memo"
					@click="showEditInput"
				/>
				<OnmsIconButton
					v-if="isEdit"
					:icon="CheckCircle"
					:iconSize="props.boxType === 'small' ? '18px' : '22px'"
					class="icon-btn save"
					title="Save memo"
					@click="saveMemoText"
				/>
				<OnmsIconButton
					v-if="(memoText && memoText != '') || isEdit"
					:icon="Cancel"
					:iconSize="props.boxType === 'small' ? '18px' : '22px'"
					class="icon-btn cancel"
					title="Remove memo"
					@click="removeMemo"
				/>
			</div>
		</div>
		<div>
			<div class="text" v-if="!isEdit && memoText != null">
				{{ memoText }}
			</div>
			<OnmsTextarea
				class="textarea"
				v-if="isEdit"
				v-model="memoText"
				:rows="2"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.row {
	display: flex;
	flex-direction: row;
	align-items: start;
}
.box {
	border: 1px solid var(--onms-border-on-surface);
	padding: 15px;
	width: 49%;
	margin-bottom: 20px;
	background-color: var(--onms-surface);

	.label {
		font-weight: 600;
		font-size: 17px;
	}

	.text {
		margin-top: 8px;
		font-size: 14px;
	}
}
.box-small {
	margin-top: 5px;
	> .row {
		margin-top: 6px;
	}

	.label {
		font-weight: 600;
		font-size: 14px;
	}

	.text {
		width: fit-content;
		font-size: 14px;
	}
}
.icon-btn {
	margin-left: 8px;
}
.action-icons {
	display: flex;
	flex-direction: row;
}
.textarea {
	margin-top: 3px;
	width: 100%;
}
.icon-btn {
	&.save {
		color: var(--onms-success) !important;
	}
	&.cancel {
		color: var(--onms-error) !important;
	}
	&.edit {
		color: var(--onms-primary) !important;
	}
}
</style>
