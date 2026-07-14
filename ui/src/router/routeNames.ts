// Canonical ALEC route names.
//
// When ALEC's UI runs embedded in OpenNMS, its routes are injected into the
// host application's shared Vue Router (window.VRouter). Vue Router requires
// route names to be globally unique, and adding a duplicate name EVICTS the
// existing route. Bare names like 'home' or 'settings' therefore collide with
// the host app (which owns 'home') and with any other co-installed UI plugin —
// silently breaking navigation on a fresh page load (ALEC-304).
//
// Every ALEC route name is prefixed with `alec-` so it can never clobber, or be
// clobbered by, a route owned by the host or another plugin. This is the single
// source of truth: the router and every `router.push({ name })` / route-link
// reference must use these constants, never a string literal.
export const ROUTE_PREFIX = 'alec-'

export const ROUTE = {
	home: `${ROUTE_PREFIX}home`,
	situations: `${ROUTE_PREFIX}situations`,
	situationDetail: `${ROUTE_PREFIX}situationDetail`,
	addSituation: `${ROUTE_PREFIX}addSituation`,
	error: `${ROUTE_PREFIX}error`,
	viewUnassignedAlarms: `${ROUTE_PREFIX}viewUnassignedAlarms`,
	settings: `${ROUTE_PREFIX}settings`
} as const

export type RouteName = (typeof ROUTE)[keyof typeof ROUTE]
