// Karma configuration
// Generated on Tue Feb 02 2016 21:20:59 GMT-0200 (Horário brasileiro de verão)
var istanbul = require('browserify-istanbul');
var isparta = require('isparta');

module.exports = function (config) {
  config.set({
    client: {
      args: ['--autoWatch', config.autoWatch]
    }
  });


  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      './node_modules/phantomjs-polyfill-object-assign/object-assign-polyfill.js',
      './node_modules/promise-polyfill/promise.js',
      'src/scripts/**/*.js',
      'spec/*.js'
    ],
    included: false,
    browserify: {
      debug: true,
      transform: [istanbul({
        instrumenter: isparta,
        instrumenterConfig: { embedSource: true },
        ignore: ['**/node_modules/**']
      }),
      ['babelify']],
      configure: function (bundle) {
        bundle.on('prebundle', function () {
          bundle.external('react/addons');
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      },
      extensions: ['.js', '.jsx'],
      bundleDelay: 1000
    },
    preprocessors: {
      'src/scripts/**/*.js': ['sourcemap', 'babel', 'browserify'],
      'spec/*.js': ['sourcemap', 'babel', 'browserify']
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {
          type: 'lcov',
          subdir: '/'
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
      'karma-sourcemap-loader',
      'karma-remap-coverage',
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-coveralls'
    ],
    reporters: ['spec', 'coverage', 'remap-coverage', 'threshold', 'coveralls'],
    thresholdReporter: {
      statements: 80,
      branches: 50,
      functions: 85,
      lines: 90
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: config.autoWatch,
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ],
      },
    },
    singleRun: !config.autoWatch,
    concurrency: Infinity
  })
}
