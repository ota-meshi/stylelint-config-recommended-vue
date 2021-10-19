"use strict"

const recommended = require("stylelint-config-recommended")

// TODO use v6
delete recommended.rules["function-calc-no-invalid"]

module.exports = {
    rules: {
        ...recommended.rules,
    },
    extends: ["stylelint-config-recommended-vue/base"],
}
