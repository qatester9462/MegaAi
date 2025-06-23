import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { PoolsPage } from "../PageObject/PoolsPage";
import { it } from "mocha";
const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const poolss = new PoolsPage()



describe("Upload Pool cases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
       signIn.validateSignIn()
    })
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


    it('TC_UploadPool_006 - Verify Cancel button functionality', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.VerifyCancelButtonFunctionality()

    });

    it('TC_UploadList_001 - Verify redirection to Upload New List page.', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()
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
        poolss.getFile()
        cy.get('.btn-link').click()
        cy.contains('Keep').click()


    });

});





