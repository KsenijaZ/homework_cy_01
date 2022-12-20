class HomePage {

    get bodyPage() {
        return cy.get('#app')
    }

    get menuBar() {
        return cy.get('.navbar')
    }

    get loginBtn() {
        return cy.get("a[href='/login']")
    }

    get createGalleryBtn() {
        return cy.get('.mr-auto > :nth-child(3) > .nav-link')
    }

    get logoutBtn() {
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")
    }

    get registerBtn() {
        return cy.get(":nth-child(2) > .nav-link")
    }

    get pageTitle() {
        return cy.get('h1')
    }

    get searchInput() {
        return cy.get('.form-control')
    }

    get searchBtn() {
        return cy.get('.input-group-append > .btn')
    }

    get postList() {
        return cy.get('.grid')
    }

    get postItem() {
        return cy.get('.cell')
    }

}

export const homePage = new HomePage ()