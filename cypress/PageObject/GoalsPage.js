/// <reference types="cypress" />

export class GoalsProject {
    
    VerifyAllElementsGoalsForm() {
        cy.get("li.p-element.p-steps-item.p-highlight.p-steps-current.ng-star-inserted span.p-steps-number")
            .should('exist')
            .and('be.visible');

        cy.get(".p-ripple.p-element.p-button.p-component.p-button-raised.p-button-sm")
            .should('exist')
            .and('be.visible');

        cy.get("p-button:nth-child(2) button:nth-child(1) span:nth-child(1)")
            .should('exist')
            .and('be.visible');

        cy.get("p-button:nth-child(3) button:nth-child(1) span:nth-child(1)")
            .should('exist')
            .and('be.visible');
    }
 
    verifyGoalSelection() {
        cy.wait(1000); // Consider replacing with better wait strategies

        cy.get('[class*="star-inserted"] [class="text-sm font-semibold line-height-3 text-900"]')
            .should('be.visible').and ('contain text', ' Confirm recoding ')
            .click({ force: true });

        cy.get(".p-element.p-button-success.bg-teal-700.border-teal-700.font-bold.p-button.p-component")
            .should('exist')
            .and('be.visible')
            .click({ force: true });
    }
}
