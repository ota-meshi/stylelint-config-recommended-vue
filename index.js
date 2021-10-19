"use strict"

module.exports = {
    overrides: [
        {
            files: ["*.vue", "**/*.vue"],
            extends: ["stylelint-config-recommended", "stylelint-config-html"],
            rules: {
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
