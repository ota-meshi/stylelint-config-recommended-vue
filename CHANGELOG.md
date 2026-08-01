# stylelint-config-recommended-vue

## 2.0.0

### Major Changes

- [#120](https://github.com/ota-meshi/stylelint-config-recommended-vue/pull/120) [`ad9d8a4`](https://github.com/ota-meshi/stylelint-config-recommended-vue/commit/ad9d8a493274fb2bfce0d1566f9ce93f181fc810) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Drop support for old Node.js versions. Node.js `^22.12 || >=24` is now required.

- [#125](https://github.com/ota-meshi/stylelint-config-recommended-vue/pull/125) [`701f17a`](https://github.com/ota-meshi/stylelint-config-recommended-vue/commit/701f17a6d91d188bbbb15db4035c9e46581b7e85) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Migrate the package to ESM. On the supported Node.js versions, the configs can still be loaded from CommonJS via `require()`. The package now also defines an `exports` field; the `/scss` deep import keeps working both with and without the `/index.js` suffix.

- [#124](https://github.com/ota-meshi/stylelint-config-recommended-vue/pull/124) [`b3a363c`](https://github.com/ota-meshi/stylelint-config-recommended-vue/commit/b3a363c842eec8a7b6c380d7031eec244886fb2d) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Move `stylelint-config-recommended` and `stylelint-config-html` from dependencies to peer dependencies, so that their versions are controlled by your project instead of always resolving to the latest release ([#68](https://github.com/ota-meshi/stylelint-config-recommended-vue/issues/68)). The `stylelint-config-recommended-scss` config used by the `/scss` entry is now declared as an optional peer dependency.

- [#123](https://github.com/ota-meshi/stylelint-config-recommended-vue/pull/123) [`a12a429`](https://github.com/ota-meshi/stylelint-config-recommended-vue/commit/a12a429bcb10899668bf925a7b9d8820aa268fe2) Thanks [@ota-meshi](https://github.com/ota-meshi)! - Update peer dependencies: `postcss-html` now requires `^2.0.0`, and `stylelint` now requires `>=16.0.0`. The `stylelint-config-html` dependency was also updated to require v2.

## 1.6.1

### Patch Changes

- [#90](https://github.com/ota-meshi/stylelint-config-recommended-vue/pull/90) [`9ca4747`](https://github.com/ota-meshi/stylelint-config-recommended-vue/commit/9ca47470d47fca4d669771d502b6ec191efeb242) Thanks [@Lumirelle](https://github.com/Lumirelle)! - Disable declaration-property-value-no-unknown rule for SCSS

## 1.6.0

### Minor Changes

- [#84](https://github.com/ota-meshi/stylelint-config-recommended-vue/pull/84) [`eb2285f`](https://github.com/ota-meshi/stylelint-config-recommended-vue/commit/eb2285faf755f02cadb2b0765c949cdbb9ee10be) Thanks [@madogiwa0124](https://github.com/madogiwa0124)! - Update stylelint-config-recommended to v15 to support Stylelint v16.13.
