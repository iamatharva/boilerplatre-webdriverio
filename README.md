# Deel Home Assignment E2E Test Automation Framework

Framework Details: Mocha using Webdriver IO `https://webdriver.io/` | Pattern: Page Object Pattern | Assertions: Chai

## Installation and Access:

1. Using NVM if not than follow next steps
```
nvm install
nvm use
```
1. Install [Node 14.21.3](https://nodejs.org/en/). or if you use Node Version Manager than simply say 
2. Install latest [Google Chrome](https://www.google.com/intl/en_in/chrome/).
3. Make sure your NPM version is 6.14.18, To check use below command.

```
npm -v
```

4. Please make sure you always up to date your Google chrome version for local test run and that should also match with the [latest chrome driver stable version][https://chromedriver.chromium.org/], if not then please update the [package file](package.json) and push the latest one if released recently. Also please have a look to the below for updating the chromedriver image locally and in CI both.

## Installing the dependencies

Please run the test using the following command.

```
npm install
```

## Running the test

Please run the test using the following command which will run the test in headlful mode

```
npm run local
```

Please run the test using the following command which will run the test in headless mode

```
npm run ci
```

### Linting the files before commit

```
npm run lint
```

### Log level while running the test

Level of logging verbosity: `trace` | `debug` | `info` | `warn` | `error` | `silent`
Change the value for log level from above mentioned values in the [local config file](./config/local.conf.js) or [ci config file](./config/ci.conf.js)

```
logLevel: 'error'
```
