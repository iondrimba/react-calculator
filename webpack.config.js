var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var StyleLintPlugin = require("stylelint-webpack-plugin");
var postcssCssnext = require("postcss-cssnext");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");
var CompressionPlugin = require("compression-webpack-plugin");
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var isProduction = (process.env.NODE_ENV === "production");
var isTesting = (process.env.NODE_ENV === "testing");

var config = {
    resolve: {
        extensions: ["", ".js", ".jsx", ".json", ".mp3", ".ico"]
    },
    entry: {
        app: "./src/scripts/app"
    },
    output: {
        path: __dirname + "/public",
        publicPath: isProduction ? "" : "http://localhost:8080/",
        filename: "[name].[hash].js"
    },
    devServer: isProduction ? {} : {
        inline: true,
        stats: "errors-only",
        compress: isProduction,
        outputPath: './public',
        contentBase: "./public"
    },
    module: {
        loaders: [
            {
                test: /.js|.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader!eslint-loader"
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.(s|c)css$/,
                loader: isProduction ? ExtractTextPlugin.extract('css?root=.&modules&importLoaders=1&localIdentName=[local]!resolve-url!postcss!sass') :
                    "style!css?sourceMap&modules&importLoaders=1&localIdentName=[local]!resolve-url!postcss!sass?sourceMap"
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
    postcss: [
        postcssCssnext()
    ],
    plugins: [
        new WebpackCleanupPlugin(),
        new HtmlWebpackPlugin({
            title: "Calculator",
            minify: {
                collapseWhitespace: isProduction,
                minifyCSS: isProduction,
                minifyJS: isProduction,
                removeComments: isProduction
            },
            template: "./src/index.html",
            inject: "body"
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/manifest.json', to: 'manifest.json'
            },
            {
                from: 'src/.htaccess'
            },
            {
                from: 'src/GzipSimpleHTTPServer.py', to: 'GzipSimpleHTTPServer.py'
            },
            {
                from: 'src/favicon.ico', to: 'favicon.ico'
            },
            {
                from: 'src/images/', to: 'images'
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
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({ name: ["bootstrap"] }));
    config.plugins.push(new ExtractTextPlugin("./css/[name].[hash].css"));
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new CompressionPlugin({
        asset: "[path].gz",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    }));
    config.plugins.push(new SWPrecacheWebpackPlugin({
        cacheId: 'calc',
        filename: 'calc-service-worker.js',
        maximumFileSizeToCacheInBytes: 4194304,
        staticFileGlobs: ['public/**/*.{js,json,mp3,html,css,png,jpg,gif}'],
        stripPrefix: 'public',
        runtimeCaching: [{
            urlPattern: /^https:\/\/br\.iondrimbafilho\.me\/.+/,
            handler: 'cacheFirst'
        }],
    }
    ));
} else {
    config.plugins.push(new StyleLintPlugin({
        configFile: ".stylelintrc",
        files: ["./src/scss/**/*.s?(a|c)ss"],
        failOnError: false
    }));
}

if (isTesting) {
    config.plugins.shift();
}

module.exports = config;
