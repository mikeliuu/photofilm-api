const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.css']
  },
  target: "async-node",
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  
  externals: nodeExternals(), // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            attrs: ['img:src', 'data:image', 'data:font']
          }
        }
      },
      {
        test:/\.(png|svg|gif|ico|mp3|mp4|jp(e)g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limits: 8312,
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin()
  ]
}