import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { CreateProject } from "../PageObject/CreateProject";
const signIn = new SignInPage
const clients = new ClientsPage()
const createproject = new CreateProject();

describe("Clients page", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
    })
    it("Verify the complete flow to 'Settings' Step in Project Creation and validate all fields", () => {
        clients.clickonclients()
        createproject.validatePoolsStep('MEGA-Bhargav', 'Testing Project', 'Testing Mega AI Setting step', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next Step')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        createproject.selectpool()
        createproject.clickButton('Next Step')
        createproject.validateScriptStep()
        createproject.addFirstMessage('Hi,I am Lisa from creditor,talking to Mona Lisa')
        createproject.addLastMessage('Thank you for your time.')
        createproject.selectGender('female')
        createproject.selectVoice()
        createproject.selectDomainLibrary()
        createproject.addPrompts('You are a debt resolution AI assistant, your goal is to empathetically assist debtors')
        createproject.clickButton('Next Step')
        createproject.validateSettingStep()
        createproject.setCampaignPriority()
        createproject.setNumberofBots()
        createproject.selectSMSTemplate()
        createproject.selectCallNumber()
        createproject.clickButton('Next Step')
    })
})