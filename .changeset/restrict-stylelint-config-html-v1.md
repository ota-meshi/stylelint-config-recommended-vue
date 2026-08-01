---
"stylelint-config-recommended-vue": patch
---

Restrict the `stylelint-config-html` dependency to v1. stylelint-config-html v2 is ESM-only and requires Stylelint v16+ and Node.js v22.12+, so installs on the older environments this config still supports were broken.
