"use strict"

const semver = require("semver")
let stylelintVersion = "14.4.0"
try {
    stylelintVersion = require("stylelint/package.json").version
} catch {
    // ignore
}

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
    ...(semver.gte(stylelintVersion, "14.4.0")
        ? {
              "function-no-unknown": null,
          }
        : {}),
}
