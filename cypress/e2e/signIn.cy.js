/// <reference types = "cypress"/>
import { SignInPage } from "../PageObject/SignInPage";
const signIn = new SignInPage
describe("Sign-In Page Validation", () => {
  const email = Cypress.config('users').user1.username
  const password = Cypress.config('users').user1.password

  beforeEach(() => {
    cy.visit('/login')
  })

  it("Verify All Elements on the Sign-In Page", () => {
     signIn.verifyAllElementsSignInPage();  
  })
    it("Verify the Sign-in Functionality & Redirection on Dashboard  ", () => {
      signIn.verifyLoginFuntionality(email,password);
    });
  });

