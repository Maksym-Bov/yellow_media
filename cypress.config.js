const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    requestTimeout: 60000,
    chromeWebSecurity: false,
    blockHosts: [
        'ghb.adtelligent.com',
      'pagead2.googlesyndication.com',
      'securepubads.g.doubleclick.net'],
    baseUrl: 'https://ua.sinoptik.ua'
  },

});
