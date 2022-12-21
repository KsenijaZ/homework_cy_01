import { homePage } from "../../pageObjects/homePage.js";

describe("Home Page test", () => {
    beforeEach(() => {
        cy.loginThroughBackend('testapi@gmail.com', 'api12345')

    })

    it("Load home page", () => {
        cy.visit('/')
        homePage.pageTitle.should('be.visible')
        homePage.searchInput.should('be.visible').and('have.attr', 'placeholder', 'Search...')
        homePage.searchBtn.should('be.visible').and('have.text', 'Filter')
        homePage.postItem.should('have.length', 10)
    })

    afterEach(() => {
        cy.clearCookies()
    })

})