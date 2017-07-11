import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const Title = 'framework'

const Module = {
    //不打包的基本库，可以做CDN加速
    /* externals: {
     'react': 'window.React',
     'react-dom': 'window.ReactDOM',
     'redux':'window.Redux',
     'react-redux':'window.ReactRedux'
     },*/
    entry: {
        index: './dev/js/index.js'
        /* ,vendor: ['react', 'react-dom', 'react-router','redux','react-redux']*/
    },
    module: {
        loaders: [
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
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[chunkHash:32].js',
        chunkFilename : 'js/[chunkHash:32].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: Title,
            template: 'dev/index.html',
            filename: 'index.html',
            inject: 'body',
            chunks: ['index']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        /*//生成公共文件
        new webpack.optimize.CommonsChunkPlugin({
            name:'index', // 上面入口定义的节点组
            filename:'./js/bundle.login.js' //最后生成的文件名
        }),*/
        new webpack.ProvidePlugin({
            React: 'react'
        })//解决不用CDN的全打包状态下丢失全局变量window.React问题
    ]
}
export default Module
