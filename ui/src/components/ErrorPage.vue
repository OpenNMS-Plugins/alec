<script setup lang="ts">
import useRouter from '@/composables/useRouter'
import { ROUTE } from '@/router/routeNames'
import { OnmsButton } from '@opennms/onms-ui'

const router = useRouter()

const reload = () => {
	router.push({ name: ROUTE.situations })
}
</script>

<template>
	<div class="main">Something bad is happening...</div>
	<OnmsButton label="Reload" @click="reload" />
</template>

<style scoped>
.main {
	margin-top: 20px;
	font-size: 18px;
	margin-bottom: 50px;
}
</style>
