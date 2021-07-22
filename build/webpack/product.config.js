const { merge } = require("webpack-merge");
const path = require("path");
const common = require(path.resolve("./build/webpack/common.config.js"));
const config = require(path.resolve("./config/pro"));

module.exports = merge(common({ config }), {
  mode: "production"
});
