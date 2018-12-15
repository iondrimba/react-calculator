const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = (process.env.NODE_ENV === 'production');

const config = {
  mode: isProduction ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.mp3', '.ico']
  },
  entry: {
    app: './src/scripts/app'
  },
  output: {
    path: __dirname + '/public',
    publicPath: isProduction ? '' : 'http://localhost:8080/',
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: true,
              sourceMap: true,
              localIdentName: '[local]',
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              import: true,
              localIdentName: '[local]',
              importLoaders: true,
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]' + (isProduction ? '&publicPath=../' : '')
      },
      {
        test: /\.(mp3)$/,
        loader: 'file-loader?name=sounds/[name].[ext]' + (isProduction ? '&publicPath=../' : '')
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=images/[name].[hash].[ext]',
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
};


if (isProduction) {
  config.plugins.push(new ExtractTextPlugin('./css/[name].[hash].css'));
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new CompressionPlugin({
    asset: '[path].gz',
    algorithm: 'gzip',
    test: /\.js$|\.html$/,
    threshold: 10240,
    minRatio: 0.8
  }));
}

module.exports = config;
