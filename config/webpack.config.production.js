const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        build: './src/index.js'
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../', 'dist')
    }
}