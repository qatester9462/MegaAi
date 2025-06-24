export class ClientsPage {

  clickonclients() {
    cy.get('[class="pi pi-users sidebarMenu-icon ng-star-inserted"]')
      .should("be.visible").click()
      cy.wait(3000)
  }

  verifyClientsPage() {
    cy.url().should("include", "/clients"); 
    cy.get(".header-title").should("be.visible").and('contain.text', 'Clients') 
  }

  validateClientspage() {
    cy.get('[class="innerContent-title"]').should("be.visible").and("contain.text", "All Clients");
    cy.get("span[aria-label='Country: All']").should("be.visible").and('contain.text', 'Country: All')
    cy.get("p-dropdown[placeholder='Status: All']").should("be.visible").and('contain.text', 'Status: All')
    cy.get("plusicon[class='p-element p-icon-wrapper ng-star-inserted'] svg").should('be.visible')
    cy.get("span[class='font-semibold']").should('be.visible').and('contain.text', 'New Client Creation')
  }
  verifyTableHeaders() {
    cy.get("table", { timeout: 10000 }).should("be.visible");

    cy.get("th.p-element.p-frozen-column", { timeout: 10000 }).should("be.visible").and('contain.text', 'Name')
    cy.get("body app-root th:nth-child(2)", { timeout: 10000 }).should("be.visible").and('contain.text', 'Client Type')
    cy.get("body app-root th:nth-child(3)", { timeout: 10000 }).should("be.visible").and('contain.text', 'Country')
    cy.get("body app-root th:nth-child(4)", { timeout: 10000 }).should("be.visible").and('contain.text', 'Status')
    cy.get("body app-root th:nth-child(5)", { timeout: 10000 }).should("be.visible").and('contain.text', 'Created At')
    cy.get("body app-root th:nth-child(6)", { timeout: 10000 }).should("be.visible").and('contain.text', 'Updated At')
    cy.get("body app-root th:nth-child(7)", { timeout: 10000 }).should("be.visible").and('contain.text', 'Disabled At')
    cy.get("body app-root th:nth-child(8)", { timeout: 10000 }).should("be.visible").and('contain.text', 'Action')
    // cy.get("i[title='Edit morten1']").should("be.visible")
    // cy.get("i[title='morten1 Connect']").should("be.visible")
    // cy.get("i[title='Delete morten1']").should("be.visible")
  }
  VerifyCreateClientFormButtonFunctionality() {
    cy.get(".p-element.p-ripple.p-button-icon-only.p-speeddial-button.p-button-rounded.p-speeddial-rotate.bg-primary.p-button.p-component").click()
  }
  verifyElementsCreateClientForm() {
    cy.get(".font-semibold.text-base.ng-star-inserted").should('be.visible').and('contain.text', 'Create Client')
    cy.get("input[placeholder='Enter Client Name']").should('be.visible').and('have.attr', 'placeholder', 'Enter Client Name');
    cy.get("p-dropdown[placeholder='Select Client Type']").should('be.visible').and('have.attr', 'placeholder', 'Select Client Type')
    cy.get("p-dropdown[placeholder='Select Country']").should('be.visible').and('have.attr', 'placeholder', 'Select Country')
    cy.get("span[class='flex align-items-center gap-2']").should('be.visible').and('contain.text', 'Create')
  }

  verifyClientCreation(clientName, clientType, country) {
    cy.get("input[placeholder='Enter Client Name']").type(clientName);
    cy.wait(1000)
    cy.get("p-dropdown[placeholder='Select Client Type']").click(); 
    cy.get('[class*="p-element ng-star-inserted"] li').contains(clientType).click()
    cy.wait(1000)
    cy.get("p-dropdown[placeholder='Select Country']").click(); 
    cy.get(`li[aria-label="${country}"]`).click()
    cy.get('button').contains('Create').click();
  }

  verifyRedirectionAfetrClientCreation() {
    cy.wait(1000)
    cy.url().should('include', '/clients'); 
    cy.get(".flex-auto.text-base.font-semibold.line-height-3.text-900").should("be.visible").and('contain.text', 'Clients') 
  }

  verifyCreateClientWithoutFillingFields() {
    cy.wait(2000)
    cy.get('button').contains('Create').click() 
    cy.get('[class="error"]').eq(0).should('be.visible').and ('contain.text', 'Enter Client Name')
   cy.get('[class="error"]').eq(1).should('be.visible').and ('contain.text', 'Select Client Type')
   cy.get('[class="error"]').eq(2).should('be.visible').and ('contain.text', 'Select Country') 
  }
  verifyElementsUnderActionLabel() {
  cy.get('[class*="pi pi-pencil"]').should("be.visible")
  cy.get('[class*="pi pi-cog"]').should("be.visible")
  cy.get('[class*="pi pi-trash"]').should("be.visible")

  }

  verifyEditButtonClickFunctionality() {
    cy.wait(1000)
    cy.get("[class$='pi pi-pencil cursor-pointer']").eq(0).should("be.visible").click();
    cy.url().should("include", "/clients");
    cy.get(".font-semibold.text-base.ng-star-inserted").should("be.visible").and("contain.text", "Update Client")
    cy.get('[class*="p-element p-button"]').contains('Update').should('exist').click()
    cy.get('.p-toast-top-center').contains('Client updated successfully').should('exist')
  }

}