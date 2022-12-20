class LoginPage {

    get emailInput() {
        return cy.get("#email")
    }

    get passwordInput() {
        return cy.get("#password")
    }

    get inputFields() {
        return cy.get("input.form-control")
    }

    get submitBtn() {
        return cy.get("button")
    }

    get alertField() {
        return cy.get(".alert")
    }
    
    get loginTitle() {
        return cy.get("h1")
    }

    get inputLabel() {
        return cy.get('label')
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitBtn.click()
    }
    
}

export const loginPage = new LoginPage ()
