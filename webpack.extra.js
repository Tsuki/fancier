const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const METADATA = {
  baseUrl: '/',
  // title: options.title,
  // isDevServer: helpers.isWebpackDevServer(),
  // HMR: HMR
};
module.exports = {
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: METADATA.title,
      chunks: ['styles', 'runtime', 'polyfills', 'scripts', 'main'],
      chunksSortMode: 'manual',
      metadata: METADATA,
      inject: 'head',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    })
  ]
};
