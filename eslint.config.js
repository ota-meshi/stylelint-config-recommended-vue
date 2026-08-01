import { defineConfig } from "eslint/config";
import myPlugin from "@ota-meshi/eslint-plugin";

export default defineConfig([
  {
    extends: [
      myPlugin.config({
        node: true,
        json: true,
        packageJson: true,
        yaml: true,
        prettier: true,
      }),
    ],
  },
  {
    // CommonJS files, including the fixtures that emulate CommonJS consumers.
    files: ["**/*.cjs", "tests/fixtures/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        exports: "writable",
        module: "readonly",
        require: "readonly",
      },
    },
  },
  {
    ignores: [".nyc_output/", "coverage/"],
  },
]);
