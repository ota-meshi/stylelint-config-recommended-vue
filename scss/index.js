import vueSpecificRulesForScss from "../lib/vue-specific-rules-for-scss.js";

const config = {
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: ["stylelint-config-recommended-scss", "stylelint-config-html"],
      rules: vueSpecificRulesForScss,
    },
  ],
};

export default config;
export { config as "module.exports" };
