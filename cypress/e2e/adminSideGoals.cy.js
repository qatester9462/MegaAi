import { SignInPage } from "../PageObject/SignInPage";
import { GoalsProject } from "../PageObject/GoalsPage";
import { UserPage } from "../PageObject/UserPage";
import { WorkflowPage } from "../PageObject/workflowPage";
const signIn = new SignInPage()
const goalsProject = new GoalsProject()
const users = new UserPage()
const workflow = new WorkflowPage()
describe("Admin Side Goal Types Tab Cases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    const description = 'This is testing description for goal types and goal. Please ignore. Thanks.'
    const goalType = 'Debt testing Goal'
    beforeEach(() => {
        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
        signIn.validateSignIn()
    })
    it("Verify user is able to goto side menu bar Admin Goals Page", () => {
        goalsProject.gotoAdminGoals()
    })
    it("Verify user is able to create new goal type", () => {
        goalsProject.gotoAdminGoals()
        goalsProject.createGoalType()
        goalsProject.addGoalTypeName(goalType)
        goalsProject.addDescription(description)
        goalsProject.selectModule()
        users.clickButton('Create')
        workflow.validateToastMessage('Goal Type Created Successfully')
        cy.wait(1000)
        goalsProject.validateCreatedGoalType(goalType)
    })
    it("Verify user is able to serach by Goal Type", () => {
        goalsProject.gotoAdminGoals()
        goalsProject.searchByGoalType(goalType)
    })
    it("Verify user is able to delete new goal type", () => {
        goalsProject.gotoAdminGoals()
        goalsProject.searchByGoalType(goalType)
        goalsProject.deleteGoalType(goalType)
    })
    it("Verify user is able to edit goal type", () => {
        goalsProject.gotoAdminGoals()
        goalsProject.searchByGoalType(goalType)
        goalsProject.validateEditGoalType(goalType)
        users.clickButton('Update')
        workflow.validateToastMessage('Goal Type Updated Successfully')
    })
    it("Verify Modules filter functionality", () => {
        goalsProject.gotoAdminGoals()
        cy.wait(3000)
        goalsProject.validateModuleFilter('Module-1')
    })
    it("Verify clear filter functionality", () => {
        goalsProject.gotoAdminGoals()
        cy.wait(3000)
        goalsProject.validateClearFilter('Module-1')
    })
})

describe("Admin Side Goals Tab Cases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    const client = "MEGA-Bhargav"
    beforeEach(() => {
        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
        signIn.validateSignIn()
    })
    it("Verify user is able to goto Goals Tab(Admin Goals Page)", () => {
        goalsProject.gotoAdminGoals()
        goalsProject.gotoGoalsTab()
    })
    it("Verify that client filter is getting applied and showing relevant clients", () => {
        goalsProject.gotoAdminGoals()
        goalsProject.gotoGoalsTab()
        goalsProject.validateClientFilter(client)
    })
 
})