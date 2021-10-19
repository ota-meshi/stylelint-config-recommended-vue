"use strict"

const recommended = require("stylelint-config-recommended")

// TODO use v6
delete recommended.rules["function-calc-no-invalid"]
module.exports = {
    extends: [require.resolve("./base.js")],
    overrides: [
        {
            files: ["*.vue", "**/*.vue"],
            // We cannot use `extends` in `overrides` now
            // extends: ["stylelint-config-recommended"],
            rules: {
                ...recommended.rules,
                "selector-pseudo-class-no-unknown": [
                    true,
                    {
                        ignorePseudoClasses: ["deep", "global"],
                    },
                ],
                "selector-pseudo-element-no-unknown": [
                    true,
                    {
                        ignorePseudoElements: [
                            "v-deep",
                            "v-global",
                            "v-slotted",
                        ],
                    },
                ],
            },
        },
    ],
}
