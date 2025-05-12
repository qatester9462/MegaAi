export class Campaign {

    gotoCampaign() {
        cy.get('.sidebarMenu-items ').should('be.visible').eq(1).click();
    }
    ValidateAndEditdropdownCampaignType(item) {
        cy.get('#pn_id_30').should('be.visible').click()

        // cy.get('[aria-label="Discover"]')
        // .should('be.visible')
        //.click();
        cy.get('.p-element.ng-star-inserted')
            .find('li.p-dropdown-item')
            .contains(item)
            .click();
    }


    ValidateAndEditdropdownproject() {
        cy.get('#pn_id_56').should('be.visible').click()

        // cy.get('[aria-label="Discover"]')
        // .should('be.visible')
        //.click();
        cy.get('.p-element.ng-star-inserted').find('li.p-dropdown-item').eq(0).click()
        cy.get('.p-datatable-tbody > :nth-child(2) > :nth-child(4)').should('be.visible')
    }

    ValidateAndEditdropdownStatus() {
        cy.get('#pn_id_27').should('be.visible').click()

        // cy.get('[aria-label="Discover"]')
        // .should('be.visible')
        //.click();
        cy.get('.p-element.ng-star-inserted').find('li.p-dropdown-item').eq(0).click().should('be.visible')

    }
    ValidateSortingInCampaign() {
        cy.get('.dropdown-icon').should('be.visible').click()

        // cy.get('[aria-label="Discover"]')
        // .should('be.visible')
        //.click();
        cy.get('.dropdown-menu > :nth-child(1)').should('be.visible').click()

    }

    ClickOnPlusbutton() {

        cy.get('.p-speeddial > .p-ripple').as('btn')
        cy.get('@btn').click()
        cy.url('https://app.aegis.mobi/campaigns/create').should('exist')
    }

    CreateCampaign() {
        cy.get('span[aria-label="Select Project"]').as('jugar').should('be.visible')
        cy.get('@jugar').click();
        cy.get('li[aria-label="Third Project"]').eq(0).should('be.visible').click()
        const campaignName = faker.company.name()
        cy.wrap(campaignName).as('campaignName')
        cy.get('input[id="Enter Campaign Name"]').type(campaignName)
        cy.get('span[role="combobox"]').eq(1).should('be.visible')
        cy.get('p-dropdown[placeholder="Select Country"]').should('be.visible')
        cy.get('p-dropdown[optionlabel="time_zone"]').should('be.visible')

    }
    selectGoalType(type) {
        cy.contains(type).parents('[data-pc-name="button"]').should('be.visible').click()
        cy.contains('div', 'its connect description').should('be.visible').click()

    }
    SelectPools() {
        cy.url().should('include','/create/pools')
        //cy.url('https://app.aegis.mobi/campaigns/create/pools').should('exist')
        cy.get('.p-datatable-tbody > :nth-child(2) > :nth-child(3)').should('be.visible').click()
    }
    SelectScript() {

        cy.get('p-dropdown[placeholder="Select a Gender"]').click().find('[aria-label="female"]').eq(0).click().should('be.visible')

        cy.get('p-dropdown[placeholder="Select voice"]').click().find('[aria-label="Olivia"]').eq(0).click().should('be.visible')
    }
    clickOnNextButton() {
        cy.get('.btn-primary > .p-element').click()

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
            .should('contain.text', '(+1) CA');


        // Step 5: Assert 'Timezone' field has been populated
        cy.get('label:contains("Timezone")')
            .parent()
            .find('span[role="combobox"]')
            .should('not.have.text', 'Select Timezone');







    }

















}