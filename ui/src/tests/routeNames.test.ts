import { test, expect } from 'vitest'
import { ROUTE, ROUTE_PREFIX } from '@/router/routeNames'
import router from '@/router'

// ALEC-304: ALEC injects its routes into the host OpenNMS app's shared Vue
// Router (window.VRouter). Vue Router names are global and a duplicate EVICTS
// the existing route, so a bare name like 'home' would clobber the host app.
// Every ALEC route name must stay namespaced.

test('every ROUTE constant is namespaced with the alec- prefix', () => {
	for (const name of Object.values(ROUTE)) {
		expect(name.startsWith(ROUTE_PREFIX)).toBe(true)
	}
})

test('the router registers only namespaced route names (guards future additions)', () => {
	const names = router
		.getRoutes()
		.map((r) => r.name)
		.filter((n): n is string => typeof n === 'string')

	expect(names.length).toBeGreaterThan(0)
	for (const name of names) {
		expect(name.startsWith(ROUTE_PREFIX)).toBe(true)
	}
})

test('no two ALEC routes share a name', () => {
	const names = Object.values(ROUTE)
	expect(new Set(names).size).toBe(names.length)
})
