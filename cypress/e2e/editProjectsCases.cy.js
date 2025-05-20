import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { CreateProject } from "../PageObject/CreateProject";
import { ReuseableCode } from "../support/ReuseableCode";
const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const createproject = new CreateProject();
const reuseableCode = new ReuseableCode();
describe("editProjectsCases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
    })
    it("Validate that user is able to Edit,Save,Delete basic info of any selected project", () => {
        const name = ('Editing Porject Name ' + reuseableCode.generateRandomString(5))
        clients.clickonclients()
        //project.gotoClientMegaBhargav('MEGA-Bhargav')
        const clientName = 'Sammi'
        project.gotoClient(clientName)
        project.gotoProjectsPage(clientName)
        project.validateEditBasicInfo(name, '(+45) Denmark', 'Europe/Copenhagen (UTC +02:00)')
        createproject.clickButton('Save')
        createproject.validateToastMessage('Success')
    })
    it("Validate that user is able to Edit,Save,Delete Goal step of any selected project", () => {
        const clientName = 'Sammi'

        clients.clickonclients()
       project.gotoClient(clientName)
    project.gotoProjectsPage(clientName)
 project.validateEditGoall()



    })
    it("Validate that user is able to Edit,Save,Delete Pools step of any selected project", () => {
        const clientName = 'MEGA-Bhargav'

        clients.clickonclients()
        project.gotoClient('MEGA-Bhargav')
        project.gotoProjectsPage('MEGA-Bhargav')
        project.validateEditPools()
        createproject.clickButton('Save')
        createproject.validateToastMessage('Success')
    })
    it("Validate that user is able to Edit,Save,Delete Scripts step of any selected project", () => {
        clients.clickonclients()
        project.gotoClientMegaBhargav('MEGA-Bhargav')
        project.gotoProjectsPage()
        project.validateEditScipts('Hi,I am Lisa from creditor,talking to Mona Lisa editing script')
        createproject.clickButton('Save')
        createproject.validateToastMessage('Success')
    })
    it("Validate that user is able to Edit,Save,Delete Settings step of any selected project", () => {
        clients.clickonclients()
        project.gotoClientMegaBhargav('MEGA-Bhargav')
        project.gotoProjectsPage()
        project.validateEditSettings()
        createproject.clickButton('Save')
        createproject.validateToastMessage('Success')
    })
    it("Validate that user is able to Edit,Save,Delete Dialing step of any selected project", () => {
        clients.clickonclients()
        project.gotoClientMegaBhargav('MEGA-Bhargav')
        project.gotoProjectsPage()
        project.validateEditDialing()
        createproject.setStatusToggles()
        createproject.clickButton('Save')
        createproject.validateToastMessage('Success')
        project.validateDeleteProject()
        createproject.validateToastMessage('Success')
    })
})