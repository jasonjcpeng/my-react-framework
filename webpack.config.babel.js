import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HappyPack from 'happypack'
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
    resolve:{
        alias: {
            "api":path.resolve(__dirname,'dev/js/api/api.js'),
            "ARC":path.resolve(__dirname,'dev/js/_tools/action-and-reducer-creator'),
            "ALC":path.resolve(__dirname,'dev/js/_tools/async-load-component'),
            "HOC":path.resolve(__dirname,'dev/js/_tools/high-order-components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['happypack/loader'],
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
        new HappyPack({
            // loaders is the only required parameter:
            loaders: [ 'babel-loader' ],
            // customize as needed, see Configuration below
        }),
        new HtmlWebpackPlugin({
            title: Title,
            template: 'dev/index.html',
            filename: 'index.html',
            inject: 'body',
            chunks: ['index']
        })
         /*//生成公共文件
        new webpack.optimize.CommonsChunkPlugin({
         name:'vendor-[chunkHash:16]',
         minChunks: Infinity,
         }),*/
    ]
}

export default Module
