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

    it.only("TC_Edit_Basic-Info_003 , Verify Name field accepts valid data ", () => {

        const camp = 'Updated Campaign Name'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyOnlyNameFieldIsEditable()
        editcampaignn.verifyNameFieldAcceptsValidData()

    })



})