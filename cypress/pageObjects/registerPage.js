class RegisterPage {

    get firstName() {
        return cy.get("#first-name")
    }

    get lastName() {
        return cy.get("#last-name")
    }

    get emailInput() {
        return cy.get("#email")
    }

    get passwordInput() {
        return cy.get("#password")
    }

    get passwordConfirmation() {
        return cy.get("#password-confirmation")
    }

    get terms() {
        return cy.get(".form-check-input")
    }

    get submitBtn() {
        return cy.get("button")
    }

    get alertField() {
        return cy.get(".alert")
    }
    
    get registerTitle() {
        return cy.get("h1")
    }

    get inputLabel() {
        return cy.get('label')
    }

    get inputFields() {
        return cy.get(".form-group input")
    }

    get inputFocus() {
        return cy.get('#email')
    }

    register(firstName, lastName, email, password, passwordConfirmation, terms) {
            this.firstName.type(firstName)
            this.lastName.type(lastName)
            this.emailInput.type(email)
            this.passwordInput.type(password)
            this.passwordConfirmation.type(passwordConfirmation)
            this.terms.click()
            this.submitBtn.click()
    }

}

export const registerPage = new RegisterPage ()