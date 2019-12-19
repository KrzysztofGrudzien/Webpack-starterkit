const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        build: './src/index.js'
    },
    output: {
        filename: 'js/[name].js',
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
            filename: 'css/[name].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c|)ss$/,
                use: ['style-loader', 'css-loader',
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
        ],
    },
    devServer: {
        open: true,
        contentBase: path.resolve(__dirname, '../', 'public')
    }
}