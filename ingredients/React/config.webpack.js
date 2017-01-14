var path = require('path');
var webpack = require('webpack');

/*
Recursively bundles and transpiles (es6 to es2015/react) all file dependencies
starting with index.jsx.

For more information on the webpack config file:
https://webpack.js.org/concepts/
*/

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders:[
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        excludes: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};