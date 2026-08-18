<script setup lang="ts">
import MainContainer from '@/containers/MainContainer.vue'
import { useOnmsUiHost } from '@/theme/primevue-host'

useOnmsUiHost()
</script>

<template>
	<MainContainer />
</template>

<style>
body {
	padding: 0;
	margin: 0;
	background-color: var(--onms-background);
}
</style>
