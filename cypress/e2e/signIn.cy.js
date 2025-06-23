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
    signIn.verifyLoginFuntionality(email, password);
    signIn.validateSignIn()
  });
  it('Verify Sign-in with invalid email format', () => {
    signIn.verifyLoginFuntionality('invalidemailformat@', password)
    signIn.validateError('Enter valid email')
  })
  it('Verify Sign-in with incorrect password', () => {
    signIn.verifyLoginFuntionality(email, 'incorrect password')
    signIn.validateToastMessage('Invalid credentials')
  })
  it('Verify Sign-in with unregistered email', () => {
    signIn.verifyLoginFuntionality('unregisteremail@yopmail.com', password)
    signIn.validateToastMessage('Invalid credentials')
  })
  it('Verify Sign-in with only email entered', () => {
    signIn.verifyLoginFuntionality('qatesthub2@gmailcom', null)
    signIn.validateError('Enter password')
  })
  it('Verify Sign-in with only password entered', () => {
    signIn.verifyLoginFuntionality(null, 'sZWL5WDbCoaKMmNh')
    signIn.validateError('Enter email')
  })
  it('Verify Sign-in with blank credentials', () => {
    signIn.verifyLoginFuntionality(null, null)
    signIn.validateError('Enter email')
    signIn.validateError('Enter password')
  })
  it('Verify that user is able to sign out', () => {
    signIn.verifyLoginFuntionality(email, password);
    signIn.validateSignIn()
    signIn.verifySignOut(email,password)
  })
});

