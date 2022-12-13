const locators = require("../../fixtures/locators.json")
const { faker } = require("@faker-js/faker")

describe ("Login tests", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(locators.header.loginBtn).click()
    })

    it('Login with valid credentials', () => {
        cy.get(locators.login.emailInput).type('testapi@gmail.com')
        cy.get(locators.login.passwordInput).type('api12345')
        cy.get(locators.login.submitBtn).click()
    })

    it('Login with invalid credentials', () => {
        cy.get(locators.login.emailInput).type(faker.internet.email())
        cy.get(locators.login.passwordInput).type(faker.internet.password())
        cy.get(locators.login.submitBtn).click()
    })

    it('Logout', () => {
        cy.get(locators.login.emailInput).type('testapi@gmail.com')
        cy.get(locators.login.passwordInput).type('api12345')
        cy.get(locators.login.submitBtn).click()
        cy.get(locators.header.logoutBtn).click()
  
    })
    
    afterEach(() => {
        cy.clearCookies()
    })

})