import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { CreateProject } from "../PageObject/CreateProject";
import { ReuseableCode } from "../support/ReuseableCode";

const project = new ProjectPage();
const signIn = new SignInPage();
const clients = new ClientsPage();
const createproject = new CreateProject();
const reuseableCode = new ReuseableCode();
describe("createProject", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    const projectName = ('Test Project ' + reuseableCode.generateRandomString(5))
    const description = ('This is testing paragraph ' + reuseableCode.generateRandomString(10))
    beforeEach(() => {
        cy.visit('/login');
        cy.viewport(1920, 1080);
        signIn.verifyLoginFuntionality(email, password);
         signIn.validateSignIn()
    });

    it("Verify Clicking '+' Add button Redirects user to the Create new Project", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.clickOnplusButtonOnProjectPage()
    });
    it("Verify 'Next Step' Button is Enabled After Filling All Fields", () => {
        const clientName = 'MEGA-Bhargav'
        const type = 'Debt Collection'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.clickOnplusButtonOnProjectPage()
        createproject.verifyValidInputProjectNameField(projectName)
        createproject.verifyValidInputProjectDescriptionField(description)
        createproject.verifyValidSelectionCampaignTypeDropdown(type)
        createproject.verifyValidSelectionCountryDropdown()
        createproject.verifyValidSelectionTimezoneDropdown()
        createproject.VerifyNextStepButtonEnabledAfteFillingAllFields()

    })
    it("Verify 'Cancel' Button Functionality", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.clickOnplusButtonOnProjectPage()
        createproject.verifyValidInputProjectNameField(projectName)
        createproject.VerifyCancelButtonFunctionality()
    })
     it('Verify user is able to delete created project', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        project.deleteProjects()
        project.confirmDelete()
        project.verifyProjectDeleted()
    })
});
