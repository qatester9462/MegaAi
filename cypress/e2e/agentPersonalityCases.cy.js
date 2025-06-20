import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { CreateProject } from "../PageObject/CreateProject";
import { ProjectPage } from "../PageObject/ProjectPage";
import { AgentPersonality } from "../PageObject/AgentPersonalityPage";
const signIn = new SignInPage()
const clients = new ClientsPage()
const createproject = new CreateProject();
const project = new ProjectPage();
const agent = new AgentPersonality();
describe("Agent Personality Cases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    const clientName = 'MEGA-Bhargav'

    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
         signIn.validateSignIn()
    })

    it("Verify user is able to goto Agent Personality Page", () => {
        clients.clickonclients();
        project.gotoClient(clientName)
        createproject.gotoProjects()
        agent.createNewProject('Agent personality', 'I am testing agent personality. This is testing paragrapgh,inore it,thanks', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        agent.validateAgentPersonality()
    })
    it("Verify user is able to select any agent card and move to next", () => {
        clients.clickonclients();
        project.gotoClient(clientName)
        createproject.gotoProjects()
        agent.createNewProject('Agent personality', 'I am testing agent personality. This is testing paragrapgh,inore it,thanks', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        agent.validateAgentPersonality()
        agent.selectAgentCard()
        createproject.clickButton('Next')
    })
    it("Verify select Gender filter functionality", () => {
        clients.clickonclients();
        project.gotoClient(clientName)
        createproject.gotoProjects()
        agent.createNewProject('Agent personality', 'I am testing agent personality gender filter. This is testing paragrapgh,inore it,thanks', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        agent.validateAgentPersonality()
        agent.selectGenderFilter('female')
    })
    it("Verify select Language filter functionality", () => {
        clients.clickonclients();
        project.gotoClient(clientName)
        createproject.gotoProjects()
        agent.createNewProject('Agent personality', 'I am testing agent personality language filter. This is testing paragrapgh,inore it,thanks', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        agent.validateAgentPersonality()
        agent.selectLanguageFilter('English')
    })
    it("Verify select Accent filter functionality", () => {
        clients.clickonclients();
        project.gotoClient(clientName)
        createproject.gotoProjects()
        agent.createNewProject('Agent personality', 'I am testing agent personality accent filter. This is testing paragrapgh,inore it,thanks', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        agent.validateAgentPersonality()
        agent.selectAccentFilter('American')
    })

    it("Verify select Tone filter functionality", () => {
        clients.clickonclients();
        project.gotoClient(clientName)
        createproject.gotoProjects()
        agent.createNewProject('Agent personality', 'I am testing agent personality tone filter. This is testing paragrapgh,inore it,thanks', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        agent.validateAgentPersonality()
        agent.selectToneFilter('Professional')
    })
    it("Verify clear filter functionality", () => {
        clients.clickonclients();
        project.gotoClient(clientName)
        createproject.gotoProjects()
        agent.createNewProject('Agent personality', 'I am testing agent personality tone filter. This is testing paragrapgh,inore it,thanks', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        agent.validateAgentPersonality()
        agent.validateClearFilter()
    })
    it("Verify user is not able to move to next step without selecing nay agent", () => {
        clients.clickonclients();
        project.gotoClient(clientName)
        createproject.gotoProjects()
        agent.createNewProject('Agent personality', 'I am testing agent personality tone filter. This is testing paragrapgh,inore it,thanks', 'Debt Collection', '(+92) Pakistan', 'Asia/Karachi (UTC +05:00)')
        createproject.clickButton('Next')
        createproject.selectGoal()
        createproject.clickButton('Next Step')
        agent.validateAgentPersonality()
        agent.validateDisableNextButton()
    })
})