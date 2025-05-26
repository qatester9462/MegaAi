import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { CreateProject } from "../PageObject/CreateProject";

const project = new ProjectPage();
const signIn = new SignInPage();
const clients = new ClientsPage();
const projectpage = new ProjectPage();
const createproject = new CreateProject();

describe("createProject", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {
        cy.visit('/login');
        cy.viewport(1920, 1080);
        signIn.verifyLoginFuntionality(email,password);
    });

    it("Verify Clicking '+' Add button Redirects user to the Create new Project", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.clickOnplusButtonOnProjectPage()
    });
    it("Verify All Elements on the 'Create New Project' Page" , () => {
       const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.clickOnplusButtonOnProjectPage()
        createproject.verifyValidInputProjectNameField()

    });
   
    
    it("Verify 'Next Step' Button is Enabled After Filling All Fields" , () => {
          const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.clickOnplusButtonOnProjectPage()
        createproject.verifyValidInputProjectNameField()
        createproject.VerifyNextStepButtonEnabledAfteFillingAllFields()
    })
    it("Verify 'Cancel' Button Functionality" , () => {

          const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.clickOnplusButtonOnProjectPage()
        createproject.verifyValidInputProjectNameField()
        createproject.VerifyCancelButtonFunctionality()})
        
  
    
});
