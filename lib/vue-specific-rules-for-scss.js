import baseRules from "./vue-specific-rules.js";

const rules = {
  ...baseRules,
  ...(baseRules["function-no-unknown"] ? { "function-no-unknown": null } : {}),
  ...(baseRules["declaration-property-value-no-unknown"]
    ? { "declaration-property-value-no-unknown": null }
    : {}),
};

export default rules;
