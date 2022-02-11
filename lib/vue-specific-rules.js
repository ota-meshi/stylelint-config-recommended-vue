"use strict"

const path = require("path")
const semver = require("semver")
let stylelintVersion = null
try {
    const m = require("module")
    const cwd = process.cwd()
    const relativeTo = path.join(cwd, "__placeholder__.js")
    // eslint-disable-next-line node/no-unsupported-features/node-builtins -- ignore
    stylelintVersion = m.createRequire(relativeTo)(
        "stylelint/package.json",
    ).version
} catch {
    // ignore
}
if (stylelintVersion == null) {
    try {
        stylelintVersion = require("stylelint/package.json").version
    } catch {
        // ignore
    }
}
if (stylelintVersion == null) {
    stylelintVersion = "14.5.0"
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
