export class SignInPage {
    verifyAllElementsSignInPage() {
        cy.get("img[alt='mega-logo']").should("be.visible");
        cy.contains("Sign in to your Mega Account").should("be.visible");
        cy.contains("Start automating your calls with Mega's powerful AI models.").should("be.visible");
        cy.get("#email").should("be.visible").and("have.attr", "placeholder", "Enter Email");
        cy.get("#password").should("be.visible").and("have.attr", "placeholder", "Enter Password");
        cy.get(".pi.pi-eye.input-icon.ng-star-inserted").should("be.visible");
        cy.get("label").contains("Remember me").should("be.visible");
        cy.get('.p-button-label').should("be.visible").and("contain", "Sign in");

    }
    verifyLoginFuntionality(email, password) {
        if (email != null) {
            cy.get("#email").should("be.visible").clear({ force: true }).type(email)
        }
        if (password != null) {
            cy.get("#password").should("be.visible").clear({ force: true }).type(password)
        }

        cy.get(".p-checkbox-box").click();
        cy.get(".p-button-label").should("be.visible").click({ force: true });
        //cy.wait(4000)
    }
    validateSignIn() {
        cy.url().should("include", "/login");
        cy.wait(3000);
        cy.get(".header-title").should("be.visible").and('contain.text', 'Dashboard')
    }
    validateError(error) {
        cy.get('[class="error"]').should('be.visible').and('contain.text', error)
    }
    validateToastMessage(toastMsg) {
        cy.get('[class*="p-toast-message-content"]').contains(toastMsg).should('be.visible')
    }
    verifySignOut(email,password) {
        cy.get('[class="pi pi-sign-out"]').should('be.visible').click()
        cy.url().should("include", "/login");
        cy.get('.font-bold').should('be.visible').and('contain.text', 'Sign in to your Mega Account')
          cy.get("#email").should("be.visible").and('have.value', email);
          cy.get("#password").should("be.visible").and('have.value', password);
    }
}