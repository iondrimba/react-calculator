const webpack = require('webpack');
require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = (process.env.NODE_ENV === 'production');

const config = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.mp3', '.ico']
  },
  entry: {
    app: './src/scripts/app'
  },
  output: {
    path: __dirname + '/public',
    publicPath: isProduction ? '' : 'http://localhost:8080/',
    filename: '[name].[hash].js'
  },
  devServer: isProduction ? {} : {
    inline: true,
    stats: 'errors-only',
    compress: isProduction,
    outputPath: './public',
    contentBase: './public'
  },
  module: {
    loaders: [
      {
        test: /.js|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader!eslint-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(s|c)css$/,
        loader: isProduction ? ExtractTextPlugin.extract('css?root=.&modules&importLoaders=1&localIdentName=[local]!resolve-url!postcss!sass') :
          'style!css?sourceMap&modules&importLoaders=1&localIdentName=[local]!resolve-url!postcss!sass?sourceMap'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]' + (isProduction ? '&publicPath=../' : '')
      },
      {
        test: /\.(mp3)$/,
        loader: 'file?name=sounds/[name].[ext]' + (isProduction ? '&publicPath=../' : '')
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=images/[name].[hash].[ext]',
          'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
        ]
      }
    ]

  },

  plugins: [
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
        from: 'src/manifest.json', to: 'manifest.json'
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
};


if (isProduction) {
  config.plugins.push(new ExtractTextPlugin('./css/[name].[hash].css'));
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.plugins.push(new CompressionPlugin({
    asset: '[path].gz',
    algorithm: 'gzip',
    test: /\.js$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  }));
  config.plugins.push();
}

module.exports = config;
