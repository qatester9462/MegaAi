import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { Campaign } from "../PageObject/CampaignPage";
import { EditCampaigns } from "../PageObject/EditCampaign";
import { PoolsPage } from "../PageObject/PoolsPage";
import { faker } from "@faker-js/faker";
import { it } from "mocha";
const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const campaign = new Campaign
const editcampaignn = new EditCampaigns()
const poolss = new PoolsPage



describe("poolsMenuCases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
    })

    it('TC_Pools_Libraries-001 - Verify redirection to the Pools page', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        poolss.verifyRedirectionToThePoolsPage()
    })


    it('TC_Pools_Libraries-002 - Verify redirection to the Pools page', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        poolss.verifyPresenceOfAllElementsOnPoolspage()
    })

    it('TC_Pools_Libraries-003 - Verify + button redirects to Upload New Pool page', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        poolss.verifyPlusButtonRedirectsToUploadNewPoolPage()
    })


    it('TC_Pools_Libraries-004 - Verify Edit icon opens Edit Pool Info modal', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        poolss.verifyEditIconOpensEditPoolInfoModal()
    })

    it('TC_Pools_Libraries-005 - Verify Delete icon opens confirmation modal', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        poolss.verifyDeleteiconOpensConfirmationModal()
    })

    it('TC_Pools_Libraries_006 - Verify Project filter dropdown works correctly', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        poolss.verifyProjectFilterDropdownWorksCorrectly()
    });
    it('TC_Pools_Libraries_007 - Verify Campaigns filter dropdown works correctly', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyCampaignsFilterDropdownWorksCorrectly()
    });

    it('TC_Pools_Libraries_008 - Verify Status filter dropdown works correctly', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyStatusFilterDropdownWorksCorrectly()
    });
    it('TC_Pools_Libraries_012 - Verify pagination controls work', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyPaginationControlsWork()
    });

    it('TC_Pools_Libraries_015 - Verify clicking pool name redirects to contact list', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyClickingPoolNameRedirectsToContactList()
    });

    it('TC_Edit-Pool-info_002 - Validate Modal Fields', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss.verifyModalFieldsVisible()
    });



    it(' TC_Edit-Pool-info_003 - Pool Name Pre-filled', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss.verifyNamePreFilled()
    })
    it('TC_Edit-Pool-info_004 - Description Pre-filled', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss.verifyDescriptionPrefilled()
    });
    it('TC_Edit-Pool-info_005 - Country is Read-only', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss.verifyCountryIsReadonly()
    });


    it('TC_Edit-Pool-info_009 -Blank Pool Name Validation', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss.blankPoolNameValidation()

    });



    it('TC_Edit-Pool-info_011 -Blank Description not Allowed', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss.BlankDescriptionnotAllowed()
    });



    it('TC_Edit-Pool-info_012 - Close Modal with X button', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss.closeModalWithXButton()
    });
    it('TC_Delete-Pool-Modal_002 - Modal Shows Correct Text', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyDeleteiconOpensConfirmationModal()

        cy.contains('Delete Pool').should('be.visible');
        cy.contains('Are you sure you want to delete this pool ?').should('be.visible');
    });

    it('TC_Delete-Pool-Modal_003 - Keep Button Cancels Action', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyDeleteiconOpensConfirmationModal()
        cy.contains('Keep').click();
        cy.contains('Delete Pool').should('not.exist');
    });
    it('TC_Delete-Pool-Modal_004 - Delete Button Deletes Pool', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyDeleteiconOpensConfirmationModal()
        cy.get('p-button[label="Delete"]').click();
        cy.contains('Delete Pool').should('not.exist');

    })

    it('TC_Delete-Pool-Modal_005 - Close Modal with Outside Click', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyDeleteiconOpensConfirmationModal()
        cy.get('body').click(0, 0); // click outside modal
        //cy.contains('Delete Pool').should('not.exist');
    });

    it('TC_UploadPool_001 - Verify redirection to "Upload New Pool" page', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
    });


    it(' TC_UploadPool_002 - Verify all fields are displayed', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testAllFieldsVisible()


    });

    it('TC_UploadPool_003 - Verify Continue to upload button is disabled initially', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonDisabledInitially()


    });

    it('TC_UploadPool_004 - Verify Continue to upload button enabled when all fields are filled', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()


    });


    it('TC_UploadPool_005 - Verify redirection on clicking Continue to upload', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()
        poolss.clickOnContinueToUploadButton()


    });

    it('TC_UploadPool_006 - Verify Cancel button functionality', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.VerifyCancelButtonFunctionality()

    });

    it('TC_UploadPool_008 – Verify Project dropdown loads available projects', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.verifyProjectDropdownLoadsAvailableProjects()

    });


    it('TC_UploadPool_009 – Verify Country dropdown loads available countries', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.verifyCountryDropdownLoadsAvailableCountries()

    });


    it('TC_UploadList_001 - Verify redirection to Upload New List page.', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()
        poolss.clickOnContinueToUploadButton()
        cy.get('input[type="file"]').selectFile('cypress/fixtures/calls.xlsx', { force: true });

        // Now assert UI elements update
        //cy.contains('calls.xlsx').should('be.visible'); // File name visible

    });


    it('TC_UploadList_002-Verify Upload Pool UI and functionality', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()
        poolss.clickOnContinueToUploadButton()
        poolss.getFile()
        poolss.browseButton().should('be.visible').and('not.be.disabled');
        poolss.cancelButton().should('be.visible').and('not.be.disabled');
        poolss.uploadButton().should('be.visible').and('not.be.disabled');
        poolss.fileName().should('contain.text', 'File Name:');
        poolss.poolName().should('contain.text', 'Pool Name:');
        poolss.fileSize().should('contain.text', 'KB');
        poolss.fileColumns().should('be.visible');
        poolss.uploadedColumns().should('be.visible');
        poolss.tooltipIcon().should('be.visible');
        poolss.tooltipIcon().trigger('mouseover');
        poolss.tooltipText().should('be.visible');
        poolss.dropdowns().should('have.length.greaterThan', 1);
        poolss.dropdownTrigger().first().click();
        cy.get('ul[role="listbox"]').should('be.visible');


    })
    it('TC_UploadList_012-Verify redirection on successful upload', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()
        poolss.clickOnContinueToUploadButton()
       poolss.getFile()
        poolss.verifyRedirectionOnSuccessfulUpload()


    });

    it('TC_UploadList_013- Verify Cancel button redirects correctly', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()
        poolss.clickOnContinueToUploadButton()
       poolss.getFile()
        cy.contains('Cancel').click()


    });

   it('TC_UploadList_014- Verify exit button works', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()
        poolss.clickOnContinueToUploadButton()
        poolss.getFile()
        cy.get('.btn-link').click()
        cy.contains('Keep').click()


    });

});





