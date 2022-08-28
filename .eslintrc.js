module.exports = {
  extends: ["next", "plugin:@typescript-eslint/recommended", "prettier"],
  plugins: ["@typescript-eslint", "simple-import-sort", "import"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
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
