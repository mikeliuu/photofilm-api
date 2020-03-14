require('dotenv').config();
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
// const webpack = require('webpack');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src/app.js')
  },
  output: {
    path: path.resolve(__dirname, './dist')
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
    new CleanWebpackPlugin(),
    new Dotenv(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //     'DB_USER': JSON.stringify(process.env.DB_USER),
    //     'DB_KEY': JSON.stringify(process.env.DB_KEY),
    //     'TOKEN_SECRET': JSON.stringify(process.env.TOKEN_SECRET)
    //   }
    // })
  ]
}