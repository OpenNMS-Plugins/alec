<script setup lang="ts">
import ArrowBack from '@featherds/icon/navigation/ArrowBack'
import { FeatherButton } from '@featherds/button'
import { FeatherIcon } from '@featherds/icon'
import { markRaw } from 'vue'
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'

const router = useRouter()

const Icons = markRaw({
	ArrowBack
})

const showSituationList = () => {
	router.push({
		name: ROUTE.situations
	})
}
</script>

<template>
	<FeatherButton primary @click="() => showSituationList()">
		<FeatherIcon :icon="Icons.ArrowBack" aria-hidden="true" class="icon" />
		<span>Situation List</span>
	</FeatherButton>
</template>

<style lang="scss" scoped>
.icon {
	font-size: 22px;
	margin-right: 5px;
	vertical-align: text-bottom;
}
</style>
