require('dotenv').config();
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'DB_USER': JSON.stringify(process.env.DB_USER),
        'DB_KEY': JSON.stringify(process.env.DB_KEY),
        'TOKEN_SECRET': JSON.stringify(process.env.TOKEN_SECRET)
      }
    })
  ]
});