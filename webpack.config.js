const path = require('path');

module.exports = {
    entry: __dirname + '/src',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    devtool: 'source-maps',
    module: {
        loaders: [/*
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transforms-class-properties']
                }
            }
        */]
    }
}