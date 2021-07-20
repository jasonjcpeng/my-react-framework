const merge = require("webpack-merge");
const path = require("path");
const common = require(path.resolve("./build/webpack/common.config.js"));

module.exports = merge(common, {});
