const path = require("path");
const webpack = require("webpack");

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
    filename: "[name].dll.js",
    library: "[name]_library"
  },
  plugins: [
    new webpack.DllPlugin({
      context: path.resolve("dist", "dll"),
      path: path.resolve("dist", "manifest.json"),
      name: "[name]_library"
    })
  ]
};
