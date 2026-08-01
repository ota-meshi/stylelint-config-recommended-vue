---
"stylelint-config-recommended-vue": major
---

Migrate the package to ESM. On the supported Node.js versions, the configs can still be loaded from CommonJS via `require()`. The package now also defines an `exports` field; the `/scss` deep import keeps working both with and without the `/index.js` suffix.
