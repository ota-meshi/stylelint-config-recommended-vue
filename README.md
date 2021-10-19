# stylelint-config-recommended-vue

> The recommended shareable Vue config for stylelint.

It turns on all the [_possible errors_](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules/list.md#possible-errors) rules within stylelint.

Use it as is or as a foundation for your own config.

## Installation

First, install stylelint, if you haven't done so yet via npm:

```shell
npm install stylelint --save-dev
```

and then you can install the config:

```shell
npm install stylelint-config-recommended-vue --save-dev
```

## Usage

If you've installed `stylelint-config-recommended-vue` locally within your project, just set your `stylelint` config to:

```json
{
  "extends": "stylelint-config-recommended-vue"
}
```

If you've globally installed `stylelint-config-recommended-vue` using the `-g` flag, then you'll need to use the absolute path to `stylelint-config-recommended-vue` in your config e.g.

```json
{
  "extends": "/absolute/path/to/stylelint-config-recommended-vue"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `block-no-empty` rule, and add the `unit-whitelist` rule:

```json
{
  "extends": "stylelint-config-recommended-vue",
  "rules": {
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## :lock: License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).
