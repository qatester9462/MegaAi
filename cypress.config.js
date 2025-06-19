const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://app.test.megavoice.ai/',
    users: {
      user1: {
        username: "qatesthub2@gmail.com",
        password: "sZWL5WDbCoaKMmNh"
      },
    defaultCommandTimeout: 80000,
    pageLoadTimeout: 100000,
   
      // implement node event listeners here
    },
  }
});
