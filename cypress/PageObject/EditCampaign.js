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

        const newCampaignName = 'Updated Campaign Name';
        cy.get('#Name')
            .clear()
            .type(newCampaignName)
            .should('have.value', newCampaignName);
        cy.contains('button', 'Save').should('be.visible').click();
        //  Wait for UI to reflect the update
        cy.get('nav').should('contain.text', newCampaignName); // breadcrumb fallback

    }


}








