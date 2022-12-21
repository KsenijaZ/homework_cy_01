const locators = require("../../fixtures/locators.json")
const { faker } = require("@faker-js/faker")

describe ("Register tests", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get(locators.header.registerBtn).click()
    })

    it('Register with valid credentials', () => {
        const passwordFaker = faker.internet.password();
        cy.get(locators.register.firstName).type(faker.name.firstName())
        cy.get(locators.register.lastName).type(faker.name.lastName())
        cy.get(locators.register.emailInput).type(faker.internet.email())
        cy.get(locators.register.passwordInput).type(passwordFaker)
        cy.get(locators.register.passwordConfirmation).type(passwordFaker)
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submitBtn).click()
    })

    it('Register with invalid email', () => {
        cy.get(locators.register.firstName).type('cyName')
        cy.get(locators.register.lastName).type('cylastName')
        cy.get(locators.register.emailInput).type('testcy@gmail.c')
        cy.get(locators.register.passwordInput).type('cyTest12345')
        cy.get(locators.register.passwordConfirmation).type('cyTest12345')
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submitBtn).click()
    })

    it('Register with invalid password, less then 8 char', () => {
        cy.get(locators.register.firstName).type('cyName')
        cy.get(locators.register.lastName).type('cylastName')
        cy.get(locators.register.emailInput).type('testcy@gmail.com')
        cy.get(locators.register.passwordInput).type('cyTes')
        cy.get(locators.register.passwordConfirmation).type('cyTes')
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submitBtn).click()
    })

    it.only('Register without first name', () => {
        cy.get(locators.register.firstName).type('cyName')
        cy.get(locators.register.firstName).clear()
        cy.get(locators.register.lastName).type('cylastName')
        cy.get(locators.register.emailInput).type('testcy@gmail.com')
        cy.get(locators.register.passwordInput).type('cyTest12345')
        cy.get(locators.register.passwordConfirmation).type('cyTest12345')
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submitBtn).click()
    })

    it('Register without last name', () => {
        cy.get(locators.register.firstName).type('cyName')
        cy.get(locators.register.lastName).should('have.value', '');
        cy.get(locators.register.emailInput).type('testcy@gmail.com')
        cy.get(locators.register.passwordInput).type('cyTest12345')
        cy.get(locators.register.passwordConfirmation).type('cyTest12345')
        cy.get(locators.register.terms).click()
        cy.get(locators.register.submitBtn).click()
    })
    
    it('Register without accepted terms', () => {
        cy.get(locators.register.firstName).type('cyName')
        cy.get(locators.register.lastName).type('cylastName')
        cy.get(locators.register.emailInput).type('testcy@gmail.com')
        cy.get(locators.register.passwordInput).type('cyTest12345')
        cy.get(locators.register.passwordConfirmation).type('cyTest12345')
        //cy.get(locators.register.terms).click()
        cy.get(locators.register.submitBtn).click()
    })

    afterEach(() => {
        cy.clearCookies()
    })

})