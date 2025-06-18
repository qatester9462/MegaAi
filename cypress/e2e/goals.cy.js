import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { CreateProject } from "../PageObject/CreateProject";
import { GoalsProject } from "../PageObject/GoalsPage";
import { ReuseableCode } from "../support/ReuseableCode";


const signIn = new SignInPage();
const clients = new ClientsPage();
const createProject = new CreateProject();
const goalsProject = new GoalsProject();
const reuseableCode = new ReuseableCode();

describe("goals", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    const projectName = ('project ' + reuseableCode.generateRandomString(4))
    const description = ('Testing ' + reuseableCode.generateRandomString(20))
    const type = 'Debt Collection'
    const name = 'MEGA-Bhargav'
    beforeEach(() => {
        cy.visit('/login');
        cy.viewport(1920, 1080);
        signIn.verifyLoginFuntionality(email, password);
    });

    it("Goals step redirection.", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
    });
    it("Verify, All Elements on goals form ", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.clickNextButton();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Goal Types Display", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.clickNextButton();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Goal Selection", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.clickNextButton();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Next step button functionality Without Selecting a Goal", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.clickNextButton();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Pagination for Goal Selection", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.clickNextButton();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Previous Step Button Functionality", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.clickNextButton();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify 'Next Step' Button Functionality", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.clickNextButton();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify system behavior when refreshing the Goals page", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality(name);
        createProject.verifyValidInputProjectNameField(projectName);
        createProject.verifyValidInputProjectDescriptionField(description);
        createProject.verifyValidSelectionCampaignTypeDropdown(type);
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.clickNextButton();
        goalsProject.VerifyAllElementsGoalsForm();
    });
});
