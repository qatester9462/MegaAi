import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { CreateProject } from "../PageObject/CreateProject";

const signIn = new SignInPage();
const clients = new ClientsPage();
const projectpage = new ProjectPage();
const createproject = new CreateProject();

describe("CreateProject page", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {
        cy.visit('/login');
        cy.viewport(1920, 1080);
        signIn.verifyLoginFuntionality(email,password);
    });

    it("Verify Clicking '+' Add button Redirects user to the Create new Project", () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
    });
    it("Verify All Elements on the 'Create New Project' Page" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyElementsCreateNewProjectPage()
    });
    it("Verify Valid Input in 'Project Name' Field" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidInputProjectNameField();
        
    })
    it("Verify Special Characters in 'Project Name' Field" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifySpecialCharactersProjectNameField();
        
    })
    it("Verify Error Message for Empty 'Project Name' Field" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyErrorMessageEmptyProjectNameField();
        
    })
    it("Verify Valid Input in 'Project Description' Field" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidInputProjectDescriptionField();
        
    })
    it("Verify Valid Selection in 'Campaign Type' Dropdown" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidSelectionCampaignTypeDropdown();
        
    })
    it("Verify Valid Selection in 'Country' Dropdown" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidSelectionCountryDropdown();
        
    })
    it("Verify Valid Selection in 'Timezone' Dropdown" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidSelectionCampaignTypeDropdown()
        createproject.verifyValidSelectionCountryDropdown();
        createproject.verifyValidSelectionTimezoneDropdown();
    })
    it("Verify 'Next Step' Button is Enabled After Filling All Fields" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidInputProjectNameField()
        createproject.verifyValidSelectionCampaignTypeDropdown()
        createproject.verifyValidSelectionCountryDropdown();
        createproject.verifyValidSelectionTimezoneDropdown();
        createproject.verifyNextStepButtonEnabled();
    })
    it("Verify 'Cancel' Button Functionality" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidInputProjectNameField()
        createproject.verifyValidSelectionCampaignTypeDropdown()
        createproject.verifyValidSelectionCountryDropdown();
        createproject.verifyValidSelectionTimezoneDropdown();
        createproject.verifyCancelButtonFunctionality();
    })
    it("Verify Browser Refresh Clears All Entered Data" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidInputProjectNameField()
        createproject.verifyValidSelectionCampaignTypeDropdown()
        createproject.verifyValidSelectionCountryDropdown();
        createproject.verifyValidSelectionTimezoneDropdown();
        createproject.verifyBrowserRefreshClearsData();
        
    })
    it("Verify 'Project Description' Field is Optional" , () => {
        clients.clickonclients();
        createproject.verifyEditButtonClickFunctionality();
        createproject.verifyValidInputProjectNameField()
        createproject.verifyValidSelectionCampaignTypeDropdown()
        createproject.verifyValidSelectionCountryDropdown();
        createproject.verifyValidSelectionTimezoneDropdown();
        createproject.verifyProjectDescriptionFieldOptional();
    })
    
});
