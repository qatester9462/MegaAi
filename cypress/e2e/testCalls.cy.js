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
  beforeEach(() => {

    cy.visit('/login')
    cy.viewport(1920, 1080)
    signIn.verifyLoginFuntionality(email, password);
  })

  it("TC_TestCall_001 validate that user is able to goto Callls Page ", () => {
    const clientName = 'MEGA-Bhargav'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
  })
  it("TC_TestCall_002 validate that user is not able to export file without filtering campaigns ", () => {
    const clientName = 'MEGA-Bhargav'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    testcall.validateExportError()
  })
  it("TC_TestCall_003 validate Campaign Filter functionality ", () => {
    const clientName = 'MEGA-Bhargav'
    const campName = '29 camp'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    testcall.validateCampaignFilter(campName)
  })
  it("TC_TestCall_004 validate user is able to export after selecting campaign ", () => {
    const clientName = 'MEGA-Bhargav'
    const campName = '29 camp'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    testcall.validateCampaignFilter(campName)
    testcall.clickExportButton()
  })
  it("TC_TestCall_005 validate Search  by Phone Number ", () => {
    const clientName = 'MEGA-Bhargav'
    const phoneNo = '+923'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    testcall.validateSearchbyPhoneNumber(phoneNo)
  })
  it("TC_TestCall_006 validate call outcome filter ", () => {
    const clientName = 'MEGA-Bhargav'
    const outcome = 'New'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    testcall.validateCallOutcomeFilter(outcome)
  })
  it("TC_TestCall_007 Verify that pagination works correctly ", () => {
    const clientName = 'MEGA-Bhargav'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    cy.wait(7000)
    poolss.VerifyPaginationControlsWork()
  })
  it("TC_TestCall_008 Verify view more icon functionality ", () => {
    const clientName = 'MEGA-Bhargav'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    cy.wait(7000)
    testcall.validateViewMoreButton()
  })
  it("TC_TestCall_009 Validate select date range works as expected ", () => {
    const clientName = 'MEGA-Bhargav'
    const month= 'May'
    clients.clickonclients()
    project.gotoClient(clientName)
    testcall.gotoTestCall()
    testcall.applyDateRangeFilter(month)
  })
})
