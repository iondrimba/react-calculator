var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var StyleLintPlugin = require("stylelint-webpack-plugin");
var postcssCssnext = require("postcss-cssnext");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");

var isProduction = (process.env.NODE_ENV === "production");
var isTesting = (process.env.NODE_ENV === "testing");

var config = {
    resolve: {
        extensions: ["", ".js", ".jsx", ".json"]
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
                loader: isProduction ? ExtractTextPlugin.extract('css?&modules&importLoaders=1&localIdentName=[name]_[local]!resolve-url!postcss!sass') :
                    "style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]!resolve-url!postcss!sass?sourceMap"
            }
        ]

    },
    postcss: [
        postcssCssnext()
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: ["bootstrap"] }),
        new HtmlWebpackPlugin({
            title: "Calc",
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                removeComments: true
            },
            template: "./src/index.html",
            inject: "body"
        }),
        new WebpackCleanupPlugin(),
        new StyleLintPlugin({
            configFile: ".stylelintrc",
            files: ["**/*.s?(a|c)ss"],
            failOnError: false
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(isProduction)
        })
    ]
};


if (isProduction) {
    config.plugins.push(new ExtractTextPlugin("[name].[hash].css"));
}

if (isTesting) {
    config.plugins.shift();
}

module.exports = config;