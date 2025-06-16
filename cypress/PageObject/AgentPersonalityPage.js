export class AgentPersonality {

    createNewProject(projectName, projectDescription, campaignType, country, timezone) {
        cy.get('.p-button.p-component').should('exist').click()
        cy.url().should("include", "/projects/create");
        cy.get('.header-title').contains('Create Project (MEGA-Bhargav)').should('exist')
        cy.get('[class="form-labal"]').contains('Project Name').should('exist')
        cy.get('#projectName').should('exist').clear().type(projectName)
        cy.get('[class="form-labal"]').contains('Project Description').should('exist')
        cy.get('#description').should('exist').clear().type(projectDescription)
        cy.get('[class="form-labal"]').contains('Campaign Type').should('exist')
        cy.get('.p-dropdown-label').eq(0).should('exist').click()
        cy.get('[role*="listbox"]').contains(campaignType).should('exist').click()
        cy.get('[class="form-labal"]').contains('Country').should('exist')
        cy.get('.p-dropdown-label').eq(1).should('exist').click()
        cy.get('[role*="listbox"]').contains(country).should('exist').click()
        cy.get('[class="form-labal"]').contains('Timezone').should('exist')
        cy.get('.p-dropdown-label').eq(2).should('exist').click()
        cy.get('[role*="listbox"]').contains(timezone).should('exist').click()
    }
    validateAgentPersonality() {
        cy.url().should("include", "/projects/create/script")
        cy.wait(2000)
        cy.get('[class="p-steps-number"]').contains('2').should('exist')
        cy.get('.p-steps-title').contains('Agent Personality').should('exist')
    }
    selectAgentCard() {
        cy.wait(4000)
        cy.get('[class="stepCard ng-star-inserted"]').eq(2).should('exist').click()
        cy.get('.stepCard.ng-star-inserted').eq(2).should('have.class', 'active');
    }
    validateEditAgent() {
        cy.get('[class*="card-title"]').contains('Agent').should('exist')
        cy.get('[class="card-icon"]').eq(3).should('exist').click()
        cy.url().should("include", "/projects/create/script");
        cy.wait(3000)
        cy.get('[class="p-steps-number"]').contains('2').should('exist')
        cy.get('.p-steps-title').contains('Agent Personality').should('exist')
        cy.get('[class="stepCard ng-star-inserted"]').eq(3).should('exist').click()
        cy.get('.stepCard.ng-star-inserted').eq(4).should('have.class', 'active');
    }
}