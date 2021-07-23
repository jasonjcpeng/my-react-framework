const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  splitChunks: {
    chunks: "all",
    minSize: 10000,
    maxSize: 50000,
    minChunks: 1,
    maxAsyncRequests: 5, // 同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
    maxInitialRequests: 3, // 首页加载的时候引入的文件最多3个
    automaticNameDelimiter: "~",
    name: false
  },
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
};
