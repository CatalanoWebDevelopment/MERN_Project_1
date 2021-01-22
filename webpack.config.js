const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./client/src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  node: {
    fs: "empty",
  },
  plugins: [new Dotenv()],
};