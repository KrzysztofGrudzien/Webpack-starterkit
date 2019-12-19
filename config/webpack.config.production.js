const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        build: './src/index.js'
    },
    output: {
        filename: 'js/[name].[contenthash:8].js',
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
            template: 'src/templates/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c|)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader',
                {
                    loader: 'postcss-loader', options: {
                        plugins: [
                            require('autoprefixer')
                        ]
                    }
                },
                {
                    loader: 'sass-loader', options: {
                        sourceMap: true
                    }
                }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images',
                    publicPath: '../assets/images'
                }
            }
        ],
    }
}