<script setup lang="ts">
import MainContainer from '@/containers/MainContainer.vue'
</script>

<template>
	<MainContainer />
</template>

<style>
body {
	padding: 0;
	margin: 0;
	background-color: var(--feather-background);
}

.label-border {
	display: none !important;
}

.feather-input-sub-text {
	display: none !important; /* it add a lot of space under radio group */
}

/* Severity chips keep their fixed light pastel background in both themes, so
   the label must stay dark in both. The color is set on the chip root in
   variables.scss, but FeatherChip's own label element sets a theme text color
   (near-white in dark mode) that beats inheritance — reach the internals with
   a global descendant rule (must live here, not in the scoped blocks). */
.critical-bg:not(.clicked) *,
.major-bg:not(.clicked) *,
.minor-bg:not(.clicked) *,
.warning-bg:not(.clicked) *,
.indeterminate-bg:not(.clicked) *,
.normal-bg:not(.clicked) *,
.cleared-bg:not(.clicked) * {
	color: black !important;
}

/* The severity text/border accents (-color classes) use the saturated light
   palette, which lacks contrast against dark surfaces (#cc0000 on #0a0c1b is
   ~2.4:1). Lift them in dark mode; .open-dark matches the theme class the
   host stamps on <html>/<body>. */
.open-dark .critical-color {
	color: #ff6b6b !important;
	border-color: #ff6b6b !important;
}

.open-dark .major-color {
	color: #ff8a65 !important;
	border-color: #ff8a65 !important;
}

.open-dark .minor-color {
	color: #ffb74d !important;
	border-color: #ffb74d !important;
}

.open-dark .warning-color {
	color: #ffd54f !important;
	border-color: #ffd54f !important;
}

.open-dark .indeterminate-color {
	color: #cdc543 !important;
	border-color: #cdc543 !important;
}

.open-dark .normal-color {
	color: #81c784 !important;
	border-color: #81c784 !important;
}

.open-dark .cleared-color {
	color: #bdbdbd !important;
	border-color: #bdbdbd !important;
}
</style>
