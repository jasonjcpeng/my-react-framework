import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const Title = 'framework'

const Module = {
    //不打包的库并引向全局变量
    /*externals: {
     'react': 'window.React',
     },*/
    devServer: {
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        },
        inline: true,
        contentBase: './dev',
        port: 3003
    },
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: './dev/js/index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.(ttf|jpg|gif|png)$/,
                loader: 'file-loader?name=src/[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[chunkHash:32].js',
        chunkFilename : 'js/[name]-[id].js'

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: Title,
            template: 'dev/index.html',
            filename: 'index.html',
            inject: 'body',
            chunks: ['index']
        }),
       /*  //生成公共文件
        new webpack.optimize.CommonsChunkPlugin({
         name:'vendor',
         minChunks: Infinity,
         }),*/
    ]
}

export default Module
