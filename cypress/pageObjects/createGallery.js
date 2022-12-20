class CreateGallery {

    get pageTitle() {
        return cy.get('h1')
    }

    get inputLabel() {
        return cy.get('label')
    }

    get inputFields() {
        return cy.get(".form-group input")
    }

    get galleryTitle() {
        return cy.get('#title')
    }

    get galleryDescription() {
        return cy.get('#description')
    }

    get imageLink() {
        return cy.get('input[type=url]')
    }

    get submitBtn() {
        return cy.get('form > :nth-child(4)')
    }

    get cancelBtn() {
        return cy.get('form > :nth-child(5)')
    }
   

    get alertField() {
        return cy.get(".alert")
    }

    create(title, description, imageUrl) {
        this.galleryTitle.type(title)
        this.galleryDescription.type(description)
        this.imageLink.type(imageUrl)
        this.submitBtn.click()
    }
}

export const createGallery = new CreateGallery ()