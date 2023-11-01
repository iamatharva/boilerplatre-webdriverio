const { baseConfig } = require('./base.conf')

exports.config = {
  ... baseConfig,
  logLevel: 'debug',
  reporters: ['spec'],
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: ['--no-sandbox', '--disable-dev-shm-usage', '--ignore-certificate-errors'],
      prefs: {
        'directory_upgrade': true,
        'prompt_for_download': false,
        'download.default_directory': global.downloadDir
      }
    }
  }]
}
