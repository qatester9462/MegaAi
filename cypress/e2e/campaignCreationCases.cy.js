import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { Campaign } from "../PageObject/CampaignPage";
import { AgentPersonality } from "../PageObject/AgentPersonalityPage";
import { faker } from "@faker-js/faker";
const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const campaign = new Campaign()
const agent = new AgentPersonality();
describe("campaignCreationCases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
        signIn.validateSignIn()
    })

    it("TC_Campaign_003 , Verify filtering campaigns by Campaign Type ", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        campaign.ValidateCampaignTypeFilter('Debt Collection')
    })
    it("TC_Campaign_004 , Verify filtering campaigns by Project ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        campaign.verifyfilteringCampaignsByProject()
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
        const campaignName = faker.company.name()
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        campaign.ClickOnPlusbutton()
        campaign.CreateCampaign(campaignName)
        campaign.clickOnNextButton()
        campaign.selectGoalType('Debt Collection')
        campaign.clickOnNextButton()
        campaign.SelectPools()
        campaign.clickOnNextButton1()
        campaign.validateCampaignAgentPersonality()
        agent.selectAgentCard()
        // campaign.SelectScript()
        campaign.clickOnNextButton()
        campaign.selectSettings()
        campaign.clickOnNextButton()
        campaign.selectDialing()
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
    // it("TC_Create-Campaign_004 , Verify search filter functionality", () => {
    //     const clientName = 'MEGA-Bhargav';
    //     const name = 'bhargav MVA test'
    //     clients.clickonclients();
    //     project.gotoClient(clientName);
    //     campaign.gotoCampaign();
    //     campaign.validateSearchFunctionality(name)
    // })
    it("TC_Create-Campaign_005 , Verify Clear filter functionality", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients();
        project.gotoClient(clientName);
        campaign.gotoCampaign();
        campaign.ValidateCampaignTypeFilter('Debt Collection')
        campaign.validateClearFilter()
    })
    it("TC_Create-Campaign_006 , Validate that user is able to chnage the status Active/Pause", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients();
        project.gotoClient(clientName);
        campaign.gotoCampaign();
        campaign.validateChangeStatus()
    })
})