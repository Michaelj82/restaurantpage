const path = require('path');

module.exports = {

    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: '/',
    },
    module: {

        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],

    },

};