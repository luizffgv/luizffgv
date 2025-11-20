import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],

    extends: fixupConfigRules([
      ...compat.extends(
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:jsx-a11y/strict",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:sonarjs/recommended-legacy",
      ),
      eslintPluginUnicorn.configs.all,
    ]),

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "script",

      parserOptions: {
        project: "./tsconfig.json",
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "arrow-body-style": ["error", "as-needed"],
      "class-methods-use-this": "warn",
      curly: "warn",
      "dot-notation": "error",

      eqeqeq: [
        "error",
        "always",
        {
          null: "ignore",
        },
      ],

      "no-array-constructor": "error",

      "no-console": [
        "error",
        {
          allow: ["warn", "error"],
        },
      ],

      "no-constructor-return": "error",
      "no-duplicate-imports": "warn",
      "no-implicit-coercion": "error",
      "no-lone-blocks": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-template-curly-in-string": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "no-unused-expressions": "error",
      "no-use-before-define": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-rename": "error",
      "no-var": "error",
      "object-shorthand": ["error", "always"],
      "one-var": ["error", "never"],
      "prefer-const": "error",
      "prefer-numeric-literals": "error",
      "prefer-template": "error",
      "require-await": "error",
      "sort-imports": "off",
      "@next/next/no-img-element": "off",

      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
        },
      ],

      "@typescript-eslint/no-invalid-void-type": [
        "error",
        {
          allowAsThisParameter: true,
        },
      ],
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowAny: true,
          allowBoolean: false,
          allowNullish: false,
          allowNumber: true,
          allowRegExp: false,
        },
      ],

      "react/hook-use-state": "warn",
      "react/jsx-handler-names": "warn",
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",

      "react-hooks/set-state-in-effect": "warn",

      "sonarjs/no-duplicate-string": [
        "error",
        {
          ignoreStrings: "aria-label",
        },
      ],

      "unicorn/no-array-reduce": "warn",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/no-null": "off",
      "unicorn/no-nested-ternary": "off",

      "unicorn/numeric-separators-style": [
        "error",
        {
          onlyIfContainsSeparator: true,
        },
      ],

      "unicorn/prefer-global-this": "off",

      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            ctx: {
              context: false,
            },

            params: {
              parameters: false,
            },

            props: {
              properties: false,
            },

            ref: {
              reference: false,
            },

            utils: {
              utilities: false,
            },
          },
        },
      ],
    },
  },
  {
    files: ["**/*.test.tsx"],

    rules: {
      "@typescript-eslint/no-floating-promises": "off",
    },
  },
]);
