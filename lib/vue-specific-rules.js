"use strict"

const getModuleVersion = require("./get-module-version")
const semver = require("semver")
const stylelintVersion = getModuleVersion("stylelint") || "14.5.0"

module.exports = {
    "selector-pseudo-class-no-unknown": [
        true,
        {
            ignorePseudoClasses: ["deep", "global"],
        },
    ],
    "selector-pseudo-element-no-unknown": [
        true,
        {
            ignorePseudoElements: ["v-deep", "v-global", "v-slotted"],
        },
    ],
    ...(semver.gte(stylelintVersion, "14.5.0")
        ? {
              "function-no-unknown": [true, { ignoreFunctions: ["v-bind"] }],
          }
        : semver.gte(stylelintVersion, "14.4.0")
        ? {
              "function-no-unknown": null,
          }
        : {}),
}
