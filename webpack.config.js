const { Module } = require('webpack');
const webpack = require('webpack');



/* 
MULTI PAGE APPLICATION
*/



const config = {
    entry: {
        'indexPage':__dirname + '/static/js/index.jsx'
        // 'aboutPage':__dirname + '/static/js/about.jsx',

    },
    output: {
        path: __dirname + '/static/dist',
        filename: 'bundle.js',
        // filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
        ]
    }
};

// const config = {
//     entry: {
//         'indexPage':__dirname + '/js/index.jsx',
//         'aboutPage':__dirname + '/js/about.jsx',

//     },
//     output: {
//         path: __dirname + '/dist',
//         filename: '[name].js',
//     },
//     resolve: {
//         extensions: ['.js', '.jsx', '.css']
//     },
// };

/* 

SINGLE PAGE APPLICATION
const config = {
    entry: __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
};

*/

module.exports = config;