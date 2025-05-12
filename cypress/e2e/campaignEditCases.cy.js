

import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { Campaign } from "../PageObject/CampaignPage";

const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const campaign = new Campaign
describe("Clients page", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
    })

    it("TC_Campaign_003 , Verify filtering campaigns by Campaign Type ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        campaign.ValidateAndEditdropdownCampaignType('Discover')




    })
    it("TC_Campaign_004 , Verify filtering campaigns by Project ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        campaign.ValidateAndEditdropdownproject()



    })

    it("TC_Campaign_005 , Verify filtering campaigns by Status ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        campaign.ValidateAndEditdropdownStatus()



    })
    it("TC_Campaign_008 , Verify sorting functionality on campaign columns", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        campaign.ValidateSortingInCampaign()



    })

    it("TC_Campaign_010 , Verify clicking + button redirects to the Create New Campaign page", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        campaign.ClickOnPlusbutton()
        campaign.CreateCampaign()
        campaign.clickOnNextButton()
        campaign.selectGoalType('Discover')
        campaign.clickOnNextButton()
        campaign.SelectPools()
        campaign.clickOnNextButton1()
        campaign.SelectScript()
        campaign.clickOnNextButton()
        campaign.clickOnNextButton()
        campaign.clickOnNextButton()
        campaign.clickOnSaveAndExitButton()
        campaign.CampaignCreationToast()
    })




    it("TC_Create-Campaign_001 , Verify Select dropdown loads projects", () => {
        const clientName = 'MEGA-Bhargav';
        clients.clickonclients();
        project.gotoClient(clientName);
        campaign.gotoCampaign();
        campaign.ClickOnPlusbutton();
        

})

it("TC_Create-Campaign_003 , Verify project selection autofills", () => {
    const clientName = 'MEGA-Bhargav';
    clients.clickonclients();
    project.gotoClient(clientName);
    campaign.gotoCampaign();
    campaign.ClickOnPlusbutton();
    campaign.CampaignCreateFirstForm()
    





})



})