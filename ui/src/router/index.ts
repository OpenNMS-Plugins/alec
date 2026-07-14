import { createRouter, createWebHistory, Router } from 'vue-router'
import SituationList from '@/containers/SituationList.vue'
import SituationDetail from '@/containers/SituationDetail.vue'
import AddSituation from '@/containers/AddSituation.vue'

import ErrorPage from '@/components/ErrorPage.vue'
import ViewUnassignedAlarms from '@/containers/ViewUnassignedAlarms.vue'
import AccountSettings from '@/containers/AccountSettings.vue'

import { useUserStore } from '@/store/useUserStore'
import { ROUTE } from '@/router/routeNames'

const checkUser = async () => {
	const userStore = useUserStore()
	if (!userStore.userId) {
		await userStore.getUserRole()
	}
}

const routes = [
	{
		path: '/',
		name: ROUTE.home,
		beforeEnter: async (to: any) => {
			const r = (window as any).VRouter || router
			const userStore = useUserStore()
			await userStore.getUserRole()
			r.push({ name: ROUTE.situations, params: to.params })
		},
		component: {}
	},
	{
		path: '/situations',
		name: ROUTE.situations,
		beforeEnter: () => checkUser(),
		component: SituationList
	},
	{
		path: '/situations/:id',
		name: ROUTE.situationDetail,
		component: SituationDetail
	},
	{
		path: '/situations/add',
		name: ROUTE.addSituation,
		component: AddSituation
	},
	{
		path: '/error',
		name: ROUTE.error,
		component: ErrorPage
	},
	{
		path: '/situations/view-unassigned-alarms',
		name: ROUTE.viewUnassignedAlarms,
		component: ViewUnassignedAlarms
	},
	{
		path: '/settings',
		name: ROUTE.settings,
		beforeEnter: async () => {
			const userStore = useUserStore()
			await userStore.getEngineInfo()
		},
		component: AccountSettings
	}
]

const VRouter: Router = (window as any).VRouter

if (VRouter) {
	// Parent route should be in form 'Plugin-{extensionId}'
	// and 'extensionId' must match 'id' value in blueprint.xml
	const alecParentRoute = 'Plugin-alecUiExtension'
	const parentRoute = VRouter.hasRoute(alecParentRoute)
		? alecParentRoute
		: 'Plugin'

	for (const route of routes) {
		const { path, name, component, beforeEnter } = route
		VRouter.addRoute(parentRoute, {
			path: path.slice(1),
			name,
			component,
			beforeEnter
		})
	}
}

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
