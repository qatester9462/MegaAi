import { ClientsPage } from "../PageObject/ClientsPage";
import { SignInPage } from "../PageObject/SignInPage";

const clients = new ClientsPage()
const signIn = new SignInPage

describe("clients", () => {
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
    it("Verify All Elements on the Clients Page", () => {
        clients.clickonclients();
        clients.verifyClientsPage();
        clients.validateClientspage();
    });
    it("Verify Table Headers on the Clients page", () => {
        clients.clickonclients();
        clients.verifyClientsPage();
        clients.verifyTableHeaders();
    });
    it("Verify, Create Client Form Button Functionality", () => {
        clients.clickonclients();
        clients.VerifyCreateClientFormButtonFunctionality();
    });
    it("Verify, All Elements on Create Client form", () => {
        clients.clickonclients();
        clients.VerifyCreateClientFormButtonFunctionality();
        clients.verifyElementsCreateClientForm();
    });
    // it("Verify, the create client Functionality ", () => {
    //     const clientName = 'CSD'
    //     const clientType = 'Individual'
    //     const country = 'Pakistan'
    //     clients.clickonclients();
    //     clients.VerifyCreateClientFormButtonFunctionality();
    //     clients.verifyClientCreation(clientName, clientType, country)
    // });
    // it("Verify successful creation and redirection to Clients page ", () => {
    //     const clientName = 'Team3210'
    //     const clientType = 'Individual'
    //     const country = 'Pakistan'
    //     clients.clickonclients();
    //     clients.VerifyCreateClientFormButtonFunctionality();
    //     clients.verifyElementsCreateClientForm();
    //     clients.verifyClientCreation(clientName, clientType, country)
    //     clients.verifyRedirectionAfetrClientCreation();
    // });

    it("Verify, Attempt to create a client without filling in any fields. ", () => {
        const clientName = 'abc'
        const clientType = 'Individual'
        const country = 'Pakistan'
        clients.clickonclients();
        clients.VerifyCreateClientFormButtonFunctionality();
        clients.verifyCreateClientWithoutFillingFields();
    });


 it("Verify, Elements edit , setting, delete button under action label ", () => {
        clients.clickonclients();
        clients.verifyElementsUnderActionLabel()
    });

    it("Verify Edit button click functionality for a client", () => {
        clients.clickonclients();
        clients.verifyEditButtonClickFunctionality();
    });
});


