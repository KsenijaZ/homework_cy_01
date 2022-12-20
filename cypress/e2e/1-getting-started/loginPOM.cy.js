import { loginPage } from "../../pageObjects/loginPage.js";
import { homePage } from "../../pageObjects/homePage.js";


describe ("Login tests", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.url().should('include', 'gallery-app')
        homePage.loginBtn.click()
        homePage.bodyPage.should('have.css', 'background-color', 'rgb(190, 189, 184)')
        loginPage.loginTitle.should('be.visible').and('have.text', 'Please login') 
        loginPage.inputLabel.should('be.visible')
        loginPage.inputFields.should('have.css', 'border-radius', '20px')
        loginPage.submitBtn.should('have.css', 'border-radius', '4px')
            .and('have.text', 'Submit')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'background-color', 'rgb(72, 73, 75)')

    })

    it.only("Login with valid credentials", () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('validLogin')
        loginPage.login("testapi@gmail.com", "api12345")
        cy.wait('@validLogin').then((request) => {
            //cy.log(JSON.stringify(request.response.statusCode))
            expect(request.response.statusCode).to.eql(200)
        
        })
    })

    it("Login with POM", () => {
        loginPage.login("testapi@gmail.com", "api12345")
        homePage.logoutBtn.should('be.visible')
    })


    it("Login without email POM", () => {
        loginPage.login(" ", "api12345")
    })

    it("Login with invalid data", () => {
        loginPage.login("te@gmail.com", "api1234s-5")
        loginPage.alertField.should('be.visible')
            .and('have.css','background-color','rgb(248, 215, 218)')
            .and('have.text', 'Bad Credentials')
            .and('have.css', 'color', 'rgb(114, 28, 36)')
    })

    it("Logout", () => {
        // loginPage.login("testapi@gmail.com", "api12345")
        // homePage.logoutBtn.click()
        // homePage.loginBtn.should('be.visible')
        // homePage.logoutBtn.should('not.exist')

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/logout', (req) => {
        }).as('validLogout')
        loginPage.login("testapi@gmail.com", "api12345")
        homePage.logoutBtn.click()
        cy.wait('@validLogout').then((request) => {
            //cy.log(JSON.stringify(request.response.statusCode))
            expect(request.response.statusCode).to.eql(200)
        
        })
    })

   

    afterEach(() => {
        cy.clearCookies()
    })

})
