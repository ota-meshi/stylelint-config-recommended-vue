"use strict";

const otaMeshi = require("@ota-meshi/eslint-plugin");

module.exports = [
  {
    ignores: [
      ".nyc_output/**",
      "coverage/**",
      "node_modules/**",
      "!.vscode/**",
      "!.github/**",
    ],
  },
  ...otaMeshi.config({
    node: true,
    json: true,
    yaml: true,
    prettier: true,
    ts: false,
  }),
  {
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: 2020,
    },
  },
];
