// Karma configuration
// Generated on Tue Feb 02 2016 21:20:59 GMT-0200 (Horário brasileiro de verão)
var istanbul = require('browserify-istanbul');
var threshold = require('karma-threshold-reporter');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
            'spec/*.js'
        ],
        included: false,
        webpack: require('./webpack.config.js'),
        webpackMiddleware: {
            stats: 'errors-only'
        },
        browserify: {
            debug: false,
            transform: ['stringify', 'babelify', istanbul({
                defaultIgnore: true
            })],
            extensions: ['.js'],
            bundleDelay: 1000
        },
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            },
            filename: function (file) {
                return file.originalPath;
            },
            sourceFileName: function (file) {
                return file.originalPath;
            }
        },
        preprocessors: {
            'spec/*.js': ['babel','browserify']
        },
        coverageReporter: {
            instrumenters: { isparta: require('isparta') },
            instrumenter: {
                'spec/*.js': 'isparta'
            },
            instrumenterOptions: {
                isparta: { babel: { presets: 'es2015' } }
            },
            istanbul: { noCompact: true },
            dir: 'test/reports/coverage',
            reporters: [
                {
                    type: 'lcovonly',
                    subdir: 'report-lcov'
                }
            ]
        },
        plugins: [
            'karma-coverage',
            'karma-browserify',
            'karma-webpack',
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-threshold-reporter',
            'karma-babel-preprocessor',
            'karma-phantomjs-launcher',
            'karma-coveralls'
        ],
        reporters: ['spec', 'coverage', 'threshold', 'coveralls'],
        thresholdReporter: {
            statements: 80,
            branches: 50,
            functions: 85,
            lines: 90
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}