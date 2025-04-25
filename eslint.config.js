import json from "@eslint/json";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import qwik from "eslint-plugin-qwik";

export default defineConfig([
  { ignores: ["**/*.js", "**/*.cjs", "**/*.mjs"] },
  {
    plugins: {
      qwik,
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);

