'use strict'
require('./check-versions')()
require('shelljs/global')
const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV) //'production'
}

const ora = require('ora')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const utils = require('./utils')

const webpackConfig = require('./webpack.prod.conf')
const webpackModulesConfig = require('./webpack.modules.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)


rm('-rf', assetsPath)
mkdir('-p', assetsPath)

function buildPack(webpackConfig, cb, spinnerText) {
  const spinner = ora(spinnerText || 'building for uncompressed files...')
  spinner.start()
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    cb && cb()
  })
}

function fullBuild(cb) {
  // build index.js
  buildPack(webpackConfig, function () {

    // build cube.min.js
    webpackConfig.output.filename = utils.assetsPath('[name].min.js')
    webpackConfig.output.chunkFilename = '[name].min.js'
    webpackConfig.plugins.splice(1, 1,
      new webpack.DefinePlugin({
        'process.env': config.build.env
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin(utils.assetsPath('[name].min.css')),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    )
    buildPack(webpackConfig, function () {
      cb && cb()
    }, 'building for km-ui.min.js')
  }, 'building for index.js')
}

function modulesBuild() {
  // build ${module}/index.js
  buildPack(webpackModulesConfig, function () {
    // build ${module}/${module}.min.js
    webpackModulesConfig.output.filename = utils.assetsPath('[name]/[name].min.js')
    webpackModulesConfig.output.chunkFilename = '[name]/[name].min.js'
    webpackModulesConfig.plugins.splice(1, 1,
      new webpack.DefinePlugin({
        'process.env': config.build.env
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new ExtractTextPlugin(utils.assetsPath('[name]/[name].min.css')),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true
        }
      })
    )
    buildPack(webpackModulesConfig, null, 'building for modules/index.js')
  }, 'building for modules/index.js')
}

fullBuild(modulesBuild)

/*rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})*/
