const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = (payload) => {
  return [
    new HtmlWebpackPlugin({
      filename: "index.html",
      dll: "dll/dll.dll.js",
      template: path.resolve("src", "template", "index.html")
    }),
    new webpack.DefinePlugin(
      (() => {
        const result = {};
        const configer = payload.config;
        for (const key in configer) {
          result[key] = JSON.stringify(configer[key]);
        }
        return result;
      })()
    )
  ];
};
