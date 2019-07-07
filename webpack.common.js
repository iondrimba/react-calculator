const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.mp3', '.ico']
  },
  entry: {
    app: './src/scripts/app'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].[hash].js'
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
							modules: {
								mode: 'local',
								localIdentName: '[local]',
							},
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
              modules: {
								mode: 'local',
								localIdentName: '[local]',
							},
              import: true,
              importLoaders: true,
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(mp3)$/,
        loader: 'file-loader?name=sounds/[name].[ext]'
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

module.exports = config;
