import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { SignInPage } from "../PageObject/SignInPage";

const signIn = new SignInPage();
const clients = new ClientsPage();
const project = new ProjectPage();


describe("Project", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email,password);
    })
    it("Verify,Navigation to the Clients Page via Side Navigation Men", () => {
        clients.clickonclients()
    });
    it("Verify,Project Page redirection", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
    })
    it("Verify, All elements present on the Projects page.", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
        project.verifyElementsPresentProjectsPage();
    })
    it("Verify, Pools filter functionality", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
        project.verifyPoolsFilterFunctionality();
    })
    it("Verify Clear Button Appears When Pools Filter is Applied", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
        project.verifyPoolsFilterFunctionality();
        project.verifyClearButtonAppearsWhenPoolsFilterApplied();
    })
    it("Verify Clear Button Appears When Pools Filter is Applied", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
        project.verifyCampaignsFilterFunctionality();
    })
    it("Verify Clear Button Appears When Campaign Filter is Applied", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
        project.verifyCampaignsFilterFunctionality();
        project.verifyClearButtonAppearsWhenCampaignFilterApplied();
    })
    it("Verify Search field functionality by Exact Project Name", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
        project.verifySearchFunctionalityExacProjectName();
    })
    it("Verify Clicking the Clear Button Removes Pools Filter", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
        project.verifyPoolsFilterFunctionality();
        project.verifyClickingClearButtonRemovesPoolsFilter()
    })
    it("Verify Clicking the Clear Button Removes Campaign Filter ", () => {
        clients.clickonclients()
        project.verifyProjectPageRedirection();
        project.verifyCampaignsFilterFunctionality();
        project.verifyClickingClearButtonRemovesCampaignFilter();
})
    it("Verify Clear Button Functionality When Both Filters are Applied", () => {
    clients.clickonclients()
    project.verifyProjectPageRedirection();
    project.verifyPoolsFilterFunctionality();
    project.verifyCampaignsFilterFunctionality();
    project.verifyClearButtonFunctionalityBothFiltersApplied();
})
it("Verify Search Functionality with Non-Existing Project Name", () => {
    clients.clickonclients()
    project.verifyProjectPageRedirection();
    project.verifySearchFunctionalityNonExistingProject()
})
it("Verify Search Functionality with Non-Existing Project Name", () => {
    clients.clickonclients();
    project.verifyProjectPageRedirection();
    project.verifySearchFunctionalityNonExistingProject();
    project.verifyClearSearchFunctionality();
})
it("Verify Clicking on a Project Name Redirects User to Project Details (Basic Info Step)", () => {
    clients.clickonclients();
    project.verifyProjectPageRedirection();
    project.verifyClickingProjectRedirectsProjectDetails();
  
})
it("Verify Settings Icon Redirects to Project Settings", () => {
    clients.clickonclients();
    project.verifyProjectPageRedirection();
    project.verifySettingsIconRedirectProjectSetting();
  
})
it("Verify Delete Icon Opens Confirmation Modal", () => {
    clients.clickonclients();
    project.verifyProjectPageRedirection();
    project.verifyDeleteIconOpenConfirmationModal();
  
})
it("Verify Keep Project Button Closes Modal ", () => {
    clients.clickonclients();
    project.verifyProjectPageRedirection();
    project.verifyDeleteIconOpenConfirmationModal();
    project.verifyKeepProjectButtonClosesModal();
  
})
it("Verify Delete Button Functionality  ", () => {
    clients.clickonclients();
    project.verifyProjectPageRedirection();
    project.verifyDeleteIconOpenConfirmationModal();
    project.verifyDeleteButtonFunctionality();
  
})
it("Verify Cross (X) Button Closes Delete Modal  ", () => {
    clients.clickonclients();
    project.verifyProjectPageRedirection();
    project.verifyDeleteIconOpenConfirmationModal();
    project.verifyCrossButtonClosesDeleteModal();
  
})
it("Verify Pagination Functionality ", () => {
    clients.clickonclients();
    project.verifyProjectPageRedirection();
    project.verifyPaginationFunctionality();
  
})
// it("Verify Pagination Functionality ", () => {
//     clients.clickonclients();
//     project.verifyProjectPageRedirection();
//     project.verifyRowsPerPageDropdownUpdatesDisplay();
  
// })
})