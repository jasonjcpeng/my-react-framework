const { merge } = require("webpack-merge");
const DllReferencePlugin = require("webpack").DllReferencePlugin;
const path = require("path");
const common = require(path.resolve("build", "webpack", "common.config.js"));
const config = require(path.resolve("config", "pro"));
const commonConfig = common({ config });

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve("dist"),
    publicPath: undefined // CDN地址
  },
  plugins: [
    new DllReferencePlugin({
      context: path.resolve("dist", "dll"),
      manifest: path.resolve("dist", "manifest.json") // eslint-disable-line
    })
  ]
});
