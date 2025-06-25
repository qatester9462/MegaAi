/// <reference types="cypress" />

export class GoalsProject {

    VerifyAllElementsGoalsForm() {
        cy.get("li.p-element.p-steps-item.p-highlight.p-steps-current.ng-star-inserted span.p-steps-number")
            .should('exist')
            .and('be.visible');

        cy.get(".p-ripple.p-element.p-button.p-component.p-button-raised.p-button-sm")
            .should('exist')
            .and('be.visible');

        // cy.get("p-button:nth-child(2) button:nth-child(1) span:nth-child(1)")
        //     .should('exist')
        //     .and('be.visible');

        // cy.get("p-button:nth-child(3) button:nth-child(1) span:nth-child(1)")
        //     .should('exist')
        //     .and('be.visible');
    }

    verifyGoalSelection() {
        cy.wait(1000); // Consider replacing with better wait strategies

        cy.get('[class*="star-inserted"] [class="text-sm font-semibold line-height-3 text-900"]')
            .should('be.visible').and('contain text', ' Confirm recoding ')
            .click({ force: true });

        cy.get(".p-element.p-button-success.bg-teal-700.border-teal-700.font-bold.p-button.p-component")
            .should('exist')
            .and('be.visible')
            .click({ force: true });
    }

    gotoAdminGoals() {
        cy.get('[class="sidebarMenu-links"]').eq(2).should('exist').click()
        cy.url().should('include', '/goals/goal-types')
        cy.get('.header-title').contains('Goal Types').should('be.visible')
    }
    createGoalType() {
        cy.get('[role="tab"]').contains('Goal Types').should('exist').click()
        cy.get('.p-speeddial-button').should('be.visible').click()
        cy.get('[role="complementary"]').contains('Create Goal Type').should('exist').wait(3000)
    }
    addGoalTypeName(goalType) {
        cy.get('[class="form-group"]').contains('Goal Type Name').should('exist')
        cy.get('[placeholder="Enter Goal Type Name"]').should('exist').clear().type(goalType)
    }
    addDescription(description) {
        cy.get('[class="form-group"]').contains('Description').should('exist')
        cy.get('[placeholder="Enter Description"]').should('exist').clear().type(description)
    }
    selectModule() {
        cy.get('[class="form-group"]').contains('Module').should('exist')
        cy.get('[aria-label="Select Module"]').should('exist').click()
        cy.get('[class*="p-dropdown-panel"]').should('exist')
        cy.get('[role="option"]').should('exist').then(($options) => {
            const count = $options.length;
            const randomIndex = Math.floor(Math.random() * count)
            cy.wrap($options[randomIndex]).click()
        });
    }
    validateCreatedGoalType(goalType) {
        cy.get('tbody tr td:nth-child(1)').should('exist').contains(goalType)
    }
    searchByGoalType(goalType) {
        cy.get('[placeholder="Search by goal type"]').should('be.visible').clear().type(goalType).wait(2000)
        cy.get('tbody tr td:nth-child(1)').should('exist').and('contain.text', goalType)
    }
    deleteGoalType(goalType) {
        cy.get('tbody td:nth-child(1)').contains(goalType).parents('tr').within(() => {
            cy.get('.pi.pi-trash').click({ timeout: 1000 });
        });
        cy.get('[role="dialog"]').contains('Delete ' + goalType).should('be.visible');
        cy.get('[class="p-button-label"]').contains('Delete').click();
        cy.get('[class*="p-toast-message-content"]').should('contain', 'Goal Type Deleted Successfully');
    }
    validateEditGoalType(goalType) {
        cy.get('tbody td:nth-child(1)').contains(goalType).parents('tr').within(() => {
            cy.get('.pi-pencil').click({ timeout: 1000 })
        });
        cy.get('[role="complementary"]').contains('Update Goal Type').should('exist').wait(2000)
    }
    validateModuleFilter(module) {
        cy.wait(2000)
        let initialRowCount = 0;
        cy.get('tbody tr').then(($rows) => {
            initialRowCount = $rows.length
            cy.log(`Initial row count: ${initialRowCount}`)
        })
        cy.get('[aria-label="Modules: All"]').should('exist').click()
        cy.get('[class*="p-dropdown-panel"]').should('be.visible')
        cy.get('[role="searchbox"]').should('be.visible').clear().type(module)
        cy.get('[role="option"]').should('exist').contains(module).click()
        cy.wait(2000)
        cy.get('tbody tr').then(($filteredRows) => {
            const filteredCount = $filteredRows.length;
            cy.log(`Filtered row count: ${filteredCount}`);
            expect(filteredCount).to.be.lte(initialRowCount)
        })
    }
    validateClearFilter(module) {
        const selector = '[aria-label="Modules: All"]'
        let initialFilterText = ''
        let filteredRowCount = 0
        let totalRowCount = 0

        //Get initial filter text
        cy.get(selector).invoke('text').then((text) => {
            initialFilterText = text.trim()
        })
            .then(() => {
                cy.get(selector).click();
                cy.get('[class*="p-dropdown-panel"]').should('be.visible')
                cy.get('[role="searchbox"]').should('be.visible').clear().type(module)
                cy.get('[role="option"]').should('exist').contains(module).click()
                cy.wait(3000)

                //Count filtered rows
                cy.get('table tbody tr')
                    .should('exist')
                    .then($rows => {
                        filteredRowCount = $rows.length;
                        cy.log(`Filtered rows: ${filteredRowCount}`)
                    });
                cy.get('[class*="btn-link"]').contains('Clear').click()
                cy.wait(500)

                //Validate filter text reset + rows count after clearing filter
                cy.get(selector).invoke('text').then((afterClearText) => {
                    expect(afterClearText.trim()).to.equal(initialFilterText)
                })

                cy.get('table tbody tr').should('exist').then($rows => {
                    totalRowCount = $rows.length;
                    cy.log(`Total rows after clearing the filter: ${totalRowCount}`)
                    expect(totalRowCount).to.be.greaterThan(filteredRowCount)
                })
            })

    }

    gotoGoalsTab() {
        cy.get('[role="tab"]').contains('Goals').should('exist').click()
        cy.url().should('include', '/goals/goals')
        cy.get('.header-title').contains('Goals').should('be.visible')
    }
    validateClientFilter(client) {
        cy.wait(2000)
        cy.get('[aria-label="Clients: All"]').should('exist').click()
        cy.get('[class*="p-dropdown-panel"]').should('be.visible')
        cy.get('[role="searchbox"]').should('be.visible').clear().type(client).wait(2000)
        cy.get('[role="option"]').should('exist').contains(client).click().wait(1000)
        cy.get('tbody tr td:nth-child(2)').should('exist').and('contain.text', client)
    }
}
