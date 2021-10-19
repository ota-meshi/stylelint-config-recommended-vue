# stylelint-config-recommended-vue

[![NPM license](https://img.shields.io/npm/l/stylelint-config-recommended-vue.svg)](https://www.npmjs.com/package/stylelint-config-recommended-vue)
[![NPM version](https://img.shields.io/npm/v/stylelint-config-recommended-vue.svg)](https://www.npmjs.com/package/stylelint-config-recommended-vue)
[![NPM downloads](https://img.shields.io/npm/dw/stylelint-config-recommended-vue.svg)](http://www.npmtrends.com/stylelint-config-recommended-vue)
[![NPM downloads](https://img.shields.io/npm/dm/stylelint-config-recommended-vue.svg)](http://www.npmtrends.com/stylelint-config-recommended-vue)
[![Build Status](https://github.com/ota-meshi/stylelint-config-recommended-vue/workflows/CI/badge.svg?branch=main)](https://github.com/ota-meshi/stylelint-config-recommended-vue/actions?query=workflow%3ACI)

> The recommended shareable Vue config for stylelint.

This config:

- extends the [`stylelint-config-recommended` shared config](https://github.com/stylelint/stylelint-config-recommended) and configures its rules for Vue
- bundles the [`postcss-html` custom syntax](https://github.com/ota-meshi/postcss-html) and configures it

To see the rules that this config uses, please read the [config itself](/index.js).

## :cd: Installation

```shell
npm install --save-dev stylelint-config-recommended-vue
```

## :book: Usage

Set your `stylelint` config to:

```json
{
    "extends": "stylelint-config-recommended-vue"
}
```

Note: This config enables rules for only `.vue` files.

If you don't want the rules to be overridden, use the `/base` config.
(If you want to enable only the parser.)

```json
{
    "extends": "stylelint-config-recommended-vue/base"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to add the `unit-allowed-list` rule:

```json
{
    "extends": "stylelint-config-recommended-vue",
    "overrides": [
        {
            "files": ["*.vue", "**/*.vue"],
            "rules": {
                "unit-allowed-list": ["em", "rem", "s"]
            }
        }
    ]
}
```

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
