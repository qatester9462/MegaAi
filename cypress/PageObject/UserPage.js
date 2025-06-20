export class UserPage {
    gotoUsers() {
        cy.get('.sidebarMenu-links').should('be.visible').eq(2).click();
        cy.url().should("include", "/users");
        cy.get('.header-title').contains('Users').should('exist')
        cy.wait(3000)
    }
    validateSearchFilter(Email) {
        cy.get('[placeholder="Search by email"]').should('exist').clear().type(Email)
        cy.get('tbody tr td:nth-child(2)').should('exist').and('contain.text', Email)
    }
    validateClientFilter(client) {
        cy.get('[aria-label="Clients: All"]').should('exist').click()
        cy.get('[class*="p-dropdown-panel"]').should('be.visible')
        cy.get('[role="searchbox"]').should('be.visible').clear().type(client)
        cy.get('[role="option"]').should('exist').contains(client).click({ timeout: 4000 })
        cy.get('tbody tr td:nth-child(3)').should('exist').and('contain.text', client)
    }
    validateClearFilter(client) {
        const selector = '[aria-label="Clients: All"]'
        let initialFilterText = ''
        let filteredRowCount = 0
        let totalRowCount = 0

        //Get initial filter text
        cy.get(selector)
            .invoke('text')
            .then((text) => {
                initialFilterText = text.trim()
            })
            .then(() => {
                // Apply the filter
                cy.get(selector).click();
                cy.get('[class*="p-dropdown-panel"]').should('be.visible')
                cy.get('[role="searchbox"]').should('be.visible').clear().type(client)
                cy.get('[role="option"]').should('exist').contains(client).click({ timeout: 4000 })
                cy.get('tbody tr td:nth-child(3)').should('exist').and('contain.text', client)

                //Count filtered rows
                cy.get('table tbody tr')
                    .should('exist')
                    .then($rows => {
                        filteredRowCount = $rows.length;
                        cy.log(`Filtered rows: ${filteredRowCount}`)
                    });

                //Clear the filter
                cy.get('[class*="btn-link"]').contains('Clear').click()
                cy.wait(500)

                //Validate filter text reset + rows count after clearing filter
                cy.get(selector)
                    .invoke('text')
                    .then((afterClearText) => {
                        expect(afterClearText.trim()).to.equal(initialFilterText)
                    })

                cy.get('table tbody tr')
                    .should('exist')
                    .then($rows => {
                        totalRowCount = $rows.length;
                        cy.log(`Total rows after clearing the filter: ${totalRowCount}`)
                        expect(totalRowCount).to.be.greaterThan(filteredRowCount)
                    })
            })

    }
}