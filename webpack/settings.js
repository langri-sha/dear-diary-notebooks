import HtmlWebpackPlugin from 'html-webpack-plugin'

import {resolve, ours, theirs, kb} from './helpers'
import postcss from './postcss'
import imageWebpackLoader from './images'

export default ({
  target: 'web',
  entry: './src/index',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  postcss,
  imageWebpackLoader,
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
        `url?limit=${kb(10)}&hash=sha512&digest=hex&name=images/[hash].[ext]`,
        'image-webpack'
      ],
      include: ours
    }]
  }
})
