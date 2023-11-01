const url = require('../env.js')

exports.baseConfig = {
  runner: 'local',
  specs: [
    './test/specs/**/*.spec.js'
  ],
  exclude: [
  ],
  maxInstances: 1,
  bail: 0,
  baseUrl: url[process.env.ENV].FE,
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
  before: async function() {
    await browser.url(this.baseUrl)
  },
  afterTest: async function ( test, context, { error } ) {
    // take a screenshot anytime a test fails and throws an error
    if (error) {
      await browser.saveScreenshot('./screenshots/failure_' + test['title'].replace(/\s+/g, '_') + '.png')
    }
  },
}
