const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  // No other higher level config allowed
  root: true,
  // use babel as parser
  parser: "babel-eslint",
  // This set of linter rules is somewhat strict,
  // but it keeps code really consistent.
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],

  env: {
    node: true,
    es6: true,
  },

  // check if imports actually resolve
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js",
      },
    },
  },

  overrides: [
    {
      files: "*.spec.js",
      env: {
        jest: true,
      },
    },
  ],

  rules: {
    // console is OK
    "no-console": "off",
    // Allow debugger during development
    "no-debugger": isProduction ? 2 : 1,
    // Don't require .js extension when importing
    "import/extensions": ["error", "always", { js: "never" }],
    // AWS lamda functions do not want default export
    "import/prefer-default-export": "off",
  },
};
