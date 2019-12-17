const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        build: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../', 'dist')
    }
}