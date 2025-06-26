import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { PoolsPage } from "../PageObject/PoolsPage";
import { TestCallPage } from "../PageObject/TestCallPage";

const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const testcall = new TestCallPage();
const poolss = new PoolsPage();
describe("Test Call(Mega-Bhargav) Cases", () => {
  const email = Cypress.config('users').user1.username
  const password = Cypress.config('users').user1.password
  const campName = 'bhargav MVA test'
  const clientName = 'MEGA-Bhargav'
  beforeEach(() => {

    cy.visit('/login')
    cy.viewport(1920, 1080)
    signIn.verifyLoginFuntionality(email, password);
     signIn.validateSignIn()
  })

  it("TC_TestCall_001 validate that user is able to goto Callls Page ", () => {
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
  })
  it("TC_TestCall_002 validate that user is not able to export file without filtering campaigns ", () => {
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    testcall.validateExportError()
  })
  //uncommment me when fixed
  // it("TC_TestCall_003 validate Campaign Filter functionality ", () => {
  //   clients.clickonclients()
  //   project.gotoClient(clientName)
  //   testcall.gotoTestCall()
  //   testcall.validateCampaignFilter(campName)
  // })
  // it("TC_TestCall_004 validate user is able to export after selecting campaign ", () => {
  //   clients.clickonclients()
  //   project.gotoClient(clientName)
  //   testcall.gotoTestCall()
  //   testcall.validateCampaignFilter(campName)
  //   testcall.clickExportButton()
  // })
  // it("TC_TestCall_005 validate Search  by Phone Number ", () => {
  //   const phoneNo = '+923'
  //   clients.clickonclients()
  //   project.gotoClient(clientName)
  //   testcall.gotoTestCall()
  //   testcall.validateSearchbyPhoneNumber(phoneNo)
  // })
  // it("TC_TestCall_006 validate call status filter ", () => {
  //   const outcome = 'completed'
  //   clients.clickonclients()
  //   project.gotoClient(clientName)
  //   testcall.gotoTestCall()
  //   testcall.validateCallStatusFilter(outcome)
  // })
  // it("TC_TestCall_007 Verify that pagination works correctly ", () => {
  //   clients.clickonclients()
  //   project.gotoClient(clientName)
  //   testcall.gotoTestCall()
  //   cy.wait(7000)
  //   poolss.VerifyPaginationControlsWork()
  // })
  // it("TC_TestCall_008 Verify view more icon functionality ", () => {
  //   clients.clickonclients()
  //   project.gotoClient(clientName)
  //   testcall.gotoTestCall()
  //   cy.wait(7000)
  //   testcall.validateViewMoreButton()
  // })
  it("TC_TestCall_009 Validate select date range works as expected ", () => {
    const month= 'May'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    testcall.applyDateRangeFilter(month)
  })
})
