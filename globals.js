module.exports = {
  // All default global settings from Nightwatch:
  abortOnAssertionFailure: true,
  waitForConditionPollInterval: 500,
  waitForConditionTimeout : 5000,
  abortOnElementLocateError: false,
  throwOnMultipleElementsReturned: false,
  suppressWarningsOnMultipleElementsReturned: false,
  asyncHookTimeout : 10000,
  unitTestsTimeout : 2000,
  customReporterCallbackTimeout: 20000,
  retryAssertionTimeout: 5000,

  async before() {
    console.log('Global before hook - starting tests...');
  },
  async after() {
    console.log('Global after hook - tests completed.');
  },
  async beforeEach(browser) {
    console.log('Global beforeEach hook - setting up test...');
  },
  async afterEach(browser) {
    console.log('Global afterEach hook - test finished.');
  }
};
