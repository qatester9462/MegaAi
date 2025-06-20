import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { CreateProject } from "../PageObject/CreateProject";
const signIn = new SignInPage
const clients = new ClientsPage()
const createproject = new CreateProject();
//pools tab removed from project creation step
// describe.skip("poolsCases", () => {
//     const email = Cypress.config('users').user1.username
//     const password = Cypress.config('users').user1.password
//     beforeEach(() => {

//         cy.visit('/login')
//         cy.viewport(1920, 1080)
//         signIn.verifyLoginFuntionality(email, password);
            // signIn.validateSignIn()
//     })

//     it("Verify the complete flow to Pool's Step in Project Creation", () => {
//         clients.clickonclients()
//         createproject.validatePoolsStep('MEGA-Bhargav', 'Testing Project', 'Testing Mega AI Pools step', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
//         createproject.clickButton('Next Step')
//         createproject.selectGoal()
//         createproject.clickButton('Next Step')
//     })
//     it("Validate that user is able to move to Next Step by selecting any already created pools", () => {
//         clients.clickonclients()
//         createproject.validatePoolsStep('MEGA-Bhargav', 'Testing Project', 'Testing Mega AI Pools step', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
//         createproject.clickButton('Next Step')
//         createproject.selectGoal()
//         createproject.clickButton('Next Step')
//         createproject.selectpool()
//         createproject.clickButton('Next Step')
//     })
//     it("Validate that user is able to move to Next Step by uploading new pool", () => {
//         const poolName='Testing'
//         clients.clickonclients()
//         createproject.validatePoolsStep('MEGA-Bhargav', 'Testing Project', 'Testing Mega AI Pools step', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
//         createproject.clickButton('Next Step')
//         createproject.selectGoal()
//         createproject.clickButton('Next Step')
//         createproject.clickUploadPool()
//         createproject.addPoolName(poolName)
//         createproject.addPoolDescription('testing upload pool section')
//         createproject.selectProject()
//         createproject.selectCountry()
//         createproject.clickContinue()
//         createproject.uploadFile('files/test call.xlsx')
//         createproject.validateFileColumns()
//         createproject.validateUploadedCoulmns()
//         createproject.clickUploadButton()
//         createproject.validateUploadedPool(poolName)
//         createproject.clickButton('Next Step')
//     })
// })