---
"stylelint-config-recommended-vue": major
---

Move `stylelint-config-recommended` and `stylelint-config-html` from dependencies to peer dependencies, so that their versions are controlled by your project instead of always resolving to the latest release ([#68](https://github.com/ota-meshi/stylelint-config-recommended-vue/issues/68)). The `stylelint-config-recommended-scss` config used by the `/scss` entry is now declared as an optional peer dependency.
