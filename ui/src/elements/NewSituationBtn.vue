<script setup lang="ts">
import Add from '@featherds/icon/action/Add'
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import { markRaw } from 'vue'
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'

const router = useRouter()

const Icons = markRaw({
	Add
})
const addNewSituation = () => {
	router.push({
		name: ROUTE.addSituation
	})
}
</script>

<template>
	<FeatherButton class="new-situation-btn" @click="() => addNewSituation()">
		<FeatherIcon :icon="Icons.Add" aria-hidden="true" class="icon" />
		<span>New Situation</span>
	</FeatherButton>
</template>

<style lang="scss" scoped>
.new-situation-btn {
	height: 44px !important;
	background-color: var(--feather-success) !important;
	color: white !important;
}

.icon {
	font-size: 22px;
	margin-right: 5px;
	vertical-align: text-bottom !important;
}
</style>
