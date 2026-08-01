import otaMeshi from "@ota-meshi/eslint-plugin";

export default [
  {
    ignores: [
      ".nyc_output/**",
      "coverage/**",
      "node_modules/**",
      "!.vscode/**",
      "!.github/**",
    ],
  },
  ...otaMeshi.config({
    node: true,
    json: true,
    yaml: true,
    prettier: true,
    ts: false,
  }),
  {
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
  },
  {
    // CommonJS files, including the fixtures that emulate CommonJS consumers.
    files: ["**/*.cjs", "tests/fixtures/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        __dirname: "readonly",
        exports: "writable",
        module: "readonly",
        require: "readonly",
      },
    },
  },
];
