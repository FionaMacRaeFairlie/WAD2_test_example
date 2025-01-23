const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl:"/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },

});

