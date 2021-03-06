
browsers = ['Chrome']

if (process.env.TRAVIS) {
    browsers.push('Chrome_Travis')
}

module.exports = function(config) {
  config.set({
    browsers,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/@acomodeo/angular-google-maps/dist/angular-google-maps.min.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    exclude: [],
    preprocessors: {
      'src/**/*.js': 'coverage'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      includeAllSources: true,
      reporters: [
        { type: 'html', subdir: '.'},
        { type: 'json', subdir: '.', file: 'coverage.json' },
        { type: 'json-summary', subdir: '.', file: 'coverage-summary.json'},
      ]
    },
    customLaunchers: {
      Chrome_Travis: {
          base: 'Chrome',
          flags: ['--no-sandbox'],
      },
    },
    singleRun: true,
  });
};
