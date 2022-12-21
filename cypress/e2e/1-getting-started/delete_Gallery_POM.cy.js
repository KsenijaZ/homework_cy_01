import { loginPage } from "../../pageObjects/loginPage.js";
import { createGallery } from "../../pageObjects/createGallery";
import { homePage } from "../../pageObjects/homePage.js";
import { deleteGallery } from "../../pageObjects/deleteGallery.js";

const { faker } = require("@faker-js/faker")


describe ("Login tests", () => {

    let newGalleryId = 0;

    beforeEach(() => {
        cy.visit('/')
        cy.loginThroughBackend('testapi@gmail.com', 'api12345')
    })

    it("Create gallery test", () => {
        homePage.createGalleryBtn.click()
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('newGallery')
        createGallery.create("DELETE test title", "test description", "http://image.jpg")
        cy.wait(5000)
        cy.wait('@newGallery').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
        
            newGalleryId = request.response.body.id;
            cy.log(newGalleryId)
        
        })
    })

    it("Delete gallery", () => {
        cy.visit(`/galleries/${newGalleryId}`)
        deleteGallery.deleteBtn.click()
        cy.intercept('DELETE', `https://gallery-api.vivifyideas.com/api/galleries/${newGalleryId}`, (req) => {
        }).as('deleteGallery')
        cy.wait('@deleteGallery').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
        
         })
    })

    afterEach(() => {
        cy.clearCookies()
    })

})
