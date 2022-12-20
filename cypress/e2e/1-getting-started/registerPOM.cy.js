import { homePage } from "../../pageObjects/homePage.js";
import { registerPage } from "../../pageObjects/registerPage.js";

const { faker } = require("@faker-js/faker")

describe ("Register tests", () => {

    beforeEach(() => {
        cy.visit('/')
        homePage.registerBtn.click()
        homePage.bodyPage.should('have.css', 'background-color', 'rgb(190, 189, 184)')
        registerPage.registerTitle.should('be.visible').and('have.text', 'Register')
        registerPage.inputFields.should('have.css', 'border-radius', '20px')
        registerPage.inputFocus.focus('have.css', 'border-color', 'rgb(128, 189, 255)').and('have.css', 'box-shadow', 'rgba(0, 123, 255, 0.25) 0px 0px 0px 3.2px')
        registerPage.inputLabel.should('be.visible')
        registerPage.firstName.should('be.visible')
        registerPage.lastName.should('be.visible')
        registerPage.emailInput.should('be.visible')
        registerPage.passwordInput.should('be.visible')
        registerPage.passwordConfirmation.should('be.visible')
        registerPage.terms.should('be.visible')
        registerPage.submitBtn.should('be.visible')

    })

    it("Register with POM", () => {
        const passFaker = faker.internet.password()
        registerPage.register(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), passFaker, passFaker, true, true)
        cy.wait(5000)
        homePage.logoutBtn.should('be.visible')
    })

    it("Register with invalid name, less than 2char", () => {
        registerPage.register('n', 'surname', 'testPOM+1@gmail.com', 'testPOM123', 'testPOM123', true, true)
    })

    it("Register with invalid surname, less than 2char", () => {
        registerPage.register('name', 's', 'testPOM+2@gmail.com', 'testPOM123', 'testPOM123', true, true)
    })
    
    it("Register with invalid password format", () => {
        registerPage.register('name', 's', 'testPOM+3@gmail.com', 'testPO', 'testPO', true, true)
        registerPage.alertField.should('be.visible')
        .and('have.css','background-color','rgb(248, 215, 218)')
        .and('have.text', 'The password must be at least 8 characters.')
        .and('have.css', 'color', 'rgb(114, 28, 36)')
    })


})

/*
/// <reference types="Cypress" />

import { loginPage } from "../pageObjects/loginPage.js";
import { homePage } from "../pageObjects/homePage.js";

describe("Login tests", () => {
    beforeEach( () => {
        cy.visit('/')
        cy.url().should('include','gallery-app')
        homePage.clickLoginButton()
        cy.url().should('include','/login')
        loginPage.loginTitle.should('have.text','Please login')
    })

    it ('Login with valid credentials', () => {
        loginPage.login('bilja.QA1@gmail.com', 'Bilja12341234')  
    })

    it ('Login with invalid credentials', () => {
        loginPage.login('bilja.QA1@com.com', '12341234')
        loginPage.errorAlert.should('be.visible')
        loginPage.errorAlert.should('have.text','Bad Credentials') 
        loginPage.errorAlert.should('have.css','background-color','rgb(248, 215, 218)')
    })

    it ('Logout', () => {
        loginPage.login('bilja.QA1@gmail.com', 'Bilja12341234') 
        homePage.loginBtn.should('not.exist')
        homePage.clickLogoutButton()
        cy.wait(5000)
        homePage.logoutBtn.should('not.exist')
    })

    afterEach(() => {
        cy.clearCookies()
    })
})*/