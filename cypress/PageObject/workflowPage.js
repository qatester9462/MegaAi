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
        cy.get('[role="option"]').eq(3).should('exist').click({force:true})
        cy.get('.p-dropdown-label').eq(0).should('not.have.class', 'p-placeholder').and('not.contain', 'Select a project');
    }
checkLeadStatuses(){
     cy.get('[class="form-labal"]').contains('Lead Statuses').should('exist')
     cy.get('[class="p-element badge"]').should('exist')
    //  cy.get('[class="p-checkbox-box"]').should('exist').click({multiple:true})
    cy.get('.p-checkbox-box').then(($checkboxes) => {
  const randomIndex = Math.floor(Math.random() * $checkboxes.length);
  cy.wrap($checkboxes[randomIndex]).click();
});

}

clickAddWorkflow(){
    cy.get('[class*="p-element w-full p-button"]').contains('Add Workflow').should('exist').click();
}
validateToastMessage(toastMsg){
    cy.get('[class*="p-toast-message-content"]').contains(toastMsg).should('exist')
}
clickAnyAction(actionName){
     cy.get('[class="form-labal"]').contains('Actions').should('exist')
     cy.get('[type="button"]').contains(actionName).should('exist').click()
}
addAction(actionName){
    cy.get('[class="listGroup-header"]').contains(actionName).should('exist')
    cy.get('[role="combobox"]').eq(1).should('exist').click()
    cy.get('[role="listbox"]').should('exist')
    cy.get('[role="option"]').eq(0).should('exist').click()
}
filterWorkflow(){
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
      // cy.get('[class*="p-dropdown-panel"]').should('exist')
       cy.get('[role="option"]').first().should('exist').click()

  });
}
deleteWorkflow(){
    cy.get('[class*="btn-icon pi"]').should('exist').click();
}
}