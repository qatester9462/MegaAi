import { SignInPage } from "../PageObject/SignInPage";
import { ClientsPage } from "../PageObject/ClientsPage";
import { ProjectPage } from "../PageObject/ProjectPage";
import { Campaign } from "../PageObject/CampaignPage";
import { EditCampaigns } from "../PageObject/EditCampaign";
import { PoolsPage } from "../PageObject/PoolsPage";
const signIn = new SignInPage
const clients = new ClientsPage()
const project = new ProjectPage();
const campaign = new Campaign
const editcampaignn = new EditCampaigns()
const poolss = new PoolsPage()
describe("editCampaignCases", () => {
    const email = Cypress.config('users').user1.username
    const password = Cypress.config('users').user1.password
    beforeEach(() => {

        cy.visit('/login')
        cy.viewport(1920, 1080)
        signIn.verifyLoginFuntionality(email, password);
        signIn.validateSignIn()
    })

    it("TC_Edit_Basic-Info_001 , Verify redirection to Edit Campaign page (Basic Info) ", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign()
    })
    it("TC_Edit_Basic-Info_002 , Verify only Name field is editable ", () => {


        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign()
        editcampaignn.verifyOnlyNameFieldIsEditable()
    })
    it("TC_Edit_Basic-Info_003 , Verify Name field accepts valid data ", () => {
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign()
        //editcampaignn.verifyOnlyNameFieldIsEditable()
        editcampaignn.verifyNameFieldAcceptsValidData()

    })
    it("TC_Edit_Basic-Info_004 , Verify Name field mandatory validation ", () => {

        const camp = 'Updated Campaign Name'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyNameFieldMandotoryValidation()

    })
    it("TC_Edit- Campaign (Goals)_001 , Verify redirection to Goals page ", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToGoalsPage()


    })
    it("TC_Edit- Campaign (Goals)_002 , Verify UI elements on Goals page", () => {
        const camp = 'dsfd'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToGoalsPage()
        editcampaignn.verifyUiElementsOnGoalsPage()
    })
    it("TC_Edit- Campaign (Goals)_005 , Verify ability to change goal selection", () => {

        const camp = 'dsfd'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToGoalsPage()
        editcampaignn.verifyGoalChangeInEditCampaign()


    })
    it("TC_Edit-Campaign(Pools)_001 , Verify redirection to Pools page", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()


    })
    it("TC_Edit-Campaign(Pools)_002 , Verify UI elements on Pools page", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyUiElementsOnPoolsPage()


    })

    it("TC_Edit-Campaign(Pools)_004 , Verify ability to select/deselect pools", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        poolss.goTOPools()
        cy.wait(3000)
        poolss.VerifyRedirectionToUploadNewPoolPage()
        poolss.testContinueButtonEnabledWhenAllFieldsFilled()
        poolss.getFile()
        poolss.verifyRedirectionOnSuccessfulUpload()
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyAbilityToSelectDeselectPool()

    })
    it("TC_Edit-Campaign(Pools)_005 , Verify pool data visibility", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyPoolDataVisibility()

    })
    it("TC_Edit-Campaign(Pools)_007 , Verify Actions dropdown options", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.VerifyActiondropdownPOptions()

    })
    it("TC_Edit-Campaign(Pools)_008 , Verify Resume action functionality", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyResumeCampaign()

    })

    it("TC_Edit-Campaign(Pools)_009 , Verify Duplicate action functionality", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyDuplicateCampaign()

    })
    it("TC_Edit-Campaign(Pools)_010 , Verify Delete action functionality", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyRedirectionToPoolsPage()
        editcampaignn.verifyDeleteCampaign()
    })
    // it('TC_Edit-Campaign(Script)_001 - Verify redirection to Script page', () => {
    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.VerifyRedirectionToScriptPage()
    // });
    // it('TC_Edit-Campaign(Script)_002 - Verify UI elements on Script page', () => {

    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.VerifyUiElementsOnScriptPage()
    // })
    // it('TC_Edit-Campaign(Script)_003 - Verify First Message field editable', () => {
    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.verifyRedirectionToScriptsPage()
    //     editcampaignn.VerifyFirstMessageFieldEditable()

    // })
    // it('TC_Edit-Campaign(Script)_004 -Edit Last Message field and save', () => {
    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.gotoScript()
    //     editcampaignn.VerifyFirstMessageFieldEditable()
    //     editcampaignn.EditLastMessagefieldAndSave()
    // });
    // it('TC_Edit-Campaign(Script)_005, Verify Gender dropdown options', () => {
    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.gotoScript()
    //     editcampaignn.VerifyGenderdropdownOptions()
    // });
    // it('TC_Edit-Campaign(Script)_006, Select Gender and Save', () => {
    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.gotoScript()
    //     editcampaignn.selectGenderAndSave()
    // });
    // it('TC_Edit-Campaign(Script)_007 – Voice options based on Gender', () => {
    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.gotoScript()
    //     editcampaignn.selectGenderAndCheckVoiceOptions()
    // });
    // it('TC_Edit-Campaign(Script)_009 – Verify Domain Library dropdown options', () => {
    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.gotoScript()
    //     editcampaignn.verifyDomainLibraryDropdownOptions()
    // });
    // it('TC_Edit-Campaign(Script)_011 – Verify System Prompts field editable', () => {
    //     const camp = 'testing'
    //     const clientName = 'MEGA-Bhargav'
    //     clients.clickonclients()
    //     project.gotoClient(clientName)
    //     campaign.gotoCampaign()
    //     editcampaignn.clickOnFirstCampaign(camp)
    //     editcampaignn.gotoScript()
    //     editcampaignn.EditSystemPromptsandSave()
    // });
    it('TC_Edit-Campaign (Settings)_001 – Verify redirection to Settings page', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifySettingsTabNavigation()

    });
    it('TC_Edit-Campaign (Settings)_002 – Verify pre-filled data in Settings page', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifySettingsTabNavigation()
        editcampaignn.VerifypreFilleddatainSettingsPage()

    });
    it('TC_Edit-Campaign (Settings)_004 – Verify Campaign Priority slider value', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifySettingsTabNavigation()
        editcampaignn.updateCampaignPrioritySlider()


    })
    it('TC_Edit-Campaign (Settings)_006 – Verify SMS Template dropdown options', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifySettingsTabNavigation()
        editcampaignn.verifySMSTemplateOptions()
    })
    it('TC_Edit-Campaign (Settings)_007 – Verify selection of SMS Template', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifySettingsTabNavigation()
        editcampaignn.selectSMSTemplateAndSave()

    })
    it('TC_Edit-Campaign (Settings)_009 – Select Transfer Calls to option', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifySettingsTabNavigation()
        editcampaignn.selectTransferCallOptionAndSave()
    })
    it('TC_Edit-Campaign (Settings)_011 – Verify Actions dropdown options', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifySettingsTabNavigation()
        editcampaignn.verifyActionsDropdownOptions()
    })
    it('TC_Edit-Campaign (Dialing)_001, Verify redirection to Dialing page', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
    })
    it('TC_Edit-Campaign (Dialing)_002, Verify pre-filled data', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.verifyPreFilledDialingData()
    })
    it('TC_Edit-Campaign (Dialing)_004, Verify enabling/disabling days status toggle', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.toggleStatusForADayAndSave()
    })
    it('TC_Edit-Campaign (Dialing)_005, VVerify start and stop time selection', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.changeStartStopTimeAndSave()


    })
    it('TC_Edit-Campaign (Dialing)_008, Verify Max. Days Ahead input', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.verifyMaxDaysAheadInput()
    })
    it('TC_Edit-Campaign (Dialing)_010, Verify mandatory fields validation', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.verifyMandatoryFieldsValidation()
    })
    it('TC_Edit-Campaign (Dialing)_014  , Verify Actions dropdown options on Dialing page', () => {
        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.verifyActionsDropdownOptions()
    })
    it("TC_Edit-Campaign(Dialing)_015 , Verify Resume action functionality from Dialing page", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.verifyResumeCampaign()

    })

    it("TC_Edit-Campaign(Dialing)_016 , Verify Duplicate action functionality from Dialing page", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.verifyDuplicateCampaign()

    })
    it("TC_Edit-Campaign(Dialing)_017 , Verify Delete campaign functionality from Dialing page", () => {

        const camp = 'testing'
        const clientName = 'MEGA-Bhargav'
        clients.clickonclients()
        project.gotoClient(clientName)
        campaign.gotoCampaign()
        editcampaignn.clickOnFirstCampaign(camp)
        editcampaignn.verifyDialingTabRedirection()
        editcampaignn.verifyDeleteCampaign()

    })

})