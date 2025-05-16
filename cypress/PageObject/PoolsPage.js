export class PoolsPage {



    goTOPools() {

        cy.get('.sidebarMenu > :nth-child(3) > .sidebarMenu-links').click()
    }
    verifyRedirectionToThePoolsPage() {

        cy.get('.sidebarMenu > :nth-child(3) > .sidebarMenu-links').click()
        cy.url().should('include', '/pools'); // or exact path if known
        cy.contains('All Pools').should('be.visible');
    }

    verifyPresenceOfAllElementsOnPoolspage() {

        cy.contains('All Pools').should('be.visible');
        cy.contains('Projects: All').should('exist');
        cy.contains('Campaigns: All').should('exist');
        cy.contains('Status: Active').should('exist');
        cy.get('input[placeholder="Search by pool name"]').should('exist');
        cy.get('thead').contains('Name').should('be.visible');
        cy.get('thead').contains('Country').should('be.visible');
        cy.get('thead').contains('Total Contacts').should('be.visible');
        cy.get('thead').contains('Action').should('be.visible');
        cy.get('.pi-pencil').should('exist');
        cy.get('.pi-trash').should('exist');
        cy.get('button.p-speeddial-button').should('exist');
    }

    verifyPlusButtonRedirectsToUploadNewPoolPage() {


        cy.get('button.p-speeddial-button').click();
        //cy.get('span.pi-upload').click();
        cy.url().should('include', '/pools/create');


    }
















}