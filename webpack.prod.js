const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./client/build/index.html",
  mode: "production",
  output: {
    filename: "index.html",
    path: path.resolve(__dirname, 'client', 'build', 'index.html'),
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {},
    }),
  ],
};