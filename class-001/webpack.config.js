var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        "./src/00_scope.js",
        "./src/01_context.js",
        "./src/02_scope.js",
        "./src/03_const.js"
    ],
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};
