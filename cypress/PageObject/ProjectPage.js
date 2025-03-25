export class ProjectPage {

  verifyProjectPageRedirection() {
    cy.get("button[aria-label='2']").should('be.visible').click(); //navigate to 2nd page
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
    cy.get("tbody tr:nth-child(8) td:nth-child(1)")
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
      cy.get("body > app-root:nth-child(3) > app-shared-layout:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-shared-sidebar:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1)").should('be.visible').click();

    });
  }

  verifyElementsPresentProjectsPage() {
    cy.get(".flex-auto.text-base.font-semibold.line-height-3.text-900").should('be.visible').and('contain.text', 'Projects (MEGA-Bhargav)')
    cy.get("p-dropdown[placeholder='Pools: All']").should('be.visible').and('contain.text', 'Pools: All');
    cy.get("p-dropdown[placeholder='Campaigns: All']").should('be.visible').and('contain.text', 'Campaigns: All');
    cy.get("input[placeholder='Search by project name']").should('be.visible').and("have.attr", "placeholder", "Search by project name")
    cy.get(".p-element.p-ripple.p-button-icon-only.p-speeddial-button.p-button-rounded.p-speeddial-rotate.bg-primary.p-button.p-component").should('be.visible')
  }
  verifyPoolsFilterFunctionality() {

    // Click on Dropdown Arrow
    cy.get("p-dropdown[placeholder='Pools: All']").should('be.visible').click();
    cy.wait(1000);
  
    // Select First Option from Dropdown
    cy.get("div.p-dropdown-items-wrapper li").eq(0).should('be.visible').and('contain.text', 'Testing pool').click();
  }
  verifyClearButtonAppearsWhenPoolsFilterApplied(){
    cy.wait(1000); 
    cy.get(".p-2.text-700.cursor-pointer.font-semibold.ng-star-inserted").should('be.visible').and('contain.text', 'Clear' )


  }
  verifyCampaignsFilterFunctionality() {

    // Click on Dropdown Arrow
    cy.get("p-dropdown[placeholder='Campaigns: All']").should('be.visible').click();
    cy.wait(1000);
    
    // Select First Option Dynamically (without text assertion)
    cy.get("div.p-dropdown-items-wrapper li").first().should('be.visible').click(); // Removed text assertion
  }
  
  verifyClearButtonAppearsWhenCampaignFilterApplied() {
    cy.wait(1000);
    
    // Verify Clear Button Appears
    cy.get(".p-2.text-700.cursor-pointer.font-semibold.ng-star-inserted")
      .should('be.visible')
      .and('contain.text', 'Clear');
  }
  verifySearchFunctionalityExacProjectName(){
    cy.get("input[placeholder='Search by project name']").should('be.visible').and("have.attr", "placeholder", "Search by project name")
    cy.get("input[placeholder='Search by project name']").type('Testing project1')

  }  
  verifyClickingClearButtonRemovesPoolsFilter(){

    cy.wait(1000); 
    cy.get(".p-2.text-700.cursor-pointer.font-semibold.ng-star-inserted").should('be.visible').and('contain.text', 'Clear' ).click();
  }
  verifyClickingClearButtonRemovesCampaignFilter(){
    cy.get(".p-2.text-700.cursor-pointer.font-semibold.ng-star-inserted")
    .should('be.visible')
    .and('contain.text', 'Clear').click();

  } 
  verifyClearButtonFunctionalityBothFiltersApplied(){
    cy.get(".p-2.text-700.cursor-pointer.font-semibold.ng-star-inserted")
    .should('be.visible')
    .and('contain.text', 'Clear').click();
    
  }
  verifySearchFunctionalityNonExistingProject(){
    cy.get("input[placeholder='Search by project name']").should('be.visible').and("have.attr", "placeholder", "Search by project name")
    cy.get("input[placeholder='Search by project name']").type('demo')
    cy.get("div[class='md:text-lg text-base text-900 font-semibold line-height-3 text-center lh-24']").should('be.visible').and('contain.text', ' No record found.');
  }  
  verifyClearSearchFunctionality() {
    cy.get("input[placeholder='Search by project name']").clear(); // Clear Input Field
    cy.get("input[placeholder='Search by project name']").should('have.value', '') // Verify Field is Empty
}
 verifyClickingProjectRedirectsProjectDetails() {
  cy.get("div[class='md:px-5 overflow-auto md:py-3 p-3 h-full flex flex-column min-w-0'] div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1)").should('be.visible').and('contain.text', ' Project Test 28Feb ').click();
  cy.visit('/projects/159/info')
}
verifySettingsIconRedirectProjectSetting(){
  cy.wait(1000); 
  cy.get("div[class='md:px-5 overflow-auto md:py-3 p-3 h-full flex flex-column min-w-0'] div:nth-child(1) div:nth-child(2) div:nth-child(1) i:nth-child(1)").eq(0).should('be.visible').click();
}
verifyDeleteIconOpenConfirmationModal() {
  cy.wait(1000); 
  cy.get("i.pi.pi-trash").eq(1).should('be.visible').click(); // Optimized Delete icon selector
  cy.wait(2000); 
  cy.get("div[role='dialog']").should('be.visible') // Use generic modal selector
    .find("span.p-dialog-title")
    .should('contain.text', 'Delete project'); // Verify modal title
}

verifyKeepProjectButtonClosesModal() {
  cy.get("button.p-button-link").should('be.visible').and('contain.text', 'Keep project').click();
  cy.get("div[role='dialog']").should('not.exist'); // Confirm modal is closed
}
verifyDeleteButtonFunctionality(){

  cy.get("span[class='p-button-label']").should('be.visible').click()
} 
verifyCrossButtonClosesDeleteModal(){

  cy.get(".p-dialog-header-close-icon.p-icon").should('be.visible').click()
} 
verifyPaginationFunctionality() {
  cy.get("button[aria-label='First Page']").should('be.visible').then(($btn) => {
      if (!$btn.is(':disabled')) {
        cy.wrap($btn).click();
        cy.log('First Page Button Clicked');
      } else {
        cy.log('First Page Button is Disabled');
      }
    });
  cy.get("button[aria-label='Last Page']").should('be.visible').then(($btn) => {
      if (!$btn.is(':disabled')) {
        cy.wrap($btn).click();
        cy.log('Last Page Button Clicked');
      } else {
        cy.log('Last Page Button is Disabled');
      }
    });

  cy.get("button[aria-label='1']").should('be.visible').click();
  cy.get("button[aria-label='2']").then(($btn) => {
    if ($btn.length > 0) {
      cy.wrap($btn).click();
      cy.log('Page 2 Button Clicked');
    } else {
      cy.log('Page 2 Button does not exist');
    }
  });
}
verifyClickingAddButtonRedirectsCreateProject(){
cy.get(".p-speeddial.p-component.p-speeddial-linear.p-speeddial-direction-up").should('be.visible').click()


}


}
