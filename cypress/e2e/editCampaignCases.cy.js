import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { Campaign } from "../PageObject/CampaignPage";
import { EditCampaigns } from "../PageObject/EditCampaign";
import { faker } from "@faker-js/faker";
import { it } from "mocha";
const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const campaign = new Campaign
const editcampaignn = new EditCampaigns()
describe("Clients page", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
    })

    it("TC_Edit_Basic-Info_001 , Verify redirection to Edit Campaign page (Basic Info) ", () => {


        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign()
    })


    it("TC_Edit_Basic-Info_002 , Verify only Name field is editable ", () => {


        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign()
        editcampaignn.verifyOnlyNameFieldIsEditable()
    })

    it("TC_Edit_Basic-Info_003 , Verify Name field accepts valid data ", () => {

        const camp = 'dsfd'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        //editcampaignn.verifyOnlyNameFieldIsEditable()
        editcampaignn.verifyNameFieldAcceptsValidData()

    })

    it("TC_Edit_Basic-Info_004 , Verify Name field mandatory validation ", () => {

        const camp = 'Updated Campaign Name'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyNameFieldMandotoryValidation()

    })

    it("TC_Edit- Campaign (Goals)_001 , Verify redirection to Goals page ", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToGoalsPage()


    })

    it("TC_Edit- Campaign (Goals)_002 , Verify UI elements on Goals page", () => {
        const camp = 'dsfd'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToGoalsPage()
        editcampaignn.verifyUiElementsOnGoalsPage()
    })
    it("TC_Edit- Campaign (Goals)_005 , Verify ability to change goal selection", () => {

        const camp = 'dsfd'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToGoalsPage()
        editcampaignn.verifyGoalChangeInEditCampaign()


    })
    it("TC_Edit-Campaign(Pools)_001 , Verify redirection to Pools page", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()


    })
    it("TC_Edit-Campaign(Pools)_002 , Verify UI elements on Pools page", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyUiElementsOnPoolsPage()


    })

    it("TC_Edit-Campaign(Pools)_004 , Verify ability to select/deselect pools", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyAbilityToSelectDeselectPool()

    })
    it("TC_Edit-Campaign(Pools)_005 , Verify pool data visibility", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyPoolDataVisibility()

    })

    it("TC_Edit-Campaign(Pools)_007 , Verify Actions dropdown options", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.VerifyActiondropdownPOptions()

    })




it("TC_Edit-Campaign(Pools)_008 , Verify Resume action functionality", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyResumeCampaign()

    })

it("TC_Edit-Campaign(Pools)_009 , Verify Duplicate action functionality", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyDuplicateCampaign()

    })


it("TC_Edit-Campaign(Pools)_010 , Verify Delete action functionality", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyDeleteCampaign()
    })














































})