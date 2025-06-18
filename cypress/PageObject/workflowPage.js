export class WorkflowPage {
    gotoWorkflow(name) {
        cy.get('.sidebarMenu-items ').should('be.visible').eq(7).click();
        cy.url().should("include", "/workflow");
        cy.get('.header-title').contains('Workflow (' + name + ')').should('exist')
    }
    addWorkflowName(workflowName) {
        cy.get('[class="form-labal"]').contains('Workflow Name').should('exist')
        cy.get('#workflow-name').should('exist').clear().type(workflowName)
    }
    selectProject() {
        cy.get('[class="form-labal"]').contains('Project').should('exist')
        cy.get('[aria-label="Select a project"]').should('exist').click()
        cy.get('[role="listbox"]').should('exist')
        cy.get('[role="option"]').eq(1).should('exist').click({ force: true })
        cy.get('.p-dropdown-label').eq(0).should('not.have.class', 'p-placeholder').and('not.contain', 'Select a project');
    }
    checkLeadStatuses() {
        cy.get('[class="form-labal"]').contains('Lead Statuses').should('exist')
        cy.get('[class="p-element badge"]').should('exist')
        //  cy.get('[class="p-checkbox-box"]').should('exist').click({multiple:true})
        cy.get('.p-checkbox-box').then(($checkboxes) => {
            const randomIndex = Math.floor(Math.random() * $checkboxes.length);
            cy.wrap($checkboxes[randomIndex]).click();
        });

    }

    clickAddWorkflow() {
        cy.get('[class*="p-element w-full p-button"]').contains('Add Workflow').should('exist').click();
    }
    validateToastMessage(toastMsg) {
        cy.get('[class*="p-toast-message-content"]').contains(toastMsg).should('exist')
    }
    clickAnyAction(actionName) {
        cy.get('[class="form-labal"]').contains('Actions').should('exist')
        cy.get('[type="button"]').contains(actionName).should('exist').click()
    }
    addAction(actionName) {
        cy.get('[class="listGroup-header"]').contains(actionName).should('exist')
        cy.get('[role="combobox"]').eq(1).should('exist').click()
        cy.get('[role="listbox"]').should('exist')
        cy.get('[role="option"]').eq(0).should('exist').click()
    }
    filterWorkflow() {
        cy.get('[class="card-title"]').contains('Configured Workflows').should('exist')
        cy.get('[class="form-labal"]').contains('Filter by Project').should('exist')
        cy.get('[placeholder="All projects"]').should('exist').click()
        cy.get('.listItems-title.flex-grow-0').eq(0).invoke('text').then((text) => {
            cy.log('Extracted text:', text);
            cy.get('[role="searchbox"]')
                .should('exist')
                .clear()
                .type(text.trim());

            cy.get('[class*="p-dropdown-panel"]').should('exist')
            cy.get('[role="option"]').eq(1).should('exist').click()
            cy.wait(4000)
        });
    }
    deleteWorkflow() {
        cy.get('[class*="btn-icon pi"]').should('exist').click({ multiple: true });
    }
    addandDeleteAllActions() {
        cy.get('[class*="p-ripple p-element"]').contains('Add Send SMS').should('exist').click()
        cy.get('[class="listGroup-header"]').contains('Send SMS').should('exist')
        cy.get('[aria-label="Select Send SMS"]').should('exist').click()
        cy.get('[role="option"]').eq(0).should('exist').click()

        cy.get('[class*="p-ripple p-element"]').contains('Add API Request').should('exist').click()
        cy.get('[class="listGroup-header"]').contains('API Request').should('exist')
        cy.get('[aria-label="Select API Request"]').should('exist').click()
        cy.get('[role="option"]').eq(0).should('exist').click()

        cy.get('[class*="p-ripple p-element"]').contains('Add Update CRM').should('exist').click()
        cy.get('[class="listGroup-header"]').contains('Update CRM').should('exist')
        cy.get('[aria-label="Select Update CRM"]').should('exist').click()
        cy.get('[role="option"]').eq(0).should('exist').click()

        cy.get('[class*="p-ripple p-element"]').contains('Add Forward Call').should('exist').click()
        cy.get('[class="listGroup-header"]').contains('Forward Call').should('exist')
        cy.get('[aria-label="Select Forward Call"]').should('exist').click()
        cy.get('[role="option"]').eq(0).should('exist').click()

        cy.get('[class*="btn-icon pi"]').should('exist').click({ multiple: true })

    }
    checkNewLeadStatus() {
        cy.get('[class="p-checkbox-box"]').eq(0).should('exist').click()
    }
    checkTechnicalProbLeadStsus() {
        cy.get('[class="p-checkbox-box"]').eq(1).should('exist').click()
    }
    checkBusyLineLeadStatus() {
        cy.get('[class="p-checkbox-box"]').eq(2).should('exist').click()
    }
    checkAutomaticRedialLeadStatus() {
        cy.get('[class="p-checkbox-box"]').eq(3).should('exist').click()
    }
    checkClosedDeclinedLeadStatus() {
        cy.get('[class="p-checkbox-box"]').eq(8).should('exist').click()
    }
    checkContactNoOutcomeLeadStatus() {
        cy.get('[class="p-checkbox-box"]').eq(11).should('exist').click()
    }
    checkProcessingLeadStatus() {
        cy.get('[class="p-checkbox-box"]').eq(17).should('exist').click()
    }
    validateLeadStatuses(status) {
        cy.get('[class*="listGroup overflow-visible"]').should('exist')
        cy.get('[class="listItems-title"]').contains('Status').should('exist')
        cy.get('[class="badge"]').contains(status).should('exist')
    }
}