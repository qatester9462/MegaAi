export class CreateProject {

  verifyEditButtonClickFunctionality() {
    cy.get('[title*="Edit"]').eq(0).should('exist').click(); //navigate to 2nd page
    cy.wait(1000);

    // Intercept the API request to capture tokens dynamically
    cy.intercept('POST', '**/api/accounts/admin-login/**').as('impersonate');

    // Override window.open to prevent opening a new tab
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen').callsFake((url) => {
        win.location.href = url; // Navigate in the same tab
      });
    });

    // Click on the Client Row
    cy.get("tbody tr:nth-child(7) td:nth-child(1)")
      .should('be.visible')
      .click();

    // Wait for the API request and get tokens
    cy.wait('@impersonate').then((interception) => {
      const { access, refresh } = interception.response.body;

      // Store both tokens in Local Storage
      cy.window().then((win) => {
        win.localStorage.setItem('access_token', access);
        win.localStorage.setItem('refresh_token', refresh);
      });

      // Navigate to Dashboard
      cy.visit('/dashboard')
      cy.url().should('include', '/dashboard');

      cy.get("span[class='ng-star-inserted']").should('be.visible').and('contain.text', '(MEGA-Bhargav)');
      cy.wait(1000);
      cy.get('[class="px-2 relative group ng-star-inserted"] [class*="border-round-sm relative"]').should('be.visible').click();

    }); 
    // Use cy command inside the class method
    cy.get('[class="p-element ng-star-inserted"]').should('be.visible') //page should be fully loaded
    cy.wait(2000)
    cy.get('.p-speeddial > .p-ripple').should('be.visible').click(); // Create project icon
    cy.url().should('include', '/projects/create');
  }
  verifyElementsCreateNewProjectPage(){

    cy.get("span[class='ng-star-inserted']").should('be.visible').and('contain.text', '(MEGA-Bhargav)');
  }
  verifyValidInputProjectNameField(){
    cy.get('#projectName').should("be.visible").and("have.attr", "placeholder", "Enter Project Name");
    cy.get('#projectName').should("be.visible").type('My New Project');
        
  }
  verifySpecialCharactersProjectNameField(){
    cy.get('#projectName').should("be.visible").and("have.attr", "placeholder", "Enter Project Name");
    cy.get('#projectName').should("be.visible").type('!@#$%^&*()"');
        
  }
  verifyErrorMessageEmptyProjectNameField(){
    cy.get('#projectName').should("be.visible").and("have.attr", "placeholder", "Enter Project Name");
    cy.get('#projectName').should("be.visible").click();
    cy.get('#description').should('be.visible').click();
    cy.get('.error').should('be.visible').and ('contain.text', 'Enter Project Name')
  }        
  verifyValidInputProjectDescriptionField(){
    cy.get('#description').should('be.visible').and("have.attr", "placeholder", "Enter Project Description");
    cy.get('#description').should('be.visible').type('Project management with real-time tracking');
  }        
  verifyValidSelectionCampaignTypeDropdown(){
    cy.get("p-dropdown[placeholder='Select Campaign Type']").should('be.visible').click();
    cy.get('[class="p-ripple p-element p-dropdown-item"]').should('be.visible').eq(0).click();

  }
  verifyValidSelectionCountryDropdown(){
    cy.get("p-dropdown[placeholder='Select Country']").should('be.visible').click();
    cy.get('[class="flex align-items-center ng-star-inserted"]').should('be.visible').eq(0).click();
  }
  verifyValidSelectionTimezoneDropdown(){
    cy.wait(2000)
    cy.get("p-dropdown[placeholder='Select Timezone']").should('be.visible').click().wait(1000);
    cy.get('#pn_id_19_0').should('exist').click({force:true});

  }
  verifyNextStepButtonEnabled(){
    cy.get("button[class='p-element bg-teal-700 border-0 font-semibold p-button p-component'] span[class='ng-star-inserted']").should('be.visible').click();

  }
  verifyCancelButtonFunctionality(){
    cy.get('.p-button-label').should('be.visible').click();
    cy.url().should('include', '/projects');
    cy.get("span[class='ng-star-inserted']").should('be.visible').and('contain.text', '(MEGA-Bhargav)');

  }
  verifyBrowserRefreshClearsData(){
    cy.reload();
    cy.get('#projectName').should("be.visible").and("have.attr", "placeholder", "Enter Project Name");
    cy.get('#projectName').should('have.value', '');
    cy.get('#description').should('be.visible').and("have.attr", "placeholder", "Enter Project Description");
    cy.get('#description').should('have.value', '');
    cy.get("p-dropdown[placeholder='Select Campaign Type']").should('have.value', '');
    cy.get("p-dropdown[placeholder='Select Country']").should('have.value', '');
    cy.get("p-dropdown[placeholder='Select Timezone']").should('have.value', '');
  }
  verifyProjectDescriptionFieldOptional(){
    cy.get("button[class='p-element bg-teal-700 border-0 font-semibold p-button p-component'] span[class='ng-star-inserted']").should('be.visible').click();
  }
}
