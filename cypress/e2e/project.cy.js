import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { SignInPage } from "../PageObject/SignInPage";
import { CreateProject } from "../PageObject/CreateProject";
import { PoolsPage } from "../PageObject/PoolsPage";

const project = new ProjectPage();
const signIn = new SignInPage();
const clients = new ClientsPage();
const projectpage = new ProjectPage();
const createproject = new CreateProject();
const poolss = new PoolsPage();

describe("Project", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
        signIn.validateSignIn()
    })


    it(" TC_Project_001 - Verify,Project Page redirection", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
    })
    it("TC_Project_002, Verify, All elements present on the Projects page.", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        projectpage.verifyDropdowns()
        projectpage.verifySearchField()
        projectpage.verifyCreateProjectButton()
        projectpage.verifyProjectList()
        projectpage.verifySettingsAndDelete()
        projectpage.verifyPagination()
    })
    //pool doesn't exist
    // it('TC_Project_003 - Verify Pools filter functionality', () => {
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     createproject.gotoProjects()
    //     projectpage.openPoolsDropdown()
    //     projectpage.selectPoolByIndex(0)
    //     projectpage.verifyProjectsFiltered()

    // })
    it('TC_Project_005 - Verify Campaigns filter functionality', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        projectpage.openCampaignsDropdown()
        projectpage.selectCampaignByIndex(0)
        projectpage.verifyProjectsFiltered()
    })
    it('TC_Project_006 - Verify Clear Button Appears When Campaign Filter is Applied', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        //projectpage.openCampaignsDropdown()
        projectpage.selectFirstCampaign()
        projectpage.verifyClearButtonVisible()
    })

    it('TC_Project_007 - Verify Search field functionality by Project Name', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        projectpage.searchByProjectName('Test')
        projectpage.verifySearchedProjectVisible('Test')
    })

    it('TC_Project_008 - Verify Clicking the Clear Button Removes Pools Filter', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        projectpage.openPoolsDropdown()
        projectpage.selectPoolByIndex(0)
        projectpage.clearFilters()
        projectpage.verifyAllProjectsVisible()
    })

    it('TC_Project_012 - Verify Clearing the Search Field', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        projectpage.searchByProjectName('Testing Mega AI Script step')
        projectpage.clearSearchField()
        projectpage.verifyAllProjectsVisible()
    })

    it('TC_Project_017 - Verify Delete Button Functionality', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        projectpage.deleteProjects()
        projectpage.confirmDelete()
        projectpage.verifyProjectDeleted()
    })

    it('TC_Project_018 - Verify Cross (X) Button Closes Delete Modal', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        projectpage.deleteProjects()
        projectpage.closeDeleteModal()
        projectpage.verifyProjectStillVisible()
    })

    it('TC_Project_019 - Verify Pagination Functionality', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        poolss.VerifyPaginationControlsWork()
    })
    it('TC_Project_021, Verify that user is able to upload logo', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.uploadLogo('files/logo.jpg')
        createproject.validateToastMessage('Project Image Uploaded Successfully')
    })
    it('TC_Project_021, Verify that user is able to delete logo', () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        createproject.gotoProjects()
        createproject.deleteLogo()
        createproject.validateToastMessage('Project Image Deleted Successfully')
    })

})