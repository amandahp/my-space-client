module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "consistent-return": "off",
    "no-console": "off",
    "func-names": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    sole: "off",
  },
};
