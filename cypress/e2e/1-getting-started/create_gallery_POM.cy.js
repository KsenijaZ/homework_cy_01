
import { createGallery } from "../../pageObjects/createGallery";
import { homePage } from "../../pageObjects/homePage";

describe("Create gallery test", () => {

    beforeEach(() => {
        cy.loginThroughBackend('testapi@gmail.com', 'api12345')
    })

    it("Create gallery test", () => {
        cy.visit('/')
        homePage.createGalleryBtn.click()

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('newGallery')
        createGallery.create("test title", "test description", "http://image.jpg")
        cy.wait(5000)
        cy.wait('@newGallery').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
        
            const newGalleryId = request.response.body.id;
            cy.log(newGalleryId)
        
        })
    })

    it("Create gallery without title", () => {
        cy.visit('/')
        homePage.createGalleryBtn.click()

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('newGallery')
        createGallery.create(" ", "test description", "http://image.jpg")
        cy.wait(5000)
        cy.wait('@newGallery').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
            //expect(request.response.statusCode).to.eql(201)
        createGallery.alertField.should('be.visible')
            .and('have.css','background-color','rgb(248, 215, 218)')
            .and('have.text', 'The title field is required.')
            .and('have.css', 'color', 'rgb(114, 28, 36)')
        
        })
    })

    it("Create gallery without description", () => {
        cy.visit('/')
        homePage.createGalleryBtn.click()

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('newGallery')
        createGallery.create("Test title", " ", "http://image.jpg")
        cy.wait(5000)
        cy.wait('@newGallery').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
            //expect(request.response.statusCode).to.eql(201)
  
        })
    })

    it("Create gallery with invalid image link", () => {
        cy.visit('/')
        homePage.createGalleryBtn.click()

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) => {
        }).as('newGallery')
        createGallery.create("Test title", "test description", "http://fe.jp", true)
        cy.wait('@newGallery').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
            expect(request.response.statusCode).to.eql(422)
        })
        createGallery.alertField.should('be.visible')
            .and('have.css','background-color','rgb(248, 215, 218)')
            .and('have.text', 'Wrong format of image')
            .and('have.css', 'color', 'rgb(114, 28, 36)')
    })

    afterEach(() => {
        cy.clearCookies()
    })

})