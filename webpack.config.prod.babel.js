import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'
import ParallelUglifyPlugin from 'webpack-parallel-uglify-plugin'
import HappyPack from 'happypack'
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
        vendor: ['react', 'react-dom','immutable','redux','redux-thunk','react-redux','react-router-dom','isomorphic-fetch','react-transition-group','qs','prop-types'],
        index: './dev/js/index.js'
    },
    module: {
        loaders: [
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
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkHash:16].js',
        chunkFilename : 'js/[name]-[chunkHash:16].js'
    },
    plugins: [
        new HappyPack({
            // loaders is the only required parameter:
            loaders: [ 'babel-loader' ],
            // customize as needed, see Configuration below
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor',
            fileName:'vendor-[chunkHash:16]',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            title: Title,
            template: 'dev/index.html',
            filename: 'index.html',
            inject: 'body',
            chunks: ['index','vendor']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new ParallelUglifyPlugin({
            // Optional regex, or array of regex to match file against. Only matching files get minified.
            // Defaults to /.js$/, any file ending in .js.
            test:/.js$/,
            include:'', // Optional regex, or array of regex to include in minification. Only matching files get minified.
            exclude:'', // Optional regex, or array of regex to exclude from minification. Matching files are not minified.
            cacheDir:'./.uglifycache', // Optional absolute path to use as a cache. If not provided, caching will not be used.
            workerCount:-1, // Optional int. Number of workers to run uglify. Defaults to num of cpus - 1 or asset count (whichever is smaller)
            uglifyJS: {
                // These pass straight through to uglify.
            },
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),*/
       /* new webpack.ProvidePlugin({
            React: 'react'
        }),*
        /*new CompressionPlugin({
            asset: '[path]',
            algorithm: 'gzip',
            test: /\.(js|html)$/,
            threshold: 10240,
            minRatio: 0.8
        })*/
    ]
}
export default Module
