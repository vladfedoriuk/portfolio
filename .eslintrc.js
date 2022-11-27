// https://github.com/lydell/eslint-plugin-simple-import-sort
module.exports = {
  extends: ["next", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint", "simple-import-sort", "import"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  settings: {
    next: {
      rootDir: "apps/front/",
    },
  },
  root: true,
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "import/no-anonymous-default-export": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
