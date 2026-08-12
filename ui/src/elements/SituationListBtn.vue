<script setup lang="ts">
import ArrowBack from '@/components/icons/navigation/ArrowBack.vue'
import { OnmsButton, OnmsIcon } from '@opennms/onms-ui'
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'

const router = useRouter()

const showSituationList = () => {
	router.push({
		name: ROUTE.situations
	})
}
</script>

<template>
	<OnmsButton @click="() => showSituationList()">
		<OnmsIcon :icon="ArrowBack" class="icon" />
		<span>Situation List</span>
	</OnmsButton>
</template>

<style lang="scss" scoped>
.icon {
	font-size: 22px;
	margin-right: 5px;
}
</style>
