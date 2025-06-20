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
        signIn.validateSignIn()
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

    it("TC_Workflow_004 , Verify user is able to create new workflow by random sleection of any one lead status ", () => {
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
        //workflow.filterWorkflow()
        workflow.deleteWorkflow()
    })
    it("TC_Workflow_006, Add and Delete all the actions", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        cy.wait(3000)
        workflow.addandDeleteAllActions()
    })
    it('TC_Workflow_007, Create and delete workflow against "New" lead status', () => {
        const clientName = 'MEGA-Bhargav'
        const actionName = 'API Request'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        const status = "New"
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkNewLeadStatus()
        workflow.clickAnyAction(actionName)
        workflow.addAction(actionName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Workflow added successfully.')
        workflow.validateLeadStatuses(status)
        workflow.deleteWorkflow()
    })
    it('TC_Workflow_008, Create and delete workflow against "Technical problem" lead status', () => {
        const clientName = 'MEGA-Bhargav'
        const actionName = 'API Request'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        const status = "Technical Problem"
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkTechnicalProbLeadStsus()
        workflow.clickAnyAction(actionName)
        workflow.addAction(actionName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Workflow added successfully.')
        workflow.validateLeadStatuses(status)
        workflow.deleteWorkflow()
    })
    it('TC_Workflow_009, Create and delete workflow against "Busy Line" lead status', () => {
        const clientName = 'MEGA-Bhargav'
        const actionName = 'Forward Call'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        const status = "Busy Line"
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkBusyLineLeadStatus()
        workflow.clickAnyAction(actionName)
        workflow.addAction(actionName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Workflow added successfully.')
        workflow.validateLeadStatuses(status)
        workflow.deleteWorkflow()
    })
    it('TC_Workflow_010, Create and delete workflow against "Automatic Redial" lead status', () => {
        const clientName = 'MEGA-Bhargav'
        const actionName = 'API Request'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        const status = "Automatic Redial"
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkAutomaticRedialLeadStatus()
        workflow.clickAnyAction(actionName)
        workflow.addAction(actionName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Workflow added successfully.')
        workflow.validateLeadStatuses(status)
        workflow.deleteWorkflow()
    })
    it('TC_Workflow_011, Create and delete workflow against "Closed Declined" lead status', () => {
        const clientName = 'MEGA-Bhargav'
        const actionName = 'API Request'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        const status = "Closed Declined"
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkClosedDeclinedLeadStatus()
        workflow.clickAnyAction(actionName)
        workflow.addAction(actionName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Workflow added successfully.')
        workflow.validateLeadStatuses(status)
        workflow.deleteWorkflow()
    })
    it('TC_Workflow_012, Create and delete workflow against "Contact But No Outcome" lead status', () => {
        const clientName = 'MEGA-Bhargav'
        const actionName = 'Send SMS'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        const status = "Contact But No Outcome"
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkContactNoOutcomeLeadStatus()
        workflow.clickAnyAction(actionName)
        workflow.addAction(actionName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Workflow added successfully.')
        workflow.validateLeadStatuses(status)
        workflow.deleteWorkflow()
    })

    it('TC_Workflow_013, Create and delete workflow against "Processing" lead status', () => {
        const clientName = 'MEGA-Bhargav'
        const actionName = 'Forward Call'
        const workflowName = ('Workflow ' + reuseableCode.generateRandomString(5))
        const status = "Processing"
        clients.clickonclients()
        project.gotoClient(clientName)
        workflow.gotoWorkflow(clientName)
        workflow.addWorkflowName(workflowName)
        workflow.selectProject()
        workflow.checkProcessingLeadStatus()
        workflow.clickAnyAction(actionName)
        workflow.addAction(actionName)
        workflow.clickAddWorkflow()
        workflow.validateToastMessage('Workflow added successfully.')
        workflow.validateLeadStatuses(status)
        workflow.deleteWorkflow()
    })
})
