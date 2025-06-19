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



  verifyProjectLabel() {
    cy.contains('Projects').should('be.visible')
    cy.contains('All Projects').should('be.visible')
  }

  verifyDropdowns() {
    cy.contains('Pools: All').should('be.visible')
    cy.wait(1000)
    cy.contains('Campaigns: All').should('be.visible')
  }

  verifySearchField() {
    cy.get('input[placeholder="Search by project name"]').should('exist')
  }

  verifyCreateProjectButton() {
    cy.get('.p-speeddial-button').should('be.visible')
  }

  verifyProjectList() {
    cy.get('.projectList-items').should('have.length.greaterThan', 0)
  }

  verifySettingsAndDelete() {
    cy.get('.pi-cog').should('exist')
    cy.get('.pi-trash').should('exist')
  }

  verifyPagination() {
    cy.get('.p-paginator').should('exist')
  }


  openPoolsDropdown() {
    cy.contains('Pools: All').click({ force: true })
  }

  openCampaignsDropdown() {
    cy.contains('Campaigns: All').click({ force: true })
  }
  selectFirstCampaign() {

    cy.get('p-dropdown[placeholder="Campaigns: All"] .p-dropdown-trigger', { timeout: 10000 }) // wait up to 10 seconds
      .should('be.visible')
      .click({ force: true })

    // Wait for dropdown options to render (optional but sometimes needed)
    cy.wait(500)

    // Select the first item from the list
    cy.get('.p-dropdown-items-wrapper li')
      .should('be.visible')
      .first()
      .click({ force: true })
  }
  selectPoolByIndex(index) {
    cy.get('li[role="option"]').eq(index).click({ force: true })
  }

  selectCampaignByIndex(index) {
    this.openCampaignsDropdown()
    cy.get('li[role="option"]').eq(index).click({ force: true })
  }

  verifyProjectsFiltered() {
    cy.get('.projectList-items').should('have.length.greaterThan', 0)
  }

  verifyClearButtonVisible() {
    cy.contains('Clear').should('be.visible')
  }

  searchByProjectName(name) {
    cy.get('input[placeholder="Search by project name"]').type(name)
  }

  clearSearchField() {
    cy.get('input[placeholder="Search by project name"]').clear()
  }

  verifySearchedProjectVisible(name) {
    cy.contains(name).should('be.visible')
  }

  clearFilters() {
    cy.contains('Clear').click({ force: true })
  }

  verifyAllProjectsVisible() {
    cy.get('.projectList-items').should('have.length.greaterThan', 0)
  }


  deleteProjects() {
    cy.get('.pi-trash').each(($el, index) => {
      if (index < 8) {
        cy.wrap($el).click({ force: true });
      }
    });
  }

  confirmDelete() {
    cy.get('span[class="p-button-label"]').click({ force: true })
  }

  closeDeleteModal() {
    cy.get('.p-dialog-header-icons > .p-ripple').click()
  }

  verifyProjectDeleted() {
    cy.get('.p-toast-top-center').contains('Success').should('exist')
  }

  verifyProjectStillVisible() {
    cy.get('.projectList-items').should('have.length.greaterThan', 0)
  }

  goToNextPage() {
    cy.get('.p-paginator-next').click({ force: true })
  }

  goToPreviousPage() {
    cy.get('.p-paginator-prev').click({ force: true })
  }

  clickSpecificPage(number) {
    cy.contains('button', `${number}`).click({ force: true })
  }

  verifyPageNumber(number) {
    cy.contains('button.p-highlight', `${number}`).should('exist')
  }

  gotoClient(name) {
     const searchAndClick = () => {
      cy.get('.p-datatable-table tbody tr td:nth-child(1)').then($cells => {
        const found = [...$cells].some(cell => cell.innerText.trim() === name);
        if (found) {
          cy.get('.p-datatable-table tbody tr td:nth-child(1)').contains(name).should('exist').click();
          cy.url().should('include', '/dashboard');
          cy.get('.header-title').contains('Dashboard (' + name + ')').should('exist');
        } else {
          cy.get('.p-paginator-next').then($next => {
            if (!$next.hasClass('p-disabled')) {
              cy.wrap($next).click({ force: true });
              cy.wait(4000);
              searchAndClick();
            } else {
              throw new Error(`Client with name '${name}' not found on any page.`);
            }
          });
        }
      });
    };
    searchAndClick();
  }

  gotoProjectsPage(name) {
    cy.get('.sidebarMenu-items ').should('be.visible').eq(6).click();
    cy.url().should("include", "/projects");
    cy.get('.header-title').contains('Projects (' + name + ')').should('exist')
    cy.get('.projectItems-details').eq(1).click()
    cy.get('[class="header-title"]').should('contain.text', 'Project')
    cy.url().should("include", "/projects/").and('include', '/info');

  }
  validateEditBasicInfo(name, country, timezone) {
    cy.get('[role="tab"]').eq(0).contains('Basic Info').should('exist')
    cy.get('[id="projectName"]').should('exist').clear().type(name)
    cy.get('[id="country"]').should('be.disabled').invoke('val').should('eq', country)
    cy.get('[id="timezone"]').should('be.disabled').invoke('val').should('eq', timezone)
  }
  validateEditGoal() {
    cy.get('[role="tab"]').eq(1).contains('Goals').should('exist').click()
    cy.url().should("include", "/projects/").and('include', '/goals');
    cy.wait(2000)
    cy.get('[class="p-button-group p-component"] span').contains('Debt Collection').should('exist')
    cy.get('[class="stepCard ng-star-inserted"]').eq(0).contains('Debt handling').should('exist').click()
  }
  validateEditGoall() {
    cy.get('[role="tab"]').eq(1).contains('Goals').should('exist').click()
    cy.url().should("include", "/projects/").and('include', '/goals');
    cy.wait(2000)
    cy.get('[class="p-button-group p-component"] span').contains('Debt Collection').should('exist').click()
    cy.wait(3000);
    cy.get('[class="stepCard ng-star-inserted"]').contains('Debt handling')
      .should('be.visible')
      .click();
    cy.get('.p-button-label').contains('Save').click()
  }
  validateEditPools() {
    cy.get('[role="tab"]').eq(2).contains('Pools').should('exist').click()
    cy.url().should("include", "/projects/").and('include', '/pools');
    cy.wait(4000)
    cy.get('.p-datatable-table tbody tr').should('have.length.at.least', 2).then(($rows) => {
      cy.wrap($rows[0]).click();
      cy.wrap($rows[1]).click();
    })
  }
  verifyEditAgent() {
    cy.get('[role="tab"]').eq(2).contains('Agent Personality').should('exist').click()
    cy.url().should("include", "/projects/").and('include', '/script');
    cy.wait(2000)
    cy.get('[class="stepCard ng-star-inserted"]').eq(3).should('exist').click()
    cy.get('.stepCard.ng-star-inserted').eq(3).should('have.class', 'active');
  }
  validateEditScipts(firstMsg, lastMsg, prompt) {
    cy.get('[role="tab"]').eq(3).contains('Script').should('exist').click()
    cy.url().should("include", "/projects/").and('include', '/scripts');
    cy.wait(2000)
    cy.get('[class="card"]').contains('First Message').should('exist')
    cy.get('[placeholder="Select Lead"]').eq(0).should('exist').click()
    cy.get('[role="listbox"] li').eq(0).should('exist').click()
    cy.get('[id="first_message"]').should('exist').clear().type(firstMsg)
    cy.get('[class="card"]').contains('Last Message').should('exist')
    cy.get('[placeholder="Select Lead"]').eq(1).should('exist').click()
    cy.get('[role="listbox"] li').contains('Last Name').should('exist').click()
    cy.get('[id="last_message"]').should('exist').clear().type(lastMsg)
    cy.get('[class="form-labal"]').contains('Gender').should('exist')
    cy.get('[aria-label="Select a Gender"]').should('exist').click()
    cy.get('[role="option"]').contains('female').should('exist').click()
    cy.get('[class="form-labal"]').contains('Voice').should('exist')
    cy.get('[aria-label="Select voice"]').should('exist').click()
    cy.get('[role="option"]').contains('Olivia').should('exist').click()
    cy.get('[class="card-title"]').contains('System Prompts').should('exist')
    cy.get('[class="card-body"]').eq(2).should('exist').clear().type(prompt)

  }
  validateEditSettings() {
    cy.get('[role="tab"]').eq(3).contains('Settings').should('exist').click()
    cy.url().should("include", "/projects/").and('include', '/settings');
    cy.wait(2000)
    cy.get('[class="form-labal"]').contains('Campaign Priority').should('exist')
    cy.get('.p-slider').eq(0).click()
    cy.get('[class="form-labal"]').contains('Number of Bots').should('exist')
    cy.get('.p-slider').eq(1).click()
  }
  validateEditDialing() {
    cy.get('[role="tab"]').eq(4).contains('Dialing').should('exist').click()
    cy.url().should("include", "/projects/").and('include', '/dialings');
    cy.wait(2000)
    cy.get('[class*="text-sm"]').contains('Hours between Redials to unanswered calls').should('exist')
    cy.get('.p-slider').eq(0).click()
  }
  validateDeleteProject() {
    cy.get('[aria-label="Actions"]').contains('Actions').should('exist').click()
    cy.get('[role="option"]').contains('Delete project').should('exist').click()
    cy.get('[class*="p-element ng-trigger"]').contains('Delete Project').should('exist')
    cy.get('[class="p-button-label"]').contains('Delete').should('exist').click()

  }
}
