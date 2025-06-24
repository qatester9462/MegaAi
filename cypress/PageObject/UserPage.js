export class UserPage {
    gotoUsers() {
        cy.get('.sidebarMenu-links').should('be.visible').eq(2).click();
        cy.url().should("include", "/users");
        cy.get('.header-title').contains('Users').should('exist')
        cy.wait(3000)
    }
    validateSearchFilter(Email) {
        cy.get('[placeholder="Search by email"]').should('exist').clear().type(Email).wait(2000)
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
        cy.get(selector).invoke('text').then((text) => {
                initialFilterText = text.trim()
            })
            .then(() => {
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
                cy.get('[class*="btn-link"]').contains('Clear').click()
                cy.wait(500)

                //Validate filter text reset + rows count after clearing filter
                cy.get(selector).invoke('text').then((afterClearText) => {
                        expect(afterClearText.trim()).to.equal(initialFilterText)
                    })

                cy.get('table tbody tr').should('exist').then($rows => {
                        totalRowCount = $rows.length;
                        cy.log(`Total rows after clearing the filter: ${totalRowCount}`)
                        expect(totalRowCount).to.be.greaterThan(filteredRowCount)
                    })
            })

    }
    clickPlusButotn() {
        cy.get('[class*="p-element p-ripple"]').should('be.visible').click()
        cy.get('[role="complementary"]').contains('Create User').should('exist').wait(3000)
    }
    selectClient() {
        cy.get('[class="form-labal"]').contains('Client').should('exist')
        cy.get('[aria-label="Select Client"]').should('exist').click()
        cy.get('[class*="p-dropdown-panel"]').should('exist')
        cy.get('[role="option"]').should('exist').then(($options) => {
            const count = $options.length;
            const randomIndex = Math.floor(Math.random() * count)
            cy.wrap($options[randomIndex]).click()
        });


    }
    validateRole() {
        cy.get('[class="form-labal"]').contains('Role').should('exist')
        cy.get('[placeholder="Enter Role"]').should('exist').and('have.value', 'user')
    }
    addName(name) {
        cy.get('[class="form-labal"]').contains('Name').should('exist')
        cy.get('[placeholder="Enter Name"]').should('be.visible').type(name)
    }
    addEmail(userEmail) {
        cy.get('[class="form-labal"]').contains('Email').should('exist')
        cy.get('[placeholder="Enter Email"]').should('exist').type(userEmail)
    }
    addPassword(userPassword) {
        cy.get('[class="form-labal"]').contains('Password').should('exist')
        cy.get('[placeholder="Enter Password"]').should('exist').type(userPassword)
    }
    addPhoneNumber(phoneNo) {
        cy.get('[class="form-labal"]').contains(' Phone Number ').should('exist')
        cy.get('[placeholder="Enter Phone Number"]').should('exist').type(phoneNo)
    }
    selectCountry(country) {
        cy.get('[class="form-labal"]').contains(' Phone Number ').should('exist')
        cy.get('[aria-label="Select Country"]').should('exist').click()
        cy.get('[class*="p-dropdown-panel"]').should('be.visible')
        cy.get('[role="option"]').should('exist').contains(country).click()
    }
    clickButton(btnName) {
        cy.get('[class*="p-element p-button"]').contains(btnName).should('exist').click({timeout:7000})
    }
    deleteCreatedUser(userEmail) {
        cy.get('tbody tr td').contains(userEmail).parents('tr').within(() => {
            cy.get('.pi.pi-trash')
                .click();
        });
        cy.get('[role="dialog"]').contains('Delete ' + userEmail).should('be.visible')
        cy.get('[class="p-button-label"]').should('exist').click()

    }
    validateGeneratePassword() {
        cy.get('[class="form-labal"]').contains('Password').should('exist')
        cy.get('[placeholder="Enter Password"]').should('exist').clear()
        cy.get('.p-button-text').contains('Generate').should('exist').click()
        let initialPassword = '';
        let newPassword = '';
        cy.get('[placeholder="Enter Password"]').should('exist').and('have.class', 'p-filled').invoke('val').then((text) => {
            initialPassword = text;
        });
        cy.get('button').contains('Generate').click();
        cy.get('[placeholder="Enter Password"]').should('exist').invoke('val').then((updatedText) => {
            newPassword = updatedText;
            expect(newPassword).to.not.equal(initialPassword);
        });
    }
    validateFieldErrors(error) {
        cy.get('[class="error"]').contains(error).should('be.visible')
    }
    validateTooltip() {
        cy.get('.pi-info-circle').should('be.visible').trigger('mouseenter', { force: true })
        cy.contains('Please use international phone number format').should('be.visible')
    }
    validateCrossIcon() {
        cy.get('.p-sidebar-close').should('exist').click()
    }
    validateEditUser(userEmail) {
        cy.get('tbody tr td').contains(userEmail).parents('tr').within(() => {
            cy.get('.pi-pencil')
                .click()
        });
        cy.get('[role="complementary"]').contains('Update User').should('exist').wait(3000)
        cy.get('[placeholder="Enter Name"]')
            .should('exist')
            .invoke('val')
            .then((existingName) => {
                const updatedName = `updated.${existingName}`
                cy.get('[placeholder="Enter Name"]').clear().type(updatedName)
            })
    }
    validateChangePassword(userEmail) {
        cy.get('tbody tr td').contains(userEmail).parents('tr').within(() => {
            cy.get('.pi-lock').click()
        });
        cy.get('.ng-trigger-panelState').contains('Change Password').should('exist')
        cy.get('[class="form-labal"]').contains('Password').should('exist')
        cy.get('[placeholder="Enter Password"]').should('exist').clear()
        cy.get('.p-button-text').contains('Generate').should('exist').click()
        cy.get('[placeholder="Enter Password"]').should('exist').and('have.class', 'p-filled').invoke('val').then((typedPassword) => {
            cy.get('[class="form-labal"]').contains('Password').should('exist')
            cy.get('[placeholder="Enter Confirm Password"]').should('exist').clear().type(typedPassword)
            cy.get('[placeholder="Enter Password"]').invoke('val').should('eq', typedPassword);
            cy.get('[placeholder="Enter Confirm Password"]').should('exist').and('have.class', 'p-filled').invoke('val').should('eq', typedPassword);
            cy.get('[class*="p-element p-button"]').contains('Confirm').should('exist').click()
        })
    }
}