const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

const resolve = file => path.resolve(__dirname, file);

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  node: {
    __dirname: true,
  },
  devtool: "source-map",
  externals: [
    nodeExternals(),
    nodeExternals({
      modulesDir: resolve('../../node_modules'),
    }),
  ],

  entry: slsw.lib.entries,

  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      src: resolve('src'),
    },
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
};
