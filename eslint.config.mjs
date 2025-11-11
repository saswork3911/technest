import { defineConfig, globalIgnores } from "eslint/config";
import { FlatCompat } from "@eslint/eslintrc";

/**
 * Bridge old-style "extends" configs (like eslint-config-next) into ESLint v9 flat config.
 */
const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

export default defineConfig([
  // Next.js recommended + Core Web Vitals using compat
  ...compat.extends("eslint-config-next"),
  ...compat.extends("eslint-config-next/core-web-vitals"),

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);
