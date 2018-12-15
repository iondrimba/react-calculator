const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = (process.env.NODE_ENV === 'production');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    publicPath: '',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name].[hash].css',
    }),
    new WebpackCleanupPlugin(),
    new HtmlWebpackPlugin({
      title: 'Calculator',
      minify: {
        collapseWhitespace: isProduction,
        minifyCSS: isProduction,
        minifyJS: isProduction,
        removeComments: isProduction
      },
      template: './src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/manifest.webmanifest', to: 'manifest.webmanifest'
      },
      {
        from: 'src/.htaccess'
      },
      {
        from: 'src/sounds', to: 'sounds'
      },
      {
        from: 'src/browserconfig.xml', to: 'browserconfig.xml'
      },
      {
        from: 'src/favicon.ico', to: 'favicon.ico'
      },
      {
        from: 'src/images', to: 'images'
      },
    ]),
  ]
});
