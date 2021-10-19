"use strict"

const recommended = require("stylelint-config-recommended")

// TODO use v6
delete recommended.rules["function-calc-no-invalid"]
module.exports = {
    overrides: [
        {
            files: ["*.vue", "**/*.vue"],
            customSyntax: "postcss-html",
            // We cannot use `extends` in `overrides` now
            // extends: ["stylelint-config-recommended"],
            rules: {
                ...recommended.rules,
            },
        },
    ],
}
