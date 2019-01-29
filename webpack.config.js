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
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [
                    "babel-loader"
                ],
            }
        ]
    }
}