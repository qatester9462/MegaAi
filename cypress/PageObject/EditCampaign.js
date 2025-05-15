export class EditCampaigns {


    clickOnFirstCampaign(CampName) {

        cy.get('table.p-datatable-table').should('be.visible');
        // Click on campaign row by name
        cy.contains('td', CampName)
            .should('be.visible')
            .click();
    }

    verifyOnlyNameFieldIsEditable() {

        cy.get('#Name').should('exist').and('be.enabled');
        // Check other fields are disabled
        cy.get('#Project').should('exist').and('be.disabled');
        cy.get('#Campaign').should('exist').and('be.disabled');
        cy.get('#country').should('exist').and('be.disabled');
        cy.get('#timezone').should('exist').and('be.disabled');
    }
    verifyNameFieldAcceptsValidData() {

        const newCampaignName = 'testing';
        cy.get('#Name')
            .clear()
            .type(newCampaignName)
            .should('have.value', newCampaignName);
        cy.contains('button', 'Save').should('be.visible').click();
        cy.contains('div.p-button span.p-button-label', 'Pause').should('be.visible').click();
        //  Wait for UI to reflect the update
        cy.get('nav').should('contain.text', newCampaignName); // breadcrumb fallback

    }

    verifyNameFieldMandotoryValidation() {
        cy.get('#Name')
            .clear()
        cy.contains('button', 'Save').should('be.visible').click();
        cy.get('.p-toast.p-component.ng-tns-c1067615279-0.p-toast-top-center').should('exist')


    }
    verifyRedirectionToGoalsPage() {

        cy.contains('.p-tabview-title', 'Goals').should('be.visible').click()
    }

    verifyUiElementsOnGoalsPage() {

        cy.contains('span.p-button-label', 'Debt Collection').should('be.visible');
        cy.contains('span.p-button-label', 'Discover').should('be.visible');
        cy.contains('span.p-button-label', 'Connect').should('be.visible');

        //  Goal card or section
        cy.get('.stepCard-title').should('exist').and('be.visible');
        cy.get('.stepCard-text').should('exist');

        //  Pagination controls
        cy.get('.p-paginator').should('be.visible');
        cy.get('.p-paginator-pages').should('exist');

        //  Save button
        cy.contains('span.p-button-label', 'Save').should('be.visible');
    }

    verifyGoalChangeInEditCampaign() {


        cy.contains('span.p-button-label', 'Debt Collection').click();

        // Step 5: Confirm that "Debt Collection" is now active
        cy.contains('button', 'Debt Collection')
            .should('be.visible')
            .click()
            .should('have.class', 'p-button-raised');

        // Step 6: Click the Save button
        cy.contains('span.p-button-label', 'Save').click();

        // Step 7: Confirm success toast or alert (adjust message as per app)
        // cy.get('.p-toast').should('contain.text', 'Goal updated successfully');

        cy.get('.p-toast').within(() => {
            cy.contains('Success').should('exist');
            cy.contains('Goals Updated Successfully').should('exist');
        });
    }

    verifyRedirectionToPoolsPage() {

        cy.contains('.p-tabview-title', 'Pools').should('be.visible').click()
    }



    verifyUiElementsOnPoolsPage() {
        // Step 1: Click on Pools tab
        cy.contains('span.p-tabview-title', 'Pools', { timeout: 10000 }).should('be.visible').click();

        // Step 2: Wait for Pools tab content to render
        cy.get('app-pools, .p-tabview-panel:visible').should('exist');

        // Step 3: Verify column headers
        cy.contains('th', 'Pool Name').should('be.visible');
        cy.contains('th', 'Total Contacts').should('be.visible');
        cy.contains('th', 'Available Contacts').should('be.visible');
        cy.contains('th', 'Closed Contacts').should('be.visible');
        cy.contains('th', 'Close Rate').should('be.visible');

        // Step 4: Verify Save button
        cy.contains('span.p-button-label', 'Save').should('be.visible');

        // Step 5: Verify pagination controls
        cy.get('.p-paginator').should('be.visible');

        // Step 6: Verify Actions dropdown
        //cy.get('p-dropdown[placeholder="Actions"], .p-dropdown-label').should('be.visible').click();
        cy.get('p-dropdown[placeholder="Actions"] .p-dropdown-label').first().click()
        // Step 7: Verify dropdown options
        cy.contains('li', 'Resume').should('be.visible');
        cy.contains('li', 'Duplicate').should('be.visible');
        cy.contains('li', 'Delete Campaign').should('be.visible');
    }

    verifyAbilityToSelectDeselectPool() {
        cy.get('tbody tr.p-selectable-row ').should('have.length.at.least', 2).then(($rows) => {
            cy.wrap($rows[0]).click();
            cy.wrap($rows[1]).click();
            cy.contains('span.p-button-label', 'Save').click();
            // Confirm success toast or alert (adjust message as per app)
            // cy.get('.p-toast').should('contain.text', 'Goal updated successfully');
            cy.get('.p-toast').within(() => {
                cy.contains('Success').should('exist');
                cy.contains('Pools Updated Successfully').should('exist');
            });
        })
    }

    verifyPoolDataVisibility() {
        // Wait for pool table to be rendered
        cy.get('table.p-datatable-table', { timeout: 10000 }).should('be.visible');

        // Ensure at least one pool row is present
        cy.get('tbody tr.p-selectable-row').should('have.length.greaterThan', 0);

        // Iterate through each pool row and verify key columns are not empty
        cy.get('tbody tr.p-selectable-row').each(($row) => {
            cy.wrap($row).within(() => {
                // Verify all important columns have content
                cy.get('td').eq(0).invoke('text').should('not.be.empty'); // Pool Name
                cy.get('td').eq(1).invoke('text').should('not.be.empty'); // Total Contacts
                cy.get('td').eq(2).invoke('text');                        // Available Contacts (can be '-')
                cy.get('td').eq(3).invoke('text');                        // Closed Contacts (can be '-')
                cy.get('td').eq(4).invoke('text');                        // Close Rate (can be '-')
            });
        });
    }

    VerifyActiondropdownPOptions() {



        cy.get('p-dropdown[placeholder="Actions"] .p-dropdown-label').first().click()
        // Step 7: Verify dropdown options
        cy.contains('li', 'Resume').should('be.visible');
        cy.contains('li', 'Duplicate').should('be.visible');
        cy.contains('li', 'Delete Campaign').should('be.visible');


    }

    verifyResumeCampaign() {
        // Open the Actions dropdown
        cy.get('.p-dropdown-label').contains('Actions').click();

        // Click on Resume option
        cy.contains('ul[role="listbox"] li[role="option"]', /Pause|Resume/).click();

        // If Pause modal appears, click Pause button inside it
        cy.get('body').then(($body) => {
            if ($body.text().includes('Pause Campaign')) {
                cy.get('.flex-column > .flex > .p-element').click()
            }
        });

    }

verifyDuplicateCampaign() {
  // Open the Actions dropdown
  cy.get('.p-dropdown-label').contains('Actions').click();
  // Click on Duplicate option
  cy.get('ul[role="listbox"] li[role="option"]')
    .contains('Duplicate')
    .should('be.visible')
    .click();

  // Assert duplication confirmation
  cy.get('.flex > :nth-child(1) > p-button.p-element > .p-ripple').click()
  cy.contains('Your most recent campaign launched successfully')
}

verifyDeleteCampaign() {
  // Open the Actions dropdown
  cy.get('.p-dropdown-label').contains('Actions').click();

  // Click on "Delete Campaign" option
  cy.get('ul[role="listbox"] li[role="option"]')
    .contains('Delete Campaign')
    .should('be.visible')
    .click();

  // Confirm Delete dialog is visible
  cy.contains('.p-dialog', 'Delete Campaign').should('be.visible');

  // Click the "Delete" button inside dialog
  cy.contains('.p-dialog .p-button-label', 'Delete')
    .should('be.visible')
    .click();

  // Wait for and assert toast message
  cy.get('.p-toast').should('be.visible')
    //.contains('Campaign deleted successfully');
}



}







