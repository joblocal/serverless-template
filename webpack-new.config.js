const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

const resolve = file => path.resolve(__dirname, file);

module.exports = {
  context: __dirname,
  target: "node",
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  devtool: "source-map",
  externals: [nodeExternals()],

  entry: slsw.lib.entries,

  output: {
    libraryTarget: "commonjs2",
    path: resolve("dist"),
    filename: "[name].js",
  },

  resolve: {
    extensions: [".js", ".json"],
    alias: {
      src: resolve("src"),
    },
  },

  optimization: {
    minimize: false,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
