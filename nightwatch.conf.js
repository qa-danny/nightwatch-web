const chromeConfig = {
  globals: { DEVICE: 'desktop' },
  desiredCapabilities : {
    browserName : 'chrome',
    'goog:chromeOptions' : {
      w3c: true,
      args: [
        //'--no-sandbox',
        //'--ignore-certificate-errors',
        //'--allow-insecure-localhost',
        //'--headless'
        '--window-size=1350,768',
      ]
    }
  },

  webdriver: {
    start_process: true,
    server_path: '',
    cli_args: [
      // '--verbose'
    ]
  }
};

module.exports = {
  src_folders: ['tests/'],
  page_objects_path: ['pages/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: ['commands/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: ['assertions/'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html#external-test-globals
  globals_path : 'globals.js',

  webdriver: {},
  
  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://the-internet.herokuapp.com/',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },
      ...chromeConfig
    },
    firefox: {
      globals: { DEVICE: 'desktop' },
      desiredCapabilities : {
        browserName : 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },
    chrome_mobile: {
      globals: { DEVICE: 'mobile' },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // mobileEmulation: {
          //   deviceMetrics: { width: 375, height: 812, mobile: true }
          // },
          args: ['--window-size=375,812'],
          w3c: true
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [],
      }
    },

    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the browserstack.com cloud service               |
    //                                                                               |
    // Please set the username and access key by setting the environment variables:  |
    // - BROWSERSTACK_USERNAME                                                       |
    // - BROWSERSTACK_ACCESS_KEY                                                     |
    // .env files are supported                                                      |
    //////////////////////////////////////////////////////////////////////////////////
    // browserstack: {
    //   selenium: {
    //     host: 'hub.browserstack.com',
    //     port: 443
    //   },
    //   // More info on configuring capabilities can be found on:
    //   // https://www.browserstack.com/automate/capabilities?tag=selenium-4
    //   desiredCapabilities: {
    //     'bstack:options' : {
    //       userName: '${BROWSERSTACK_USERNAME}',
    //       accessKey: '${BROWSERSTACK_ACCESS_KEY}',
    //     }
    //   },

    //   disable_error_log: true,
    //   webdriver: {
    //     timeout_options: {
    //       timeout: 60000,
    //       retry_attempts: 3
    //     },
    //     keep_alive: true,
    //     start_process: false
    //   }
    // },

    // 'browserstack.local': {
    //   extends: 'browserstack',
    //   desiredCapabilities: {
    //     'browserstack.local': true
    //   }
    // },

    // 'browserstack.chrome': {
    //   extends: 'browserstack',
    //   desiredCapabilities: {
    //     browserName: 'chrome',
    //     chromeOptions : {
    //       w3c: true
    //     }
    //   }
    // },

    // 'browserstack.firefox': {
    //   extends: 'browserstack',
    //   desiredCapabilities: {
    //     browserName: 'firefox'
    //   }
    // },

    // 'browserstack.ie': {
    //   extends: 'browserstack',
    //   desiredCapabilities: {
    //     browserName: 'internet explorer',
    //     browserVersion: '11.0'
    //   }
    // },

    // 'browserstack.safari': {
    //   extends: 'browserstack',
    //   desiredCapabilities: {
    //     browserName: 'safari'
    //   }
    // },

    // 'browserstack.local_chrome': {
    //   extends: 'browserstack.local',
    //   desiredCapabilities: {
    //     browserName: 'chrome'
    //   }
    // },

    // 'browserstack.local_firefox': {
    //   extends: 'browserstack.local',
    //   desiredCapabilities: {
    //     browserName: 'firefox'
    //   }
    // },
 
    //////////////////////////////////////////////////////////////////////////////////
    // Configuration for when using the Selenium service, either locally or remote,  |
    //  like Selenium Grid                                                           |
    //////////////////////////////////////////////////////////////////////////////////
    // selenium_server: {
    //   // Selenium Server is running locally and is managed by Nightwatch
    //   // Install the NPM package @nightwatch/selenium-server or download the selenium server jar file from https://github.com/SeleniumHQ/selenium/releases/, e.g.: selenium-server-4.1.1.jar
    //   selenium: {
    //     start_process: true,
    //     port: 4444,
    //     server_path: '', // Leave empty if @nightwatch/selenium-server is installed
    //     command: 'standalone', // Selenium 4 only
    //     cli_args: {
    //       //'webdriver.gecko.driver': '',
    //       //'webdriver.chrome.driver': ''
    //     }
    //   },
    //   webdriver: {
    //     start_process: false,
    //     default_path_prefix: '/wd/hub'
    //   }
    // },

    // 'selenium.chrome': {
    //   extends: 'selenium_server',
    //   desiredCapabilities: {
    //     browserName: 'chrome',
    //     chromeOptions : {
    //       w3c: true
    //     }
    //   }
    // },

    // 'selenium.firefox': {
    //   extends: 'selenium_server',
    //   desiredCapabilities: {
    //     browserName: 'firefox',
    //     'moz:firefoxOptions': {
    //       args: [
    //         // '-headless',
    //         // '-verbose'
    //       ]
    //     }
    //   }
    // }
  }
};
