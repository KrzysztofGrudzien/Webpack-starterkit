const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            'meta': {
                'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                'charset': 'UTF-8',
                'X-UA-Compatible': 'ie=edge',
                'description': 'webpack starter-kit allowing all developers to build theirs projects',
                'robots': 'index, follow',
                'googlebot': 'index, follow'
            },
            'title': 'Webpack Starter-Kit',
            template: 'src/template.html'
        })
    ],
    devServer: {
        open: true
    }
}