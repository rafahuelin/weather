import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

const rules = {
  // Indentation
  "indent": ["error", 2],

  // Quotes
  "quotes": ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],

  // No unused variables
  "no-unused-vars": ["error"],

  // Keyword spacing
  "keyword-spacing": ["error", { "before": true, "after": true }],

  // Space before function parentheses
  "space-before-function-paren": ["error", { "anonymous": "always", "named": "always", "asyncArrow": "always" }],

  // Strict equality
  "eqeqeq": ["error", "always", { "null": "ignore" }],

  // Infix operator spacing
  "space-infix-ops": ["error"],

  // Comma spacing
  "comma-spacing": ["error", { "before": false, "after": true }],

  // Brace style
  "brace-style": ["error", "1tbs", { "allowSingleLine": true }],

  // Curly braces for all control statements
  "curly": ["error", "all"],

  // Handle callback errors
  "handle-callback-err": ["error", "err"],

  // No undefined variables
  "no-undef": ["error"],

  // No multiple empty lines
  "no-multiple-empty-lines": ["error", { "max": 1 }],

  // Operator linebreak
  "operator-linebreak": ["error", "after"],

  // One variable declaration per statement
  "one-var": ["error", "never"],

  // No conditional assignment
  "no-cond-assign": ["error", "always"],

  // Block spacing
  "block-spacing": ["error", "always"],

  // Camelcase naming
  "camelcase": ["error", { "properties": "always" }],

  // No trailing commas
  "comma-dangle": ["error", "always-multiline"],

  // Comma style
  "comma-style": ["error", "last"],

  // Dot location
  "dot-location": ["error", "property"],

  // End of file newline
  "eol-last": ["error", "always"],

  // No space between function name and parentheses
  "func-call-spacing": ["error", "never"],

  // Key spacing
  "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],

  // New capitalization
  "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],

  // New parentheses
  "new-parens": ["error", "always"],

  // Accessor pairs
  "accessor-pairs": ["error", { "getWithoutSet": false, "setWithoutGet": false }],

  // Constructor super
  "constructor-super": ["error"],

  // No array constructor
  "no-array-constructor": ["error"],

  // No caller
  "no-caller": ["error"],

  // No const assign
  "no-const-assign": ["error"],

  // No constant condition
  "no-constant-condition": ["error", { "checkLoops": true }],

  // No control regex
  "no-control-regex": ["error"],

  // No debugger
  "no-debugger": ["error"],

  // No delete var
  "no-delete-var": ["error"],

  // No duplicate args
  "no-dupe-args": ["error"],

  // No duplicate class members
  "no-dupe-class-members": ["error"],

  // No duplicate keys
  "no-dupe-keys": ["error"],

  // No duplicate case
  "no-duplicate-case": ["error"],

  // No duplicate imports
  "no-duplicate-imports": ["error"],

  // No empty character class
  "no-empty-character-class": ["error"],

  // No empty pattern
  "no-empty-pattern": ["error"],

  // No eval
  "no-eval": ["error"],

  // No ex assign
  "no-ex-assign": ["error"],

  // No extend native
  "no-extend-native": ["error"],

  // No extra bind
  "no-extra-bind": ["error"],

  // No extra boolean cast
  "no-extra-boolean-cast": ["error"],

  // No extra parens
  "no-extra-parens": ["error", "functions"],

  // No fallthrough
  "no-fallthrough": ["error"],

  // No floating decimal
  "no-floating-decimal": ["error"],

  // No func assign
  "no-func-assign": ["error"],

  // No global assign
  "no-global-assign": ["error"],

  // No implied eval
  "no-implied-eval": ["error"],

  // No inner declarations
  "no-inner-declarations": ["error"],

  // No invalid regexp
  "no-invalid-regexp": ["error"],

  // No irregular whitespace
  "no-irregular-whitespace": ["error"],

  // No iterator
  "no-iterator": ["error"],

  // No label var
  "no-label-var": ["error"],

  // No labels
  "no-labels": ["error"],

  // No lone blocks
  "no-lone-blocks": ["error"],

  // No mixed spaces and tabs
  "no-mixed-spaces-and-tabs": ["error"],

  // No multi spaces
  "no-multi-spaces": ["error", { "ignoreEOLComments": false }],

  // No multi str
  "no-multi-str": ["error"],

  // No new without assign
  "no-new": ["error"],

  // No new func
  "no-new-func": ["error"],

  // No new object
  "no-new-object": ["error"],

  // No new require
  "no-new-require": ["error"],

  // No new symbol
  "no-new-symbol": ["error"],

  // No new wrappers
  "no-new-wrappers": ["error"],

  // No obj calls
  "no-obj-calls": ["error"],

  // No octal
  "no-octal": ["error"],

  // No octal escape
  "no-octal-escape": ["error"],

  // No path concat
  "no-path-concat": ["error"],

  // No proto
  "no-proto": ["error"],

  // No redeclare
  "no-redeclare": ["error"],

  // No regex spaces
  "no-regex-spaces": ["error"],

  // No return assign
  "no-return-assign": ["error", "always"],

  // No self assign
  "no-self-assign": ["error"],

  // No self compare
  "no-self-compare": ["error"],

  // No sequences
  "no-sequences": ["error"],

  // No shadow restricted names
  "no-shadow-restricted-names": ["error"],

  // No sparse arrays
  "no-sparse-arrays": ["error"],

  // No tabs
  "no-tabs": ["error"],

  // No template curly in string
  "no-template-curly-in-string": ["error"],

  // No this before super
  "no-this-before-super": ["error"],

  // No throw literal
  "no-throw-literal": ["error"],

  // No trailing spaces
  "no-trailing-spaces": ["error"],

  // No undef init
  "no-undef-init": ["error"],

  // No unmodified loop condition
  "no-unmodified-loop-condition": ["error"],

  // No unneeded ternary
  "no-unneeded-ternary": ["error", { "defaultAssignment": false }],

  // No unreachable
  "no-unreachable": ["error"],

  // No unsafe finally
  "no-unsafe-finally": ["error"],

  // No unsafe negation
  "no-unsafe-negation": ["error"],

  // No useless call
  "no-useless-call": ["error"],

  // No useless computed key
  "no-useless-computed-key": ["error"],

  // No useless constructor
  "no-useless-constructor": ["error"],

  // No useless escape
  "no-useless-escape": ["error"],

  // No useless rename
  "no-useless-rename": ["error"],

  // No whitespace before property
  "no-whitespace-before-property": ["error"],

  // Object property newline
  "object-property-newline": ["error"],

  // No padded blocks
  "padded-blocks": ["error", "never"],

  // Rest spread spacing
  "rest-spread-spacing": ["error", "never"],

  // Semi spacing
  "semi-spacing": ["error", { "before": false, "after": true }],

  // Space before blocks
  "space-before-blocks": ["error", "always"],

  // Space in parens
  "space-in-parens": ["error", "never"],

  // Space unary ops
  "space-unary-ops": ["error", { "words": true, "nonwords": false }],

  // Spaced comments
  "spaced-comment": ["error", "always"],

  // Template curly spacing
  "template-curly-spacing": ["error", "never"],

  // Use isNaN
  "use-isnan": ["error", { "enforceForSwitchCase": true }],

  // Valid typeof
  "valid-typeof": ["error"],

  // Wrap IIFE
  "wrap-iife": ["error", "any"],

  // Yield star spacing
  "yield-star-spacing": ["error", "both"],

  // Yoda conditions
  "yoda": ["error", "never"],

  // Never semi-colon at end of line
  "semi": ["error", "never"],
};

export default [
  js.configs.recommended,
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tsParser,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...reactHooks.configs.recommended.rules,
      ...rules,
    },
  },
];
