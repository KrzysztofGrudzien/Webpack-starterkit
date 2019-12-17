const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        build: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}