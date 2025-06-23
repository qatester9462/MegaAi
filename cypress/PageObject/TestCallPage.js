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
      function tryTestCall(index = 0) {
        cy.get('span[class="font-semibold"]').then($calls => {
          if ($calls.length > index) {
            cy.wrap($calls).eq(index).click();
            cy.get('body').then($body => {
              if ($body.find('.pi.pi-eye').length > 0) {
                cy.get('.pi.pi-eye').eq(0).should('exist').click();
                cy.get('[role="complementary"]').should('exist');
                cy.get('[class*="font-semibold"]').contains('View Test Contact').should('exist');
              } else {
                cy.get('.p-button.p-component').contains('Cancel').click({force: true});
                tryTestCall(index + 1);
              }
            });
          } else {
             cy.log('No Test Call entry with contact was found.');
          }
        });
      }
      tryTestCall();
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

    gotoTestCall() {
        cy.wait(3000)
        cy.get('[class="sidebarMenu-links"]').eq(4).should('exist').click()
        cy.url().should("include", "/calls");
        cy.get('.header-title').contains('Calls (MEGA-Bhargav)').should('exist').wait(9000)
    }
    validateExportError() {
        cy.get('[class="btn-primary"]').contains('Export').should('exist').click()
        cy.get('[class*="p-toast-detail"]').contains('Please select campaign').should('exist')
    }
    clickExportButton() {
        cy.get('[class="btn-primary"]').contains('Export').should('exist').click()
    }
    validateCampaignFilter(campName) {
        cy.get('[aria-label="Campaigns: All"]').should('exist').click()
        cy.get('[class="p-dropdown-items-wrapper"]').should('exist')
        cy.get('[role="option"]').contains(campName).should('exist').click()
        cy.wait(7000)
        cy.get('thead th:nth-child(1)').contains('Campaign').should('exist')
        cy.get('tbody tr td:nth-child(1)').contains(campName).should('exist')
    }
    validateSearchbyPhoneNumber(phoneNo) {
        cy.get('[placeholder="Search by phone number and call Id"]').should('exist').clear().type(phoneNo)
        cy.wait(5000)
        cy.get('thead th:nth-child(4)').contains('Phone Number').should('exist')
        cy.get('tbody tr td:nth-child(4)').contains(phoneNo).should('exist')
    }
    validateCallStatusFilter(outcome) {
        cy.get('[aria-label="Call Status: All"]').should('exist').click()
        cy.get('[role="listbox"]').should('exist')
        cy.get('[role="option"]').contains(outcome).should('exist').click()
        cy.wait(5000)
        cy.get('thead th:nth-child(5)').contains('Call Status').should('exist')
        cy.get('tbody tr td:nth-child(5)').contains('Completed').should('exist')
    }
    validateViewMoreButton() {
        cy.get('[class="btn-link"]').contains('View More').first().should('exist').click()
        cy.get('[role="complementary"]').contains('Call Info').should('exist')
        cy.get('.p-sidebar-close').should('exist').click()
    }
    applyDateRangeFilter(month) {
        cy.get('[placeholder="Select Date Range"]').eq(1).should('exist').click()
        cy.get('[aria-label="Choose Date"]').should('exist')
        cy.get('[aria-label="Choose Month"]').should('exist').click()
        cy.get('.p-monthpicker-month ').contains(month).should('exist').click()
        cy.get('.p-datepicker-calendar tr td').eq(15).should('exist').click()
        cy.get('.p-datepicker-calendar tr td').eq(26).should('exist').click().wait(3000)
    }
}