
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: "https://gallery-app.vivifyideas.com/",

    env: {
      "validLoginEmail": "testapi@gmail.com",
      "validLoginPassword": "api12345"
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    }

  }

});
