export class TestCallPage{


clickONTestCall(){


cy.get('span[class="font-semibold"]').contains('Test Call').click()

cy.get('#pn_id_21_header').should('exist')

}

ValidateelementsOnModal(){


    cy.get('thead tr th').contains('First Name').should('be.visible');
    cy.get('thead tr th').contains('Last Name').should('be.visible');
    cy.get('thead tr th').contains('Email').should('be.visible');
    cy.get('thead tr th').contains('Phone Number').should('be.visible');
    cy.get('thead tr th').contains('Action').should('be.visible');
   // cy.get('.pi.pi-eye').should('be.visible');
  
    cy.get('span[class="ng-star-inserted"]').contains('Call Now').should('be.disabled')
}

ValidateEyeIconviewContactDetails(){

    cy.get('.pi.pi-eye').should('be.visible').click();
cy.get('label[for="description"]').should('exist')
}

ValidateCancelbuttonFunctionality(){
    cy.get('.p-button-label').contains('Cancel').should('be.visible').click()

}


ValidatecreateNewButton(){

cy.get(':nth-child(3) > .flex > :nth-child(1)').should('be.visible').click()
cy.get('label[for="lead_name"]').should('be.visible')
cy.get('input[id="lead_name"]').should('be.visible').type('TestingByMusa')
cy.get('label[for="first_name"]').should('be.visible')
cy.get('input[id="first_name"]').should('be.visible').type('MUSAFirst')
cy.get('label[for="last_name"]').should('be.visible')
cy.get('input[id="last_name"]').should('be.visible').type('MUSALast')
cy.get('label[for="email"]').should('be.visible')
cy.get('.form-labal.flex.align-items-center').contains('Phone Number').should('be.visible')
cy.get('input[type="tel"]').should('be.visible').type('+971234556')
cy.get('label[for="creditor"]').should('be.visible')
cy.get('label[for="debt_amount"]').should('be.visible')
cy.get('label[for="debt_collector"]').should('be.visible')
cy.get('span[class="ng-star-inserted"]').should('be.visible').contains('Create').click()


}




}