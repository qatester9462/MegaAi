import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { Campaign } from "../PageObject/CampaignPage";
import { TestCallPage } from "../PageObject/TestCallPage";



const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const campaign = new Campaign
const testcall = new TestCallPage();
describe("testContactModal", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
    })

    it("TC_Modal_001 , Redirect to Test Call modal ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        testcall.clickONTestCall()
        testcall.clickOnCreateNewButton()
        testcall.ValidateelementsOnModal()
        

    })

    /*it("TC_Modal_005 , Eye icon - view contact details ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        testcall.clickONTestCall()
        testcall.ValidateEyeIconviewContactDetails()
    })*/
    it("TC_Modal_007 , Cancel button functionality ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        testcall.clickONTestCall()
        testcall.ValidateCancelbuttonFunctionality()

    })
    it("TC_Modal_008 ,Create New Contact button functionality ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        testcall.clickONTestCall()
        testcall.clickOnCreateNewButton()

    })

    it("TC_Create_001 ,Redirect to Create New Test Contact form ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        testcall.clickONTestCall()
        testcall.clickOnCreateNewButton()
        

    })

 it("TC_Create_002 ,Verify all form elements are present ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        testcall.clickONTestCall()
        testcall.clickOnCreateNewButton()
        testcall.ValidatecreateNewButton()

    })

})