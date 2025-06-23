import { SignInPage } from "../PageObject/SignInPage";
import { UserPage } from "../PageObject/UserPage";
import { ReuseableCode } from "../support/ReuseableCode";
import { WorkflowPage } from "../PageObject/workflowPage";
const signIn = new SignInPage()
const users = new UserPage()
const workflow = new WorkflowPage()
const reuseableCode = new ReuseableCode();
describe("Users Page Cases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    const Email = "bhargav@mega.ai"
    const client = "MEGA-Bhargav"
    const name = ('User' + reuseableCode.getRandomFirstName())
    const userEmail = reuseableCode.getRandomEmail()
    const userPassword = reuseableCode.getRandomPassword()
    const phoneNo = ('+' + reuseableCode.getRandomPhoneNumber())
    beforeEach(() => {
        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
        signIn.validateSignIn()
    })

    it("Verify user is able to goto Users Page", () => {
        users.gotoUsers()
    })
    it("Verify search by email", () => {
        users.gotoUsers()
        users.validateSearchFilter(Email)
    })
    it("Verify clients filter functionality", () => {
        users.gotoUsers()
        users.validateClientFilter(client)
    })
    it("Verify clear filter functionality", () => {
        users.gotoUsers()
        users.validateClearFilter(client)
    })
    it("Verify create new user fields", () => {
        users.gotoUsers()
        users.clickPlusButotn()
        users.selectClient()
        users.validateRole()
        users.addName(name)
        users.addEmail(userEmail)
        users.addPassword(userPassword)
        users.addPhoneNumber(phoneNo)
        users.selectCountry('+92')
    })
    it("Verify that new user can be created and deleted", () => {
        users.gotoUsers()
        users.clickPlusButotn()
        users.selectClient()
        users.validateRole()
        users.addName(name)
        users.addEmail(userEmail)
        users.addPassword(userPassword)
        users.addPhoneNumber(phoneNo)
        users.selectCountry('+92')
        users.clickButton('Create')
        workflow.validateToastMessage('User Created Successfully')
        cy.wait(1000)
        users.validateSearchFilter(userEmail)
        users.deleteCreatedUser(userEmail)
        workflow.validateToastMessage('User Deleted Successfully')
    })
    it("Validate that random password can be generated while creating new user", () => {
        users.gotoUsers()
        users.clickPlusButotn()
        users.validateGeneratePassword()
    })
    it("Validate field erros", () => {
        users.gotoUsers()
        users.clickPlusButotn()
        users.clickButton('Create')
        users.validateFieldErrors('Select Client')
        users.validateFieldErrors('Enter Name')
        users.validateFieldErrors('Enter Password')
        users.validateFieldErrors('Select country')
    })
    it("Validate phone number tooltip and cross icon functionality", () => {
        users.gotoUsers()
        users.clickPlusButotn()
        users.validateTooltip()
    })
    it("Validate created user can be edited", () => {
        users.gotoUsers()
        users.clickPlusButotn()
        users.selectClient()
        users.validateRole()
        users.addName(name)
        users.addEmail(userEmail)
        users.addPassword(userPassword)
        users.addPhoneNumber(phoneNo)
        users.selectCountry('+92')
        users.clickButton('Create')
        workflow.validateToastMessage('User Created Successfully')
        cy.wait(1000)
        users.validateSearchFilter(userEmail)
        users.validateEditUser(userEmail)
        users.clickButton('Update')
        workflow.validateToastMessage('User Updated Successfully')
        cy.wait(1000)
        users.validateSearchFilter(userEmail)
        users.deleteCreatedUser(userEmail)
        workflow.validateToastMessage('User Deleted Successfully')
    })
})