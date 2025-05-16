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



describe("Clients page", () => {
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






































})