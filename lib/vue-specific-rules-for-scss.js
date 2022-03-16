"use strict"

const getModuleVersion = require("./get-module-version")
const baseRules = require("./vue-specific-rules")
const semver = require("semver")
const stylelintScssVersion =
    getModuleVersion("stylelint-config-recommended-scss", "stylelint-scss") ||
    "4.2.0"

module.exports = {
    ...baseRules,
    ...(baseRules["function-no-unknown"]
        ? { "function-no-unknown": null }
        : {}),
    ...(semver.gte(stylelintScssVersion, "4.2.0")
        ? {
              "scss/function-no-unknown": [
                  true,
                  { ignoreFunctions: ["v-bind"] },
              ],
          }
        : {}),
}
