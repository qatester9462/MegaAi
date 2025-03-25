export class PoolsStep {
    validatePoolsStep(name, projectName, projectDescription, campaignType, country, timezone) {
        cy.get('.p-paginator-page').eq(1).should('exist').click()
        cy.get('.p-datatable-table tbody tr td:nth-child(1)').contains(name).should('exist').click()
        cy.url().should("include", "/dashboard");
        cy.get('.header-title').contains('Dashboard (MEGA-Bhargav)').should('exist')
        cy.get('[class="sidebarMenu-icon ng-star-inserted"]').eq(4).should('exist').click()
        cy.url().should("include", "/projects");
        cy.get('.header-title').contains('Projects (MEGA-Bhargav)').should('exist')
        cy.get('.p-button.p-component').should('exist').click()
        cy.url().should("include", "/projects/create");
        cy.get('.header-title').contains('Create Project (MEGA-Bhargav)').should('exist')
        cy.get('[class="form-labal"]').contains('Project Name').should('exist')
        cy.get('#projectName').should('exist').clear().type(projectName)
        cy.get('[class="form-labal"]').contains('Project Description').should('exist')
        cy.get('#projectName').should('exist').clear().type(projectDescription)
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
    clickButton(buttonName) {
        cy.get('.p-ripple.p-element').contains(buttonName).should('exist').click()
    }
    selectGoal() {
        cy.url().should("include", "/projects/create/goal");
        cy.wait(3000)
        cy.get('[class="p-steps-number"]').contains('1').should('exist')
        cy.get('.p-steps-title').contains('Goal').should('exist')
        cy.get('[class="p-button-group p-component"] span').contains('Debt Collection').should('exist')
        cy.get('[class="stepCard ng-star-inserted"]').eq(0).contains('Debt handling').should('exist').click()
    }
    selectpool() {
        cy.url().should("include", "/projects/create/pool");
        cy.wait(2000)
        cy.get('.p-datatable-table tbody tr').should('have.length.at.least', 2).then(($rows) => {
                cy.wrap($rows[0]).click();
                cy.wrap($rows[1]).click();
            });
    }
    
}