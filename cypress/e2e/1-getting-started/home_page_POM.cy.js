import { homePage } from "../../pageObjects/homePage.js";

describe("Home Page test", () => {
    beforeEach(() => {
        cy.visit('/')
        cy.url().should('include', 'gallery-app')
        homePage.loginBtn.click()
        homePage.bodyPage.should('have.css', 'background-color', 'rgb(190, 189, 184)')
        homePage.menuBar.should('be.visible')
            .and('have.css', 'background-color', 'rgb(72, 73, 75)')
            .contains('All Galleries')

    })

    it("Load home page", () => {
        cy.visit('/')
        homePage.pageTitle.should('be.visible')
    })

    afterEach(() => {
        cy.clearCookies()
    })

})