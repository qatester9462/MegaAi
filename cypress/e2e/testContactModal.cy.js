import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { Campaign } from "../PageObject/CampaignPage";
import { TestCallPage } from "../PageObject/TestCallPage";
import { ReuseableCode } from "../support/ReuseableCode";
import { CreateProject } from "../PageObject/CreateProject";


const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const campaign = new Campaign
const testcall = new TestCallPage();
const reuseableCode = new ReuseableCode();
const createproject = new CreateProject();
describe("testContactModal", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
        signIn.validateSignIn()
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

    it("TC_Modal_005 , Eye icon - view contact details ", () => {

        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        testcall.ValidateEyeIconviewContactDetails()
    })
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

    it("TC_Create_002 ,Verify that new contact is being created ", () => {
        const firstname=(reuseableCode.getRandomFirstName())
        const lastName=(reuseableCode.getRandomFirstName())
        const creditor = (reuseableCode.getRandomFirstName())
        const amount = (reuseableCode.getRandomNumber(2, 5))
        const collector = (reuseableCode.getRandomFirstName())
        const debitor = (reuseableCode.getRandomFirstName())
        const houseNo = (reuseableCode.getRandomNumber(1, 4))
        const streetName = (reuseableCode.generateRandomString(5))
        const zipcode = (reuseableCode.getRandomNumber(2, 5))
        const description = (reuseableCode.generateRandomString(10))
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        testcall.clickONTestCall()
        testcall.clickOnCreateNewButton()
        testcall.ValidatecreateNewButton(firstname,lastName,creditor, amount, collector, debitor, '3', 'testing', houseNo, streetName, 'UK', '234000', description)
        createproject.validateToastMessage('Success')
        testcall.validateCreatedContact(firstname)
        createproject.validateToastMessage('Success')
        cy.get('.flex > > .ng-star-inserted').contains('Call Now').should('exist').click()
        createproject.validateToastMessage('Success')
    })


})