class AllGalleries {
    get loginBtn() {
        return cy.get("a[href='/login']")
    }
    get logoutBtn() {
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")
    }
    get registerBtn() {
        return cy.get(":nth-child(2) > .nav-link")
    }
}

export const allGalleries = new AllGalleries ()