<script setup lang="ts">
import { OnmsIconButton } from '@opennms/onms-ui'

import FirstPage from '@/components/icons/navigation/FirstPage.vue'
import LastPage from '@/components/icons/navigation/LastPage.vue'
import ChevronLeft from '@/components/icons/navigation/ChevronLeft.vue'
import ChevronRight from '@/components/icons/navigation/ChevronRight.vue'

const props = defineProps<{
	totalPages: number
	currentPage: number
}>()
const emit = defineEmits(['go-to-page'])

const onGotoPage = (nextPage: number) => {
	if (nextPage >= 0 && nextPage <= props.totalPages - 1) {
		emit('go-to-page', nextPage)
	}
}
</script>
<template>
	<div class="paginator">
		<OnmsIconButton
			:icon="FirstPage"
			title="First page"
			:disabled="props.currentPage == 0"
			@click="onGotoPage(0)"
		/>
		<OnmsIconButton
			:icon="ChevronLeft"
			title="Previous page"
			:disabled="props.currentPage == 0"
			@click="onGotoPage(props.currentPage - 1)"
		/>
		<OnmsIconButton
			:icon="ChevronRight"
			title="Next page"
			:disabled="props.currentPage == props.totalPages - 1"
			@click="onGotoPage(props.currentPage + 1)"
		/>
		<OnmsIconButton
			:icon="LastPage"
			title="Last page"
			:disabled="props.currentPage == props.totalPages - 1"
			@click="onGotoPage(props.totalPages - 1)"
		/>
	</div>
</template>
<style lang="scss" scoped>
.paginator {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
