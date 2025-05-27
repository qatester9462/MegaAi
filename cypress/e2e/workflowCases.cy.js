import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { WorkflowPage } from "../PageObject/workflowPage";
import { ReuseableCode } from "../support/ReuseableCode";
import { it } from "mocha";
const signIn = new SignInPage
const clients = new ClientsPage()
const workflow = new WorkflowPage()
const project = new ProjectPage()
const reuseableCode = new ReuseableCode()
describe("Workflow Cases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
    })
    it("TC_Workflow_001 , Verify user is able to goto workflow page ", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
    })
    it("TC_Workflow_002 , Validate that user is not able to add workflow without any misisng field", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('All fields are required.')
    })
    it("TC_Workflow_003 , Validate that user is not able to add workflow without adding any action", () => {
        const clientName = 'MEGA-Bhargav'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkLeadStatuses()
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Please add at least one action.')
    })

    it("TC_Workflow_004 , Verify user is able to create new workflow ", () => {
        const clientName = 'MEGA-Bhargav'
        const actionName = 'Send SMS'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkLeadStatuses()
        workflow.clickAnyAction(actionName)
        workflow.addAction(actionName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Workflow added successfully.')
    })

    it("TC_Workflow_005 , Filter workflow by project and delete workflow", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        cy.wait(3000)
        workflow.filterWorkflow()
        workflow.deleteWorkflow()
    })
})
