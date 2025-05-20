import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { CreateProject } from "../PageObject/CreateProject";
import { GoalsProject } from "../PageObject/GoalsPage";


const signIn = new SignInPage();
const clients = new ClientsPage();
const projectPage = new ProjectPage();
const createProject = new CreateProject();
const goalsProject = new GoalsProject();

describe("goals", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {
        cy.visit('/login');
        cy.viewport(1920, 1080);
        signIn.verifyLoginFuntionality(email,password);
    });

    it("Goals step redirection.", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
    });
    it("Verify, All Elements on goals form ", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
        createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Goal Types Display", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
       // createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Goal Selection", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
       // createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Next step button functionality Without Selecting a Goal", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
       // createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Pagination for Goal Selection", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
       // createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify Previous Step Button Functionality", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
       // createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify 'Next Step' Button Functionality", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
       // createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
        goalsProject.VerifyAllElementsGoalsForm();
    });
    it("Verify system behavior when refreshing the Goals page", () => {
        clients.clickonclients();
        createProject.verifyEditButtonClickFunctionality();
        createProject.verifyValidInputProjectNameField();
        createProject.verifyValidInputProjectDescriptionField();
        createProject.verifyValidSelectionCampaignTypeDropdown();
        createProject.verifyValidSelectionCountryDropdown();
       // createProject.verifyValidSelectionTimezoneDropdown();
        createProject.verifyNextStepButtonEnabled();
        goalsProject.VerifyAllElementsGoalsForm();
    });
});
