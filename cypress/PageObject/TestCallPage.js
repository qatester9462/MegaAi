export class TestCallPage {

    clickOnCreateNewButton() {
        cy.contains(' Create New Contact').should('exist').click()



    }
    clickONTestCall() {

        cy.get('span[class="font-semibold"]').contains('Test Call').click()
    }

    ValidateelementsOnModal() {


        cy.get('label[for="lead_name"]').should('be.visible')
        cy.get('input[id="lead_name"]').should('be.visible')
        cy.get('label[for="first_name"]').should('be.visible')
        cy.get('input[id="first_name"]').should('be.visible')
        cy.get('label[for="last_name"]').should('be.visible')
        cy.get('input[id="last_name"]').should('be.visible')
        cy.get('label[for="email"]').should('be.visible')
        cy.get('.form-labal.flex.align-items-center').contains('Phone Number').should('be.visible')
        cy.get('input[type="tel"]').should('be.visible')
        cy.get('label[for="creditor"]').should('be.visible')
        cy.get('label[for="debt_amount"]').should('be.visible')
        cy.get('label[for="debt_collector"]').should('be.visible')
    }

    ValidateEyeIconviewContactDetails() {

        cy.get('.pi.pi-eye').should('be.visible').click();
        cy.get('label[for="description"]').should('exist')
    }

    ValidateCancelbuttonFunctionality() {

        cy.get('.p-button-label').contains('Cancel').should('be.visible').click()

    }


    ValidatecreateNewButton(firstname, lastName, creditor, amount, collector, debitor, installments, reference, houseNo, streetName, city, zipcode, description) {

        // cy.get(':nth-child(3) > .flex > :nth-child(1)').should('be.visible').click()
        cy.get('label[for="lead_name"]').should('be.visible')
        cy.get('input[id="lead_name"]').should('be.visible').type('TestingByMusa')
        cy.get('label[for="first_name"]').should('be.visible')
        cy.get('input[id="first_name"]').should('be.visible').clear().type(firstname)
        cy.get('label[for="last_name"]').should('be.visible')
        cy.get('input[id="last_name"]').should('be.visible').clear().type(lastName)
        cy.get('label[for="email"]').should('be.visible')
        cy.get('.form-labal.flex.align-items-center').contains('Phone Number').should('be.visible')
        cy.get('input[type="tel"]').should('be.visible').type('+971234556')
        cy.get('label[for="creditor"]').should('be.visible')
        cy.get('[id="creditor"]').should('exist').clear().type(creditor)
        cy.get('label[for="debt_amount"]').should('be.visible')
        cy.get('[id="debt_amount"]').should('exist').clear().type(amount)
        cy.get('label[for="debt_collector"]').should('be.visible')
        cy.get('[id="debt_collector"]').should('exist').clear().type(collector)
        cy.get('[class="form-labal"]').contains('Debt Debitor').should('exist')
        cy.get('[id="debt_debitor"]').should('exist').clear().type(debitor)
        cy.get('[class="form-labal"]').contains('Debt Max Installments').should('exist')
        cy.get('[id="debt_max_installments"]').should('exist').clear().type(installments)
        cy.get('[class="form-labal"]').contains('Reference').should('exist')
        cy.get('[id="reference"]').should('exist').clear().type(reference)
        cy.get('[class="form-labal"]').contains('House No.').should('exist')
        cy.get('[id="houseno"').should('exist').clear().type(houseNo)
        cy.get('[class="form-labal"]').contains('Street Name').should('exist')
        cy.get('[id="street"]').should('exist').clear().type(streetName)
        cy.get('[class="form-labal"]').contains('City').should('exist')
        cy.get('[id="city"]').should('exist').clear().type(city)
        cy.get('[class="form-labal"]').contains('Zipcode').should('exist')
        cy.get('[id="zipcode"]').should('exist').clear().type(zipcode)
        cy.get('[class="form-labal"]').contains('Description').should('exist')
        cy.get('[id="description"]').should('exist').clear().type(description)
        cy.get('span[class="ng-star-inserted"]').should('be.visible').contains('Create').click()
    }
    validateCreatedContact(firstname) {
        cy.wait(2000);
        cy.get('[class*="p-dialog-resizable ng-star-inserted"]').contains('Select Test Contact or Create New').should('exist')
        cy.get('table tr td').contains(firstname).should('exist')
        cy.get('table tr td [class="pi pi-trash cursor-pointer text-red-700"]').eq(0).should('exist').click()
    }



}