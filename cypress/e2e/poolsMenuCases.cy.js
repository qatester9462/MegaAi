import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { PoolsPage } from "../PageObject/PoolsPage";
const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const poolss = new PoolsPage();



describe("poolsMenuCases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
         signIn.validateSignIn()
    })

    it('TC_Pools_Libraries-001 - Verify redirection to the Pools page', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
         cy.wait(6000)
        poolss.verifyRedirectionToThePoolsPage()
        poolss.verifyPresenceOfAllElementsOnPoolspage()
    })

    it('TC_Pools_Libraries-003 - Verify + button redirects to Upload New Pool page', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
         cy.wait(6000)
        poolss.verifyPlusButtonRedirectsToUploadNewPoolPage()
    })


    it('TC_Pools_Libraries-004 - Verify Edit icon opens Edit Pool Info modal', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
         cy.wait(6000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
    })

    it('TC_Pools_Libraries-005 - Verify Delete icon opens confirmation modal', () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
         cy.wait(6000)
        poolss.verifyDeleteiconOpensConfirmationModal()
    })

    it('TC_Pools_Libraries_006 - Verify Project filter dropdown works correctly', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
         cy.wait(7000)
        poolss.verifyProjectFilterDropdownWorksCorrectly()
    });
    it('TC_Pools_Libraries_007 - Verify Campaigns filter dropdown works correctly', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(7000)
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

    it('TC_Edit-Pool-info_002 - Verify user is able to edit pool info', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss. verifyEditIconFunctionality(' name updated',' description updated testing')
    });


    it('TC_Edit-Pool-info_009 -Verify that blanks fields are not allowed.', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyEditIconOpensEditPoolInfoModal()
        poolss.validateBlankFields()

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
    it('TC_Delete-Pool-Modal_002 - Verify user is able to delete poll', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.verifyDeleteiconOpensConfirmationModal()

        cy.contains('Delete Pool').should('be.visible');
        cy.contains('Are you sure you want to delete this pool ?').should('be.visible');
         cy.get('p-button[label="Delete"]').click();
        cy.contains('Delete Pool').should('not.exist');
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
    
});

    