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
cy.wait(5000)
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

    verifyEditIconOpensEditPoolInfoModal() {


        cy.get('.pi-pencil.cursor-pointer').eq(0).should('be.visible').click()
        cy.contains('Edit Pool Info').should('exist')
    }

    verifyDeleteiconOpensConfirmationModal() {

        cy.get('.pi-trash:visible').eq(0).click()
        cy.contains('Delete').should('exist').click()
    }

    verifyProjectFilterDropdownWorksCorrectly() {
        // Open the project dropdown
        cy.get('span[aria-label="Projects: All"]').click();

        // Ensure at least one project option is visible
        cy.get('li[role="option"]')
            .should('have.length.greaterThan', 0)
    }
    VerifyCampaignsFilterDropdownWorksCorrectly() {

        cy.get('p-dropdown[placeholder="Campaigns: All"]')
            .find('.p-dropdown-trigger')
            .click();
        // Check if options are present
        cy.get('li[role="option"]')
            .should('have.length.greaterThan', 0)
    }
    VerifyStatusFilterDropdownWorksCorrectly() {

        cy.get('span[aria-label="Status: Active"]').click()
        cy.get('li[role="option"]').contains('Inactive').click();


    }
    VerifyPaginationControlsWork() {
        cy.get('.p-paginator-page').then(($pages) => {
            const totalPages = $pages.length;
            cy.log('Total Pages:', totalPages);
            if (totalPages === 1) {
                cy.get('.p-paginator-page.p-highlight').should('contain', '1');
                cy.get('.p-paginator-next').should('be.disabled');
            } else {
                for (let i = 1; i <= totalPages; i++) {
                    cy.get('.p-paginator-page.p-highlight').should('contain', i);
                    if (i < totalPages) {
                        cy.get('.p-paginator-next').should('not.be.disabled').click().wait(8000);
                    }
                }
            }
        });
    }
    verifyClickingPoolNameRedirectsToContactList() {

        cy.get('tbody td.cursor-pointer')
            .eq(0)
            .click();
        cy.contains('Phone Number').should('be.visible'); // Header column

        // cy.get('body app-root th:nth-child(12)').should('be.visible')
    }

    verifyEditIconFunctionality(updatedName, description) {

        cy.get('span.p-dialog-title').should('contain.text', 'Edit Pool Info');
        cy.get('input[formcontrolname="name"]').should('be.visible').type(updatedName);
        cy.get('textarea[formcontrolname="description"]').should('be.visible').type(description)
        cy.get('label[for="country"]').should('be.visible');


    }
    verifyNamePreFilled() {
        cy.get('#poolName')
            .invoke('val')
            .should('not.be.empty');
    }
    verifyDescriptionPrefilled() {

        cy.get('textarea[formcontrolname="description"]')
            .invoke('val')
            .should('not.be.empty');

    }
    verifyCountryIsReadonly() {

        cy.get('.p-inputtext.p-component.p-element.ng-untouched.ng-pristine.p-filled')
            .eq(2)
            .should('be.disabled');
    }

    validateBlankFields() {

        cy.get('input[id="poolName"]').clear();
        cy.get('textarea[id="poolDescription"]').clear();
        cy.contains('Update').click();
        cy.get('[class="error"]').eq(0).contains('Enter Pool Name').should('exist')
        cy.get('[class="error"]').eq(1).contains('Enter Pool Description').should('exist')

    }


    closeModalWithXButton() {

        cy.get('button.p-dialog-header-close').click();
        cy.contains('Edit Pool Info').should('not.exist');
    }

    VerifyRedirectionToUploadNewPoolPage() {


        cy.get('plusicon[class="p-element p-icon-wrapper ng-star-inserted"]').click()

    }

    testAllFieldsVisible() {
        cy.get('input[formcontrolname="poolName"]').should('be.visible');
        cy.get('input[formcontrolname="poolDescription"]').should('be.visible');
        cy.get('p-dropdown[placeholder="Select Project"]').should('be.visible');
        cy.get('p-dropdown[placeholder="Select Country"]').should('be.visible');
    }

    testContinueButtonDisabledInitially() {
        cy.contains('button', 'Continue to upload')
            .should('be.disabled');
    }


    testContinueButtonEnabledWhenAllFieldsFilled() {
        cy.get('input[formcontrolname="poolName"]').type('Test Pool');
        cy.get('input[formcontrolname="poolDescription"]').type('Pool for testing upload flow');

        cy.get('p-dropdown[placeholder="Select Project"] span[role="combobox"]').click();
        cy.get('li[role="option"]').should('have.length.greaterThan', 0);
        cy.get('li[role="option"]').first().click();

        cy.get('p-dropdown[placeholder="Select Country"] span[role="combobox"]').click();
        cy.get('li[role="option"]').should('have.length.greaterThan', 0);
        cy.get('li[role="option"]').first().click();
        cy.contains('button', 'Continue to upload').click()
        cy.url().should('include', '/upload');

    }

    VerifyCancelButtonFunctionality() {


        cy.get('.p-button-label').click()

        // Assert redirect back to Pools Libraries
        cy.url().should('include', '/pools');


    }
    verifyProjectDropdownLoadsAvailableProjects() {

        cy.get('span[aria-label="Select Project"]').click();

        cy.get('li[role="option"]').should('have.length.greaterThan', 0);

    }

    verifyCountryDropdownLoadsAvailableCountries() {


        cy.get('span[aria-label="Select Country"]').click();

        cy.get('li[role="option"]').should('have.length.greaterThan', 0);

    }

    clickOnContinueToUploadButton() {

        cy.contains('button', 'Continue to upload').click()
        cy.url().should('include', '/upload');
    }


    browseButton = () => cy.contains('button', 'Browse');
    cancelButton = () => cy.contains('button', 'Cancel');
    uploadButton = () => cy.contains('button', 'Upload');
    fileName = () => cy.contains('File Name:');
    poolName = () => cy.contains('Pool Name:');
    fileSize = () => cy.contains('KB');
    fileColumns = () => cy.contains('File Columns');
    uploadedColumns = () => cy.contains('Uploaded Columns');
    tooltipIcon = () => cy.get('i.pi-info-circle');
    tooltipText = () => cy.contains('Mapping First Name and Telephone 1 columns are required');
    dropdowns = () => cy.get('.p-dropdown');
    dropdownTrigger = () => cy.get('.p-dropdown-trigger');
    //selectedMappings = () => cy.get('.p-dropdown-label');

    getFile() {


        cy.get('input[type="file"]').selectFile('cypress/fixtures/calls.xlsx', { force: true });
    }

    verifyRedirectionOnSuccessfulUpload() {


        cy.get('button[class="p-element p-button p-component"]').as('btn').should('be.visible')
        cy.get('@btn').click()
        cy.wait(2000)
        cy.url().should('include', '/pools');
    }
}