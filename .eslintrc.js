"use strict";

module.exports = {
  parserOptions: {
    sourceType: "script",
    ecmaVersion: 2020,
  },
  extends: [
    "plugin:@ota-meshi/recommended",
    "plugin:@ota-meshi/+node",
    "plugin:@ota-meshi/+json",
    "plugin:@ota-meshi/+yaml",
    "plugin:@ota-meshi/+prettier",
  ],
};
