var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + '/',
    entry: {
        app: './src/index.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/build',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( { name: "vendor", filename: "vendor.bundle.js" }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false
        }),
        new ExtractTextPlugin({
            filename: 'bundle.css'
        })
    ],
    devServer: {
        host: '0.0.0.0',
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!autoprefixer-loader!sass-loader'
                })
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'src'),
                    path.resolve(__dirname, 'node_modules/angular-material/'),
                    path.resolve(__dirname, 'node_modules/material-design-icons/iconfont')
                ],
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: [
                    path.resolve(__dirname, 'node_modules/material-design-icons/iconfont')
                ],
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: [
                    path.resolve(__dirname, 'node_modules/material-design-icons/iconfont')
                ],
                loader: "file-loader"
            }
        ]
    },
};
