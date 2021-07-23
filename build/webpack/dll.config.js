const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  mode: "production",
  entry: {
    dll: ["react", "react-dom"]
  },
  output: {
    path: path.resolve("dist", "dll"),
    filename: "[version].dll.js",
    library: "[name]_library"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          format: {
            comments: false // 删除注释
          },
          compress: {
            pure_funcs: ["console.log"] // 删除Log
          }
        },
        extractComments: false
      })
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.resolve("dist", "dll"),
      path: path.resolve("dist", "manifest.json"),
      name: "[name]_library"
    })
  ]
};
