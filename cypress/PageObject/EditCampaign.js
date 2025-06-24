export class EditCampaigns {


    clickOnFirstCampaign() {

        cy.wait(4000)
        cy.get('tbody.p-datatable-tbody > tr')
            .first()
            .find('td.p-frozen-column')
            .should('be.visible')
            .click()
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
        cy.contains('button', 'Save').should('be.visible').click({ force: true });
        cy.get('body').then($body => {
            if ($body.find('div[role="dialog"]').length) {
                cy.get('div[role="dialog"]').contains('span.p-button-label', 'Pause').click();
            }
        });
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
        // cy.contains('span.p-button-label', 'Discover').should('be.visible'); keeps on changing from backend,test fails
        // cy.contains('span.p-button-label', 'Connect').should('be.visible');

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

    verifyRedirectionToScriptsPage() {

        cy.contains('Script').should('be.visible').click()
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
        cy.get('tbody tr.p-selectable-row').should('have.length.at.least', 1).then(($rows) => {
            const rowCount = $rows.length;
            if (rowCount === 1) {
                cy.wrap($rows[0]).click();
            } else {
                for (let i = 0; i < rowCount; i++) {
                    cy.wrap($rows[i]).click();
                }
            }
            cy.contains('span.p-button-label', 'Save').click();
            // If Pause modal appears, click Pause button inside it
            cy.get('body').then(($body) => {
                if ($body.text().includes('Pause Campaign')) {
                    cy.get('.flex-column > .flex > .p-element').click();
                }
            });

            cy.contains('Save').click();
            cy.get('.p-toast').within(() => {
                cy.contains('Success').should('exist');
                cy.contains('Pools Updated Successfully').should('exist');
            });
        });
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
    VerifyRedirectionToScriptPage() {


        cy.get('a.p-tabview-nav-link span') // tabs are inside <a> with span inside
            .contains('Script')
            .click();

        cy.url().should('include', '/script'); // adjust if your URL doesn't change, alternatively check element presence
        cy.get('textarea#first_message').should('be.visible');
    }

    VerifyUiElementsOnScriptPage() {
        cy.contains('span', 'Script').click()
        cy.get('textarea#first_message').should('be.visible');
        cy.get('textarea#last_message').should('be.visible');

        cy.get('p-dropdown[placeholder="Select a Gender"]').should('exist');
        cy.get('p-dropdown[placeholder="Select voice"]').should('exist');
        cy.get('p-dropdown[placeholder="Select library"]').should('exist');

        cy.get('textarea[formcontrolname="systemPrompts"]').should('be.visible');
        cy.get('button span').contains('Save').should('be.visible');
        cy.get('p-dropdown').contains('Actions').should('exist');
    }

    gotoScript() {

        cy.contains('span', 'Script').click()
    }

    VerifyFirstMessageFieldEditable() {

        cy.get('textarea[formcontrolname="firstMessage"]')
            .clear()
            .type('Test Message');
        cy.contains('Save').click();
        cy.get('textarea[formcontrolname="firstMessage"]')
            .should('have.value', 'Test Message');
        //cy.contains('ul[role="listbox"] li[role="option"]', /Pause|Resume/).click();

        // If Pause modal appears, click Pause button inside it
        cy.get('body').then(($body) => {
            if ($body.text().includes('Pause Campaign')) {
                cy.get('.flex-column > .flex > .p-element').click()
            }
        });
    }


    EditLastMessagefieldAndSave() {



        cy.get('textarea[formcontrolname="lastMessage"]')
            .clear()
            .type('Thank you for your cooperation');
        cy.contains('Save').click();
        cy.get('textarea[formcontrolname="lastMessage"]')
            .should('contain.value', 'cooperation');

    }


    VerifyGenderdropdownOptions() {

        cy.get('p-dropdown[placeholder="Select a Gender"]').click();
        cy.get('ul[role="listbox"]').within(() => {
            cy.contains('male').should('exist');
            cy.contains('female').should('exist');

        })
    }
    selectGenderAndSave() {

        cy.get('p-dropdown[placeholder="Select a Gender"]').click();
        cy.contains('female').click();
        cy.contains('Save').click();
        cy.get('p-dropdown[placeholder="Select a Gender"]').should('contain.text', 'female');


    }
    selectGenderAndCheckVoiceOptions() {

        cy.get('p-dropdown[placeholder="Select a Gender"]').click();
        cy.contains('male').click();
        cy.get('p-dropdown[placeholder="Select voice"]').click();
        cy.get('ul[role="listbox"]').should('exist'); // optionally verify voice names

        //Select Voice and save,TC_Edit-Campaign(Script)_008 – Select Voice and Save
        cy.get('p-dropdown[placeholder="Select voice"]').click();
        cy.contains('Olivia').click(); // or another option like 'John'
        cy.contains('Save').click();
        cy.get('p-dropdown[placeholder="Select voice"]').should('contain.text', 'Olivia');

    }

    verifyDomainLibraryDropdownOptions() {

        cy.get('p-dropdown[placeholder="Select library"]').click();
        cy.get('ul[role="listbox"]').should('exist');
    }
    EditSystemPromptsandSave() {

        cy.get('textarea[formcontrolname="systemPrompts"]')
            .clear()
            .type('You are a helpful AI assistant.');
        cy.contains('Save').click();
        cy.get('textarea[formcontrolname="systemPrompts"]')
            .should('have.value', 'You are a helpful AI assistant.');


        //TC_Edit-Campaign(Script)_012 – Verify Save button after editing any field

        cy.get('textarea[formcontrolname="firstMessage"]')
            .invoke('val', '')                // force clear
            .trigger('input')                // notify Angular/React form that input changed
            .type('Quick update test');      // now type new text

        cy.contains('Save').click();
    }
    verifySettingsTabNavigation() {
        cy.contains('a', 'Settings').click();
        cy.url().should('include', '/settings'); // Adjust if URL pattern is different
        cy.contains('Campaign Priority').should('be.visible');
    }
    VerifypreFilleddatainSettingsPage() {

        cy.get('.form-labal').contains('Campaign Priority').should('contain', 'Campaign Priority');
        cy.get('.form-labal').contains('Number of Bots').should('contain', 'Number of Bots');
        cy.contains('Bot Functions:').should('exist');
        cy.get('p-dropdown[placeholder="Select an option"]').eq(0).should('exist')
        // cy.get('p-dropdown[placeholder="Select an option"]').eq(0
    }

    updateCampaignPrioritySlider() {
        cy.wait(3000);
        cy.get('.form-labal').contains('Campaign Priority:').then(($el) => {
            const currentValue = parseInt($el.text().split(':')[1].trim());
            const newValue = currentValue + 1;

            cy.get('p-slider').first().within(() => {
                cy.get('[role="slider"]').focus().type('{rightarrow}');
            });

            cy.contains('Save').click();
            //if pause campaign modal appears
            cy.get('body').then(($body) => {
                if ($body.text().includes('Pause Campaign')) {
                    cy.get('.flex-column > .flex > .p-element').click();
                }
            });
            cy.contains('Save').click();
            cy.get('.form-labal')
                .contains(`Campaign Priority: ${newValue}`)
                .should('exist');
        })
    }
    verifySMSTemplateOptions() {
        cy.get('p-dropdown[placeholder="Select an option"]').first().click();
        cy.get('ul[role="listbox"]').should('be.visible');
        cy.get('ul[role="listbox"] li').should('have.length.greaterThan', 0);
    }

    selectSMSTemplateAndSave() {
        cy.get('p-dropdown[placeholder="Select an option"]').first().click();
        cy.get('ul[role="listbox"] li').first().click();
        cy.contains('Save').click();
        // If Pause modal appears, click Pause button inside it
        cy.get('body').then(($body) => {
            if ($body.text().includes('Pause Campaign')) {
                cy.get('.flex-column > .flex > .p-element').click()
            }
        });
        cy.contains('Save').click();
        cy.get('p-dropdown[placeholder="Select an option"]').eq(0)
            .should('not.contain.text', 'Select an option');
    }

    selectTransferCallOptionAndSave() {
        cy.get('p-dropdown[placeholder="Select an option"]').eq(1).click();

        // Wait until the list appears, then click the second item
        cy.get('ul[role="listbox"]').should('be.visible');
        cy.get('ul[role="listbox"] li').eq(0).should('be.visible').click();

        cy.contains('Save').click();
        // If Pause modal appears, click Pause button inside it
        cy.get('body').then(($body) => {
            if ($body.text().includes('Pause Campaign')) {
                cy.get('.flex-column > .flex > .p-element').click({ timeout: 2000 })
            }
        });
        cy.contains('Save').click();
        cy.get('p-dropdown[placeholder="Select an option"]').eq(1)
            .find('.p-dropdown-label')
            .should('not.contain.text', 'Select an option');
    }

    verifyActionsDropdownOptions() {
        cy.get('span.p-dropdown-label').contains('Actions').click();
        cy.get('ul[role="listbox"]').within(() => {
            cy.contains(/Resume|Pause/).should('exist');
            cy.contains('Duplicate').should('exist');
            cy.contains('Delete Campaign').should('exist');
        });
    }

    verifyDialingTabRedirection() {
        cy.contains('a', 'Dialing').click(); // Click on the "Dialing" tab
        cy.url().should('include', '/dialing'); // Adjust URL check as needed
        cy.contains('Hours between Redials').should('be.visible');
    }

    verifyPreFilledDialingData() {
        // Check Monday row has time and switch
        cy.contains('td', 'Monday')
            .parent('tr')
            .within(() => {
                cy.get('input[type="time"]').should('have.length', 2);
                cy.get('p-inputswitch').should('exist');
            });

        // Check presence of redial label
        cy.contains('.form-labal', 'Hours between Redials').should('exist');

        // Verify values are not empty
        cy.get('input[placeholder="Enter days"]').invoke('val').should('not.be.empty');
        cy.get('input[placeholder="Enter no. of attempts"]').invoke('val').should('not.be.empty');
    }
    toggleStatusForADayAndSave() {
        cy.get('p-inputswitch input[type="checkbox"]').first().then(($input) => {
            const isChecked = $input.prop('checked');
            cy.wrap($input).click({ force: true });
            cy.contains('Save').click();

            cy.get('p-inputswitch input[type="checkbox"]').first()
                .should('have.prop', 'checked', !isChecked);
        });
    }



    toggleStatusForADayAndSave() {
        cy.get('p-inputswitch input[type="checkbox"]').first().then(($input) => {
            const isChecked = $input.prop('checked');
            cy.wrap($input).click({ force: true });
            cy.contains('Save').click();

            cy.get('p-inputswitch input[type="checkbox"]').first()
                .should('have.prop', 'checked', !isChecked);
        });
    }
    changeStartStopTimeAndSave() {
        // Change Monday's start and stop times (first row)
        cy.contains('td', 'Monday')
            .parent('tr')
            .within(() => {
                cy.get('input[type="time"]').eq(0).clear().type('11:00'); // Start time
                cy.get('input[type="time"]').eq(1).clear().type('13:00'); // Stop time
            });
        cy.contains('Save').click();
        // Optional: verify time values were saved correctly
        cy.contains('td', 'Monday')
            .parent('tr')
            .within(() => {
                cy.get('input[type="time"]').eq(0).should('have.value', '11:00');
                cy.get('input[type="time"]').eq(1).should('have.value', '13:00');
            });


    }
    verifyMaxDaysAheadInput() {
        // Enter a valid value within allowed range (e.g., 15)
        cy.get('input[placeholder="Enter days"]').clear().type('15');
        // Click Save
        cy.contains('Save').click();
        // Confirm it was saved (optional)
        cy.get('input[placeholder="Enter days"]').should('have.value', '15');
    }

    verifyMandatoryFieldsValidation() {
        // Clear both required fields
        cy.get('input[placeholder="Enter days"]').clear();
        cy.get('input[placeholder="Enter no. of attempts"]').clear();
        // Click Save
        cy.contains('Save').click();

        // If Pause modal appears, click Pause button inside it
        cy.get('body').then(($body) => {
            if ($body.text().includes('Pause Campaign')) {
                cy.get('.flex-column > .flex > .p-element').click()
            }
        });
        cy.contains('Save').click();
        // Assert error messages (adjust text as per actual UI)
        cy.get('p-toast').should('be.visible'); // Example

    }



















































}







