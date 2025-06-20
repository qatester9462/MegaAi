export class Campaign {

    gotoCampaign() {
        cy.get('.sidebarMenu-items ').should('be.visible').eq(1).click();
    }
    ValidateCampaignTypeFilter(item) {
        cy.wait(4000);
        cy.get('p-dropdown[placeholder="Campaign Type: All"] .p-dropdown-trigger').click();
        // cy.get('[aria-label="Discover"]')
        // .should('be.visible')
        //.click();
        cy.get('.p-element.ng-star-inserted')
            .find('li.p-dropdown-item')
            .contains(item)
            .click();
        cy.get('thead th:nth-child(4)').contains('Campaign Type').should('exist')
        cy.get('tbody td:nth-child(4)').contains('Debt Collection').should('exist')
    }
    verifyfilteringCampaignsByProject() {
        cy.get('p-dropdown[placeholder="Project: All"] .p-dropdown-trigger').click();

        // Click on the third item (index 2)
        cy.get('.p-dropdown-items li').eq(2).click();
    }

    ValidateAndEditdropdownStatus() {
        cy.get('p-dropdown[placeholder="Status: All"] .p-dropdown-trigger').click();

        cy.get('.p-element.ng-star-inserted').find('li.p-dropdown-item').eq(0).click().should('be.visible')

    }
    ValidateSortingInCampaign() {
        cy.get('.dropdown-icon').should('be.visible').click()
        // cy.get('[aria-label="Discover"]')
        // .should('be.visible')
        //.click();
        cy.get('.dropdown-menu > :nth-child(1)').should('be.visible').click()
    }
    validateSearchFunctionality(name) {
        cy.get('[placeholder="Search by campaign name"]').should('exist').clear().type(name).wait(2000)
        cy.get('thead th:nth-child(1)').contains('Name').should('exist')
        cy.get('tbody td:nth-child(1)').contains(name).should('exist')
    }
    validateClearFilter() {
        cy.get('[class="btn-link ng-star-inserted"]').contains('Clear').should('exist').click()
        cy.get('[aria-label="Campaign Type: All"]').should('exist')
        cy.get('[aria-label="Project: All"]').should('exist')
        cy.get('[aria-label="Status: All"]').should('exist')
    }
    validateChangeStatus() {
        cy.get('thead th:nth-child(2)').contains('Status').should('exist')
        cy.get('[aria-label="Active"], [aria-label="Inactive"]').eq(0).then(($el) => {
            const status = $el.attr('aria-label');

            if (status === 'Active') {
                // Click to change it to Pause and the again resume to Active
                cy.wrap($el).click();
                cy.get('[aria-label="Pause"]').should('exist').click();
                cy.get('[class*="p-toast-message-text"]').contains('Success').should('exist').wait(2000)
                cy.get('[aria-label="Inactive"]').eq(0).should('exist').click()
                cy.get('[aria-label="Resume"]').should('exist').click();
                cy.get('[class*="p-toast-message-text"]').contains('Success').should('exist').wait(2000)
                cy.get('[aria-label="Active"]').should('exist')
                cy.log('Changed status from Active to Pause');
            } else if (status === 'Inactive') {
                // Click to change it to Active
                cy.wrap($el).click();
                cy.get('[aria-label="Resume"]').should('exist').click();
                cy.get('[class*="p-toast-message-text"]').contains('Success').should('exist').wait(2000)
                cy.get('[aria-label="Active"]').eq(0).should('exist').click()
                cy.get('[aria-label="Pause"]').should('exist').click();
                cy.get('[class*="p-toast-message-text"]').contains('Success').should('exist').wait(2000)
                cy.get('[aria-label="Inactive"]').should('exist')
                cy.log('Changed status from Pause to Active');
            } else {
                cy.log('Unexpected status:', status);
            }
        });

    }
    ClickOnPlusbutton() {
        cy.get('.p-speeddial > .p-ripple').as('btn')
        cy.get('@btn').click()
        cy.url('https://app.aegis.mobi/campaigns/create').should('exist')
    }

    CreateCampaign(campaignName) {

        //cy.get('span[aria-label="Select Project"]').as('jugar').should('be.visible')
        //cy.get('@jugar').click();
        cy.get('p-dropdown[placeholder="Select Project"] .p-dropdown-trigger').click({ force: true })

        // Step 2: Select the second option from the dropdown (index 1)
        cy.get('.p-dropdown-items li').eq(1).click({ force: true })

        // cy.wrap(campaignName).as('campaignName')
        cy.get('input[id="Enter Campaign Name"]').type(campaignName)
        cy.get('span[role="combobox"]').eq(1).should('be.visible')
        cy.get('p-dropdown[placeholder="Select Country"]').should('be.visible')
        cy.get('p-dropdown[optionlabel="time_zone"]').should('be.visible')

    }
    selectGoalType(goalName) {

        cy.contains('span.p-button-label', goalName)
            .should('be.visible')
            .click();
            cy.get('[class*="stepCard "]').eq(0).contains('Debt handling').should('exist').click()
      //  cy.contains('div', 'its connect description').should('exist').click()
    }
    SelectPools() {
        cy.url().should('include', '/create/pools')
        //cy.url('https://app.aegis.mobi/campaigns/create/pools').should('exist')
        cy.get('.p-datatable-tbody > :nth-child(2) > :nth-child(3)').should('be.visible').click()
    }
    SelectScript() {
        cy.contains('.card-title', 'First Message')
            .parents('.card') // Get the full card
            .find('span[aria-label="Select Lead"]') // Narrow down to just its dropdown
            .should('be.visible')
            .click();
        cy.get('ul.p-dropdown-items', { timeout: 10000 }) // Give it enough time to render
            .should('exist');
        cy.get('ul.p-dropdown-items')
            .find('li.p-dropdown-item')
            .should('have.length.greaterThan', 1)
            .eq(1)
            .click();
        cy.get('p-dropdown[placeholder="Select a Gender"]').click().find('[aria-label="female"]').eq(0).click().should('be.visible')
        cy.get('p-dropdown[placeholder="Select voice"]').click().find('[aria-label="Olivia"]').eq(0).click().should('be.visible')

        cy.contains('.card-title', 'Last Message')
            .parents('.card')
            .find('span[role="combobox"]')
            .should('be.visible')
            .click();

        // Step 2: Wait for the dropdown list to appear
        cy.get('ul.p-dropdown-items', { timeout: 10000 })
            .should('exist');

        // Step 3: Select the second item from the list
        cy.get('ul.p-dropdown-items p-dropdownitem > li.p-dropdown-item')
            .eq(1)
            .should('be.visible')
            .click();

        // Optional: Assert the value is selected
        cy.contains('.card-title', 'Last Message')
            .parents('.card')
            .find('span[role="combobox"]')
            .should('not.contain.text', 'Select Lead');
    }
    selectSettings() {
        cy.contains('.form-labal', 'Campaign Priority')
            .parents('.form-group')
            .find('span[role="slider"]')
            .focus()
            .type('{rightarrow}{rightarrow}'); // Assuming step is 1

        // Set Number of Bots to 10
        cy.contains('.form-labal', 'Number of Bots')
            .parents('.form-group')
            .find('span[role="slider"]')
            .focus()
            .type('{rightarrow}{rightarrow}{rightarrow}{rightarrow}'); // 4 steps to go from 6 to 10

        cy.contains('.form-labal', 'SMS Template Used in Call')
            .parents('.form-group')
            .find('span[role="combobox"]') // Dropdown trigger
            .should('be.visible')
            .click();

        cy.get('ul.p-dropdown-items p-dropdownitem > li.p-dropdown-item')
            .eq(1)
            .should('be.visible')
            .click();

        // Select second option from "Transfer Calls to"
        cy.contains('.form-labal', 'Transfer Calls to')
            .parents('.form-group')
            .find('span[role="combobox"]')
            .should('be.visible')
            .click();

        cy.get('ul.p-dropdown-items p-dropdownitem > li.p-dropdown-item')
            .eq(0)
            .should('be.visible')
            .click();
        // cy.contains('.form-labal', 'Experimental AI') deprecated
        //     .parents('.form-group')
        //     .find('span.p-inputswitch-slider')
        //     .click()
    }
    selectDialing() {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        days.forEach((day) => {
            // 2. Find the row that contains the current day
            cy.contains('td', day)               // find a <td> with text like "Monday"
                .parent('tr')                      // go up to the full table row
                .within(() => {                    // now work *inside* this row only

                    // 3. Find the Start Time input and set a new time
                    cy.get('input[type="time"]')     // gets both start & stop inputs
                        .eq(0)                         // first one is start
                        .clear()                       // clear existing value
                        .type('09:00')                // type new start time
                        .should('have.value', '09:00') // confirm it changed correctly

                    // 4. Find the Stop Time input and set a new time
                    cy.get('input[type="time"]')
                        .eq(1)                         // second input is stop time
                        .clear()
                        .type('17:00')
                        .should('have.value', '17:00')

                    // 5. Find the toggle (checkbox) and flip it
                    cy.get('input[type="checkbox"]').then(($checkbox) => {
                        const wasChecked = $checkbox.prop('checked'); // get current state

                        // click the visible slider to toggle it
                        cy.get('.p-inputswitch-slider').click();

                        // verify the state has flipped
                        cy.get('input[type="checkbox"]')
                            .should('have.prop', 'checked', !wasChecked); // validate flip
                    });

                });
        });
    }
    clickOnNextButton() {
        cy.get('.btn-primary > .p-element').contains('Next Step').click()

    }
        validateCampaignAgentPersonality() {
        cy.url().should("include", "/campaigns/create/script")
        cy.wait(2000)
        cy.get('[class="p-steps-number"]').contains('3').should('exist')
        cy.get('.p-steps-title').contains('Agent Personality').should('exist')
    }
    clickOnSaveAndExitButton() {
        cy.get(':nth-child(2) > p-button.p-element > .p-ripple').should('be.visible').click()
    }
    clickOnNextButton1() {
        // cy.get('.btn-primary').should('be.visible').click()
        cy.get('.btn-primary').contains('Next Step').click({ force: true });

    }
    CampaignCreationToast() {
        cy.get('.p-toast.p-component.ng-tns-c1067615279-0.p-toast-top-center').should('be.visible')
    }
    CampaignCreateFirstForm() {
        cy.get('span[aria-label="Select Project"]').as('jugar').should('be.visible');
        cy.get('@jugar').click(); // Open the dropdown

        cy.get('ul.p-dropdown-items > p-dropdownitem > li')
            //.should('have.length.greaterThan', 0) // optional check
            .then(($items) => {
                cy.log('Total projects found: ' + $items.length); // log total count

                // Step 3: Click the third project (index 2)
                cy.wrap($items.eq(5)).click({ force: true });

            });

        cy.get('label:contains("Campaign Type")')
            .siblings()
        cy.get('span[role="combobox"]')
            .should('not.have.text', 'Select Campaign Type');

        // Step 4: Assert 'Country' field has been populated
        cy.get('label:contains("Country")')
            .parent()
            .find('span[role="combobox"]')
            .should('not.have.text', 'Select Country')
        // Step 5: Assert 'Timezone' field has been populated
        cy.get('label:contains("Timezone")')
            .parent()
            .find('span[role="combobox"]')
            .should('not.have.text', 'Select Timezone');
    }
}