const mode = "development";
process.env.NODE_ENV = mode;

const { merge } = require("webpack-merge");
const path = require("path");
const common = require(path.resolve("build", "webpack", "common.config.js"));
const config = require(path.resolve("config", "dev"));

module.exports = merge(common({ config }), {
  mode,
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve("dist"),
    compress: true,
    port: 9000
  }
});
