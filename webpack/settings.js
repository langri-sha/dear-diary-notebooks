import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

import {resolve, ours, theirs} from './helpers'
import postcss from './postcss'

export default ({
  target: 'web',
  entry: './src/index',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  postcss,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dear Diary Notebooks'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss', '.css'],
    packageMains: ['browser', 'web', 'browserify', 'main', 'style']
  },
  module: {
    preLoaders: [{
      test: /\.js?$/,
      loader: 'standard',
      include: ours
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: ours
    }, {
      test: /\.html$/,
      loader: 'nunjucks',
      include: ours
    }, {
      test: /\.css$/,
      loaders: 'style!css?modules!postcss',
      include: ours
    }, {
      test: /\.css$/,
      loaders: 'style!css',
      include: theirs
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'url?hash=sha512&digest=hex&name=images/[hash].[ext]',
        'image-webpack?bypassOnDebug=true&optimizationLevel=7&interlaced=false'
      ],
      include: ours
    }]
  }
})
