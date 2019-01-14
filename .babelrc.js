module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "8.10",
        },
      },
    ],
  ],

  plugins: [
    // Makes stack traces source-map aware
    "babel-plugin-source-map-support",
    // Necessary to include regardless of the environment because
    // in practice some other transforms (such as object-rest-spread)
    // don't work without it: https://github.com/babel/babel/issues/7215
    "@babel/plugin-transform-destructuring",
    // rest / spread support
    // { ...todo, completed: true }
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        useBuiltIns: true,
      },
    ],
  ],
};
