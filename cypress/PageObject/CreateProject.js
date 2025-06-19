export class CreateProject {




  gotoProjects() {
    cy.get('.sidebarMenu-items ').should('be.visible').eq(6).click();
    cy.url().should("include", "/projects");
    cy.get('.header-title').contains('Projects').should('exist')
    cy.wait(4000)

  }
  clickOnplusButtonOnProjectPage() {

    cy.get('button.p-speeddial-button')
      .should('be.visible')
      .click();
  }



  // verifyEditButtonClickFunctionality() {
  //   cy.get('[title*="Edit"]').eq(0).should('exist').click(); //navigate to 2nd page
  //   cy.wait(1000);

  //   // Intercept the API request to capture tokens dynamically
  //   cy.intercept('POST', '**/api/accounts/admin-login/**').as('impersonate');

  //   // Override window.open to prevent opening a new tab
  //   cy.window().then((win) => {
  //     cy.stub(win, 'open').as('windowOpen').callsFake((url) => {
  //       win.location.href = url; // Navigate in the same tab
  //     });
  //   });

  //   // Click on the Client Row
  //   cy.get("tbody tr:nth-child(7) td:nth-child(1)")
  //     .should('be.visible')
  //     .click();

  //   // Wait for the API request and get tokens
  //   cy.wait('@impersonate').then((interception) => {
  //     const { access, refresh } = interception.response.body;

  //     // Store both tokens in Local Storage
  //     cy.window().then((win) => {
  //       win.localStorage.setItem('access_token', access);
  //       win.localStorage.setItem('refresh_token', refresh);
  //     });

  //     // Navigate to Dashboard
  //     cy.visit('/dashboard')
  //     cy.url().should('include', '/dashboard');

  //     cy.get("span[class='ng-star-inserted']").should('be.visible').and('contain.text', '(MEGA-Bhargav)');
  //     cy.wait(1000);
  //     cy.get('[class="px-2 relative group ng-star-inserted"] [class*="border-round-sm relative"]').should('be.visible').click();

  //   });
  //   // Use cy command inside the class method
  //   cy.get('[class="p-element ng-star-inserted"]').should('be.visible') //page should be fully loaded
  //   cy.wait(2000)
  //   cy.get('.p-speeddial > .p-ripple').should('be.visible').click(); // Create project icon
  //   cy.url().should('include', '/projects/create');
  // }
  verifyEditButtonClickFunctionality() {
    // cy.get('.p-paginator-page').eq(3).should('exist').click()
    // cy.wait(2000)
    // // Intercept the API request to capture tokens dynamically
    // cy.intercept('POST', '**/api/accounts/admin-login/**').as('impersonate');

    // // Override window.open to prevent opening a new tab
    // cy.window().then((win) => {
    //   cy.stub(win, 'open').as('windowOpen').callsFake((url) => {
    //     win.location.href = url; // Navigate in the same tab
    //   });
    // });
    // cy.get('.p-datatable-table tbody tr td:nth-child(1)').contains(name).should('exist').click()
    // // Wait for the API request and get tokens
    // cy.wait('@impersonate').then((interception) => {
    //   const { access, refresh } = interception.response.body;

    //   // Store both tokens in Local Storage
    //   cy.window().then((win) => {
    //     win.localStorage.setItem('access_token', access);
    //     win.localStorage.setItem('refresh_token', refresh);
    //   });

    //   // Navigate to Dashboard
    //   cy.url().should("include", "/dashboard");
    //   cy.get('.header-title').contains('Dashboard (' + name + ')').should('exist')
    //   cy.wait(4000);
      cy.get('[class="speeddial"]').should('be.visible').click();
      //cy.get("body > app-root:nth-child(3) > app-shared-layout:nth-child(2) > div:nth-child(1) > div:nth-child(1) > app-shared-sidebar:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1)").should('be.visible').click();

    
    // Use cy command inside the class method
    // cy.get('[class="p-element ng-star-inserted"]').should('be.visible') //page should be fully loaded
    cy.wait(2000)
    cy.get('[type="button"]').eq(1).should('be.visible').click(); // Create project icon
    cy.url().should('include', '/projects/create');
  }
  verifyElementsCreateNewProjectPage() {

    cy.get("span[class='ng-star-inserted']").should('be.visible').and('contain.text', '(MEGA-Bhargav)');
  }
  verifyValidInputProjectNameField(projectName) {
    cy.get('input[formcontrolname="projectName"]')
      .should('be.visible')
      .clear()
      .type(projectName)
      .should('have.value', projectName);
  }
  verifyValidInputProjectDescriptionField(description) {
    cy.get('input[formcontrolname="description"]')
      .should('be.visible')
      .clear()
      .type(description)
      .should('have.value', description);
  }
  verifyValidSelectionCampaignTypeDropdown(type) {
    cy.get('p-dropdown[placeholder="Select Campaign Type"]').click();
    cy.get('.p-dropdown-items li').contains(type).click();

    // Wait for dropdown to close
    cy.wait(500); // small wait or you can add .should('not.exist') on dropdown list
  }
  // Now click on Country dropdown
  verifyValidSelectionCountryDropdown() {
    cy.get('p-dropdown[placeholder="Select Country"]').click();
    cy.get('.p-dropdown-items li').contains('Pakistan').click({ force: true });
  }
  verifyValidSelectionTimezoneDropdown() {
    cy.get('[placeholder="Select Timezone"]').should('exist').click()
    cy.get('[role="option"]').contains('Asia/Karachi (UTC +05:00)').should('exist').click()
  }

  // cy.contains('button', 'Cancel').should('be.visible').and('not.be.disabled');
  //cy.contains('button', 'Next Step').should('be.disabled');
  clickNextButton() {
    cy.get('[type="button"]').contains('Next Step').should('exist').click({ force: true })
  }


  VerifyNextStepButtonEnabledAfteFillingAllFields() {
    cy.contains('button', 'Next Step').should('be.enabled');

  }

  VerifyCancelButtonFunctionality() {

    cy.contains('button', 'Cancel').should('be.visible').click();
    cy.url('include', '/Projects')

  }

  verifyBrowserRefreshClearsData() {
    cy.reload();
    cy.get('#projectName').should("be.visible").and("have.attr", "placeholder", "Enter Project Name");
    cy.get('#projectName').should('have.value', '');
    cy.get('#description').should('be.visible').and("have.attr", "placeholder", "Enter Project Description");
    cy.get('#description').should('have.value', '');
    cy.get("p-dropdown[placeholder='Select Campaign Type']").should('have.value', '');
    cy.get("p-dropdown[placeholder='Select Country']").should('have.value', '');
    cy.get("p-dropdown[placeholder='Select Timezone']").should('have.value', '');
  }
  verifyProjectDescriptionFieldOptional() {
    cy.get("button[class='p-element bg-teal-700 border-0 font-semibold p-button p-component'] span[class='ng-star-inserted']").should('be.visible').click();
  }


  validatePoolsStep(projectName, projectDescription, campaignType, country, timezone) {
    // cy.get('.p-paginator-page').eq(3).should('exist').click()
    // cy.get('.p-datatable-table tbody tr td:nth-child(1)').contains(name).should('exist').click()
    // cy.url().should("include", "/dashboard");
    // cy.get('.header-title').contains('Dashboard (MEGA-Bhargav)').should('exist')
    cy.get('[class="sidebarMenu-icon ng-star-inserted"]').eq(4).should('exist').click()
    cy.url().should("include", "/projects");
    cy.get('.header-title').contains('Projects (MEGA-Bhargav)').should('exist')
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
  clickButton(buttonName) {
    cy.get('.p-ripple.p-element').contains(buttonName).should('exist').click()
  }
  selectGoal() {
    cy.url().should("include", "/projects/create/goal");
    cy.wait(3000)
    cy.get('[class="p-steps-number"]').contains('1').should('exist')
    cy.get('.p-steps-title').contains('Goal').should('exist')
    cy.get('[class="p-button-group p-component"] span').contains('Debt Collection').should('exist')
    cy.get('[class="stepCard ng-star-inserted"]').eq(1).should('exist').click()
  }
  selectpool() {
    cy.url().should("include", "/projects/create/pool");
    cy.wait(2000)
    cy.get('.p-datatable-table tbody tr').should('have.length.at.least', 2).then(($rows) => {
      cy.wrap($rows[0]).click();
      cy.wrap($rows[1]).click();
    });
  }
  clickUploadPool() {
    cy.get('.p-button-outlined').contains('Upload Pool').should('exist').click()
    cy.wait(2000)
    cy.get('.header-title').contains('Pool Libraries (MEGA-Bhargav)').should('exist')
  }
  addPoolName(poolName) {
    cy.get('[class="form-labal"]').contains('Pool Name').should('exist')
    cy.get('[id="Enter Pool Name"]').should('exist').clear().type(poolName)
  }
  addPoolDescription(poolDescription) {
    cy.get('[class="form-labal"]').contains('Pool Description').should('exist')
    cy.get('[id="Enter Pool Description"]').should('exist').clear().type(poolDescription)
  }
  selectProject() {
    cy.get('[class="form-labal"]').contains('Project').should('exist')
    cy.get('[aria-label="Select Project"]').should('exist').click()
    cy.get('[role="listbox"]').should('exist')
    cy.get('[role="listbox"] li').eq(3).should('exist').click()
    cy.wait(2000)
  }
  selectCountry() {
    cy.get('[class="form-labal"]').contains('Country').should('exist')
    cy.get('[class*="flex align-items-center"]').should('exist')//selected country
  }
  clickContinue() {
    cy.get('.p-button').contains('Continue to upload').should('exist').click()
  }
  uploadFile(file) {
    cy.get('[class="innerContent-title"]').contains('Upload New List').should('exist')
    cy.get('input[type*="file"]').attachFile(file)
    cy.wait(2000)
  }
  validateFileColumns() {
    cy.get('[class="card"]').eq(0).should('exist')
    cy.get('[class="card-header"]').contains('File Columns').should('exist')
    cy.get('input[type="text"]').should('exist').and('be.disabled')
  }
  validateUploadedCoulmns() {
    cy.get('[class="card"]').eq(1).should('exist')
    cy.get('.justify-content-start').contains('Uploaded Columns').should('exist')
    cy.get('[role="combobox"]').eq(0).should('exist').click()
    cy.get('.p-dropdown-items').contains('First Name').should('exist').click()
    cy.wait(1000)
    cy.get('[role="combobox"]').eq(1).should('exist').click()
    cy.get('.p-dropdown-items').contains('Last Name').should('exist').click()
    cy.wait(1000)
    cy.get('[role="combobox"]').eq(2).should('exist').click()
    cy.get('.p-dropdown-items').contains('Telephone 1').should('exist').click()
    cy.wait(1000)
    cy.get('[role="combobox"]').eq(3).should('exist').click()
    cy.get('.p-dropdown-items').contains('Zipcode').should('exist').click()
    cy.wait(1000)
  }
  clickUploadButton() {
    cy.get('.p-button.p-component').contains('Upload').should('exist').click()
    cy.wait(3000)

  }
  validateUploadedPool(poolName) {
    cy.url().should("include", "/projects/create/pool");
    cy.get('.p-datatable-table tbody tr:nth-child(1) td:nth-child(1)').contains(poolName).should('exist')
  }
  validateScriptStep() {
    cy.url().should("include", "/projects/create/script");
    cy.get('[class="p-steps-number"]').contains('3').should('exist')
    cy.get('[class*="p-steps-title"]').contains('Script').should('exist')
  }
  addFirstMessage(firstMsg) {
    cy.get('[class="card"]').contains('First Message').should('exist')
    cy.get('[placeholder="Select Lead"]').eq(0).should('exist').click()
    cy.get('[role="listbox"] li').eq(0).should('exist').click()
    cy.get('[id="first_message"]').should('exist').clear().type(firstMsg)
  }
  addLastMessage(lastMsg) {
    cy.get('[class="card"]').contains('Last Message').should('exist')
    cy.get('[placeholder="Select Lead"]').eq(1).should('exist').click()
    cy.get('[role="listbox"] li').eq(1).should('exist').click()
    cy.get('[id="first_message"]').should('exist').clear().type(lastMsg)
  }
  selectGender(gender) {
    cy.get('[class="form-labal"]').contains('Gender').should('exist')
    cy.get('[placeholder="Select a gender"]').should('exist').click()
    cy.get('.p-dropdown-panel li').contains(gender).should('exist').click()
  }
  selectVoice() {
    cy.get('[class="form-labal"]').contains('Voice').should('exist')
    cy.get('[aria-label="Select voice"]').should('exist').click()
    cy.get('.p-dropdown-panel li').first().should('exist').click()
  }
  selectDomainLibrary() {
    cy.get('[class="form-labal"]').contains('Domain Library').should('exist')
    cy.get('[aria-label="Select library"]').should('exist').click()
    cy.get('.p-dropdown-panel li').first().should('exist').click()
  }
  addPrompts(systemPrompt) {
    cy.get('[class="card-header"]').contains('System Prompts').should('exist')
    cy.get('.p-inputtextarea').eq(2).should('exist').clear().type(systemPrompt)
  }

  validateSettingStep() {
    cy.url().should("include", "/projects/create/setting");
    cy.get('[class="p-steps-number"]').contains('4').should('exist')
    cy.get('[class*="p-steps-title"]').contains('Setting').should('exist')
  }
  setCampaignPriority() {
    cy.wait(1000)
    cy.get('[class="form-labal"]').contains('Campaign Priority').should('exist')
    cy.get('.p-slider').eq(0).click()
  }
  setNumberofBots() {
    cy.wait(1000)
    cy.get('[class="form-labal"]').contains('Number of Bots').should('exist')
    cy.get('.p-slider').eq(1).click()
    cy.get('[class="form-labal"]').contains('Bot Functions:').should('exist')
  }
  selectSMSTemplate() {
    cy.get('[class="form-labal"]').contains('SMS Template Used in Call').should('exist')
    cy.get('[role="combobox"]').eq(0).should('exist').click()
    cy.get('[class="p-dropdown-items-wrapper"]').should('exist')
    cy.get('[role="option"]').eq(0).should('exist').click()
  }
  selectCallNumber() {
    cy.get('[class="form-labal"]').contains('Transfer Calls to').should('exist')
    cy.get('[role="combobox"]').eq(1).should('exist').click()
    cy.get('[class="p-dropdown-items-wrapper"]').should('exist')
    cy.get('[role="option"]').eq(0).should('exist').click()
  }
  validatedialingStep() {
    cy.url().should("include", "/projects/create/dialing");
    cy.get('[class="p-steps-number"]').contains('5').should('exist')
    cy.get('[class*="p-steps-title"]').contains('Dialing').should('exist')
  }
  setStatusToggles() {
    cy.get('.p-datatable-wrapper table tbody td:nth-child(4)').should('exist')
    //Turn OFF all checked toggles
    cy.get('.p-inputswitch.p-component.p-inputswitch-checked').each(($el) => {
      cy.wrap($el).click()
    });
    // Validate all toggles are OFF
    cy.get('.p-inputswitch.p-component.p-inputswitch-checked').should('not.exist')
    cy.get('.p-inputswitch.p-component').should('have.length', 7)
    // Turn ON all toggles again
    cy.get('.p-inputswitch.p-component').each(($el) => {
      cy.wrap($el).click()
    });
    //Validate all toggles are ON again
    cy.get('.p-inputswitch.p-component.p-inputswitch-checked').should('have.length', 7)
  }
  validateTable() {
    cy.get('.p-datatable-wrapper table thead tr th:nth-child(1)').contains('Day').should('exist')
    cy.get('.p-datatable-wrapper table thead tr th:nth-child(2)').contains('Start').should('exist')
    cy.get('.p-datatable-wrapper table thead tr th:nth-child(3)').contains('Stop').should('exist')
    cy.get('.p-datatable-wrapper table thead tr th:nth-child(4)').contains('Status').should('exist')
    cy.get('.p-datatable-wrapper table tbody tr').should('exist').and('have.length', 7)
  }
  setHours() {
    cy.get('[class="form-labal"]').contains('Hours between Redials to unanswered calls').should('exist')
    cy.get('.p-slider').eq(0).click()
  }
  addMaxDays(days) {
    cy.get('[class="form-labal"]').contains('Max. Days ahead for scheduling Redials:').should('exist')
    cy.get('[placeholder="Enter days"]').should('exist').clear().type(days)
  }
  addTotalAttempts(attempts) {
    cy.get('[class="form-labal"]').contains('Max. Total Attempts:').should('exist')
    cy.get('[placeholder="Enter no. of attempts"]').should('exist').clear().type(attempts)
  }
  validateReviewStep(projectName) {
    cy.url().should("include", "/projects/create/review");
    cy.get('[class="p-steps-number"]').contains('6').should('exist')
    cy.get('[class*="p-steps-title"]').contains('Review').should('exist')
    cy.get('[class="form-labal"]').contains('Project Name').should('exist')
    cy.get('[id="projectName"]').should('be.disabled').invoke('val').should('eq', projectName)
  }
  validateEditGoal() {
    cy.get('[class*="card-title"]').contains('Goal').should('exist')
    cy.get('[class="card-icon"]').eq(1).should('exist').click()
    cy.url().should("include", "/projects/create/goal");
    cy.wait(3000)
    cy.get('[class="p-steps-number"]').contains('1').should('exist')
    cy.get('.p-steps-title').contains('Goal').should('exist')
    cy.get('[class="p-button-group p-component"] span').contains('Debt Collection').should('exist')
    cy.get('[class="stepCard-wrap ng-star-inserted"]').contains('Debt handling').should('exist').click()
  }

  validateEditPool() {
    cy.get('.card-title').contains('Pools').should('exist')
    cy.get('[class="card-icon"]').eq(2).should('exist').click()
    cy.url().should("include", "/projects/create/pool");
    cy.wait(2000)
    cy.get('.p-datatable-table tbody tr').should('have.length.at.least', 2).then(($rows) => {
      cy.wrap($rows[0]).click();
      cy.wrap($rows[1]).click();
      // cy.wrap($rows[2]).click();
    });
  }
  validateEditScript() {
    cy.get('.card-title').contains('Script').should('exist')
    cy.get('[class="card-icon"]').eq(2).should('exist').click()
    cy.url().should("include", "/projects/create/script");
    cy.get('[class="p-steps-number"]').contains('3').should('exist')
    cy.get('[class*="p-steps-title"]').contains('Script').should('exist')
  }
  validateToastMessage(toastMsg) {
    cy.get('[class*="p-toast-message-text"]').contains(toastMsg).should('exist').wait(1000)
  }
  deleteProject() {
    cy.url().should("include", "/projects");
    cy.get('[class="innerContent-title"]').contains('Project Overview').should('exist')
    cy.get('[class="pi pi-trash"]').first().should('exist').click()
    cy.get('[class*="p-element ng-trigger"]').contains('Delete project').should('exist')
    cy.get('[class="p-button-label"]').contains('Delete').should('exist').click()
  }
  uploadLogo(file) {
    cy.get('.projectList-items').should('exist').first().click()
    cy.url().should("include", "/projects/").and('include', '/info');
    cy.wait(3000)
    cy.get('body').then(($body) => {
      if ($body.find('[class*="pi pi-upload"]').length > 0) {
        cy.get('[class*="pi pi-upload"]').should('exist');
        cy.get('input[type="file"]').attachFile(file);
        cy.wait(2000);
        cy.log('Logo Uploaded');
      } else {
        cy.log('Upload icon not found.');
      }
    })
  }

  deleteLogo() {
    cy.get('.projectList-items').should('exist').first().click();
    cy.url().should('include', '/projects/').and('include', '/info');
    cy.wait(3000);
    cy.get('body').then(($body) => {
      if ($body.find('[class*="pi pi-trash"]').length > 0) {
        cy.get('[class*="pi pi-trash"]').click();
        cy.log('Logo Deleted');
        // } else if ($body.find('[class*="pi pi-upload"]').length > 0) {
        //   // Upload icon is present, so upload the file
        //   cy.get('[class*="pi pi-upload"]').should('exist');
        //   cy.get('input[type="file"]').attachFile(file);
        //   cy.wait(2000);
        //   cy.log('Logo uploaded');
      } else {
        cy.log('Delete icon not found');
      }
    });
  }

}
