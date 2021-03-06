const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        build: './src/index.js'
    },
    output: {
        filename: 'js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    devtool: 'source-map',
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
        new CopyPlugin([
            { from: 'public/images', to: 'assets/images' }
        ]),
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
                use: [
                    {
                        loader: 'file-loader', options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images',
                            publicPath: '../assets/images'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ],
    }
}