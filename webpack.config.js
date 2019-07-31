let path = require('path');
let webpack = require('webpack');
module.exports = {
  entry: {
    index: './src/May.js',
  },
  module: {
      rules: [
          //js代码检查和ES6转换
          {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
      ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: '[name]_[hash:10].js',
    path: path.resolve(__dirname, "./build"),
  }
}