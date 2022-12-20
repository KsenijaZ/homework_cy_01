import { loginPage } from "../../pageObjects/loginPage.js";
import { createGallery } from "../../pageObjects/createGallery";
import { homePage } from "../../pageObjects/homePage.js";

const { faker } = require("@faker-js/faker")


describe ("Login tests", () => {

    before(() => {
        cy.visit('/')
        cy.url().should('include', 'gallery-app')
        homePage.loginBtn.click()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('validLogin')
        loginPage.login("testapi@gmail.com", "api12345")
        cy.wait('@validLogin').then((request) => {
            //cy.log(JSON.stringify(request.response.statusCode))
            expect(request.response.statusCode).to.eql(200)
        
        })
    })

    it("Delete", () => {
        cy.visit('https://gallery-app.vivifyideas.com/create')
        createGallery.create('Delete test title', faker.lorem.paragraphs(1), 'https://images.freeimages.com/images/large-previews/85a/the-skirt-flies-in-the-wind-1641572.jpg')
        cy.visit('https://gallery-app.vivifyideas.com/my-galleries')
        cy.get(':nth-child(1) > h2 > .box-title').click()
        cy.get(':nth-child(5) > button.btn').click()
        // cy.request()
        // expect(request.response.statusCode).to.eql(200)
        // const newGalleryId = request.response.galleries.id;
        // cy.log(newGalleryId)
        //     //cy.visit(`/galleries/${newGalleryId}`)

    })


    afterEach(() => {
        cy.clearCookies()
    })

})
