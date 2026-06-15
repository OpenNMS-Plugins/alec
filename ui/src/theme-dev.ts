// Dev-only Feather theme loader.
//
// The OpenNMS host shell provides the active Feather theme (light or dark) to
// the deployed UI extension, so `main.ts` intentionally does not import one.
// The standalone dev server (vite --config vite.config.dev.ts) has no host, so
// it would render with undefined --feather-* variables. This file supplies a
// theme for dev only; it is referenced from index.html (used by the dev server)
// and is NOT imported by main.ts, so it is never bundled into the extension.
//
// Swap to open-dark.css here to preview the plugin in dark mode locally.
import '@featherds/styles/themes/open-light.css'
