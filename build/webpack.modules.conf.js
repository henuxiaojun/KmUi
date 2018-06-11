const path = require('path')
const fs = require('fs')
const config = require('../config')
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const modules = {}
const isPath = path.join(__dirname, '../src/modules')
const files = fs.readdirSync(isPath)
if (files) {
  files.forEach(function (name) {
    const file = path.join(isPath, name)
    if (fs.statSync(file).isDirectory()) {
      modules[name] = file
    }
  })
}
const webpackConfig = merge(baseWebpackConfig, {
  entry: modules,
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: {
        publicPath: '../'
      }
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('[name]/index.js'),
    library: 'KmUi',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new ExtractTextPlugin(utils.assetsPath('[name]/style.css'))
  ]
})

module.exports = webpackConfig
