# stylelint-config-recommended-vue

[![NPM license](https://img.shields.io/npm/l/stylelint-config-recommended-vue.svg)](https://www.npmjs.com/package/stylelint-config-recommended-vue)
[![NPM version](https://img.shields.io/npm/v/stylelint-config-recommended-vue.svg)](https://www.npmjs.com/package/stylelint-config-recommended-vue)
[![NPM downloads](https://img.shields.io/npm/dw/stylelint-config-recommended-vue.svg)](http://www.npmtrends.com/stylelint-config-recommended-vue)
[![NPM downloads](https://img.shields.io/npm/dm/stylelint-config-recommended-vue.svg)](http://www.npmtrends.com/stylelint-config-recommended-vue)
[![Build Status](https://github.com/ota-meshi/stylelint-config-recommended-vue/workflows/CI/badge.svg?branch=main)](https://github.com/ota-meshi/stylelint-config-recommended-vue/actions?query=workflow%3ACI)

> The recommended shareable Vue config for stylelint.

It turns on all the [_possible errors_](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules/list.md#possible-errors) rules within stylelint.

Use it as is or as a foundation for your own config.

## :cd: Installation

First, install stylelint, if you haven't done so yet via npm:

```shell
npm install stylelint --save-dev
```

and then you can install the config:

```shell
npm install stylelint-config-recommended-vue --save-dev
```

## :book: Usage

If you've installed `stylelint-config-recommended-vue` locally within your project, just set your `stylelint` config to:

```json
{
    "extends": "stylelint-config-recommended-vue"
}
```

Note: This configuration enables rules for only `.vue` files.

If you've globally installed `stylelint-config-recommended-vue` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-recommended-vue` in your config e.g.

```json
{
    "extends": "/absolute/path/to/stylelint-config-recommended-vue"
}
```

### Extending the config

If you don't want the rules to be overridden, use the `base` configuration.
(If you want to enable only the parser.)

```json
{
    "extends": "stylelint-config-recommended-vue/base"
}
```

---

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
