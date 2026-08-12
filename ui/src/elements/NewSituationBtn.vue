<script setup lang="ts">
import Add from '@/components/icons/action/Add.vue'
import { OnmsButton, OnmsIcon } from '@opennms/onms-ui'
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'

const router = useRouter()

const addNewSituation = () => {
	router.push({
		name: ROUTE.addSituation
	})
}
</script>

<template>
	<OnmsButton class="new-situation-btn" @click="() => addNewSituation()">
		<OnmsIcon :icon="Add" class="icon" />
		<span>New Situation</span>
	</OnmsButton>
</template>

<style lang="scss" scoped>
.icon {
	font-size: 22px;
	margin-right: 5px;
}
</style>
