import vueSpecificRules from "./vue-specific-rules.js";

const config = {
  overrides: [
    {
      files: ["*.vue", "**/*.vue"],
      extends: ["stylelint-config-recommended", "stylelint-config-html"],
      rules: vueSpecificRules,
    },
  ],
};

export default config;
export { config as "module.exports" };
