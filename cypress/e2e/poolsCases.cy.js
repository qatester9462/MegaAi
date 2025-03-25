import { SignInPage } from "../PageObject/SignInPage";
import { PoolsStep } from "../PageObject/PoolsStep";
import { ClientsPage } from "../PageObject/ClientsPage";
const signIn = new SignInPage
const poolsPage = new PoolsStep
const clients = new ClientsPage()

describe("Clients page", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
    })

    it("Verify the complete flow to Pool's Step in Project Creation", () => {
        clients.clickonclients()
        poolsPage.validatePoolsStep('MEGA-Bhargav', 'Testing Project', 'Testing Mega AI Pools step', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        poolsPage.clickButton('Next Step')
        poolsPage.selectGoal()
        poolsPage.clickButton('Next Step')
    })
    it("Validate that user is able to move to Next Step by selecting any already created pools", () => {
        clients.clickonclients()
        poolsPage.validatePoolsStep('MEGA-Bhargav', 'Testing Project', 'Testing Mega AI Pools step', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        poolsPage.clickButton('Next Step')
        poolsPage.selectGoal()
        poolsPage.clickButton('Next Step')
        poolsPage.selectpool()
        poolsPage.clickButton('Next Step')
    })
})