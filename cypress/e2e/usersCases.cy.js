import { SignInPage } from "../PageObject/SignInPage";
import { UserPage } from "../PageObject/UserPage";
const signIn = new SignInPage()
const users = new UserPage()

describe("Users Page Cases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    const Email = "bhargav@mega.ai"
    const client = "MEGA-Bhargav"
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
})