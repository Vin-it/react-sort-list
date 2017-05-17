const path = require('path');

module.exports = {
    entry: [
        './src/SortableItem.js'
    ],
    output: {
        path: path.resolve('lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'ReactComponentNpm'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/' },
            { test: /\.css$/, loader: ['style-loader', 'css-loader'], exclude: '/node_modules/' },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff", exclude: '/node_modules/'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff", exclude: '/node_modules/'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream", exclude: '/node_modules/'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader", exclude: '/node_modules/'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml", exclude: '/node_modules/'
            }
        ]
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    }
}