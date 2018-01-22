const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'es2015'],
                },
            },
        ],
    },
    entry: './src/contentscript.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
    ],
    devtool: 'source-map',
    output: {
        filename: 'contentscript.js',
        path: path.resolve(__dirname, 'dist')
    }
};