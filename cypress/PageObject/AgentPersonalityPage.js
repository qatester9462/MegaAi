export class AgentPersonality {

    createNewProject(projectName, projectDescription, campaignType, country, timezone) {
        cy.get('.p-button.p-component').should('exist').click()
        cy.url().should("include", "/projects/create");
        cy.get('.header-title').contains('Create Project (MEGA-Bhargav)').should('exist')
        cy.get('[class="form-labal"]').contains('Project Name').should('exist')
        cy.get('#projectName').should('exist').clear().type(projectName)
        cy.get('[class="form-labal"]').contains('Project Description').should('exist')
        cy.get('#description').should('exist').clear().type(projectDescription)
        cy.get('[class="form-labal"]').contains('Campaign Type').should('exist')
        cy.get('.p-dropdown-label').eq(0).should('exist').click()
        cy.get('[role*="listbox"]').contains(campaignType).should('exist').click()
        cy.get('[class="form-labal"]').contains('Country').should('exist')
        cy.get('.p-dropdown-label').eq(1).should('exist').click()
        cy.get('[role*="listbox"]').contains(country).should('exist').click()
        cy.get('[class="form-labal"]').contains('Timezone').should('exist')
        cy.get('.p-dropdown-label').eq(2).should('exist').click()
        cy.get('[role*="listbox"]').contains(timezone).should('exist').click()
    }
    validateAgentPersonality() {
        cy.url().should("include", "/projects/create/script")
        cy.wait(2000)
        cy.get('[class="p-steps-number"]').contains('2').should('exist')
        cy.get('.p-steps-title').contains('Agent Personality').should('exist')
    }
    selectAgentCard() {
        cy.wait(4000)
        cy.get('[class="stepCard ng-star-inserted"]').eq(2).should('exist').click()
        cy.get('.stepCard.ng-star-inserted').eq(2).should('have.class', 'active');
    }
    validateEditAgent() {
        cy.get('[class*="card-title"]').contains('Agent').should('exist')
        cy.get('[class="card-icon"]').eq(3).should('exist').click()
        cy.url().should("include", "/projects/create/script");
        cy.wait(3000)
        cy.get('[class="p-steps-number"]').contains('2').should('exist')
        cy.get('.p-steps-title').contains('Agent Personality').should('exist')
        cy.get('[class="stepCard ng-star-inserted"]').eq(3).should('exist').click()
        cy.get('.stepCard.ng-star-inserted').eq(4).should('have.class', 'active');
    }
    selectGenderFilter(gender) {
        let initialCount;
        cy.get('[class="stepCard ng-star-inserted"]').should('exist').then(($cards) => {
            initialCount = $cards.length;
        });
        cy.get('[aria-label="Genders: All"]').should('exist').click();
        cy.get('[role="searchbox"]').should('exist').clear().type(gender)
        cy.get('[role="listbox"]').should('be.visible').click()
        cy.get('[class*="badge-info"]').should('contain.text', gender)
        cy.wait(500)
        cy.get('[class="stepCard ng-star-inserted"]').then(($filteredCards) => {
            const filteredCount = $filteredCards.length;
            expect(filteredCount).to.be.lessThan(initialCount)
        });
    }
    selectLanguageFilter(language) {
        let initialCount;
        cy.get('[class="stepCard ng-star-inserted"]').should('exist').then(($cards) => {
            initialCount = $cards.length;
        });
        cy.get('[aria-label="Languages: All"]').should('exist').click();
        cy.get('[role="listbox"]').should('exist').contains(language).click()
        cy.wait(2000)
        cy.get('[class="stepCard-text"]').each(($card) => {
            cy.wrap($card)
                .invoke('text')

                .then((text) => {
                    expect(text).to.include(language);
                });
        });
        cy.get('[class="stepCard ng-star-inserted"]').then(($filteredCards) => {
            const filteredCount = $filteredCards.length;
            expect(filteredCount).to.be.lessThan(initialCount)
        });
    }
    selectAccentFilter(accent) {
        let initialCount;
        cy.get('[class="stepCard ng-star-inserted"]').should('exist').then(($cards) => {
            initialCount = $cards.length;
        });
        cy.get('[aria-label="Accents: All"]').should('exist').click();
        cy.get('[role="listbox"]').should('exist').contains(accent).click()
        cy.wait(2000)
        cy.get('[class="stepCard-text"]').each(($card) => {
            cy.wrap($card)
                .invoke('text')
                .then((text) => {
                    expect(text).to.include(accent);
                });
        });
        cy.get('[class="stepCard ng-star-inserted"]').then(($filteredCards) => {
            const filteredCount = $filteredCards.length;
            expect(filteredCount).to.be.lessThan(initialCount)
        });
    }

    selectToneFilter(tone) {
        let initialCount;
        cy.get('[class="stepCard ng-star-inserted"]').should('exist').then(($cards) => {
            initialCount = $cards.length;
        });
        cy.get('[aria-label="Tones: All"]').should('exist').click();
        cy.get('[role="listbox"]').should('exist').contains(tone).click()
        cy.wait(2000)
        cy.get('[class*="badge badge-success"]').each(($card) => {
            cy.wrap($card)
                .invoke('text')

                .then((text) => {
                    expect(text).to.include(tone);
                });
        });
        cy.get('[class="stepCard ng-star-inserted"]').then(($filteredCards) => {
            const filteredCount = $filteredCards.length;
            expect(filteredCount).to.be.lessThan(initialCount)
        });
    }
    validateClearFilter() {
        let initialFilterTexts = [];

        const filterSelectors = [
            '[aria-label="Genders: All"]',
            '[aria-label="Tones: All"]',
            '[aria-label="Accents: All"]',
            '[aria-label="Languages: All"]'
        ];
        cy.wrap(filterSelectors).each((selector) => {
            cy.wait(2000)
            cy.get(selector)
                .invoke('text')
                .then((text) => {
                    initialFilterTexts.push(text.trim());
                });
        }).then(() => {
            cy.get('[aria-label="Genders: All"]').click();
            cy.get('[role="listbox"]').contains('Female').click();
            cy.get('[class*="btn-link"]').click();
            cy.wait(500);
            const afterClearTexts = [];
            cy.wrap(filterSelectors).each((selector) => {
                cy.get(selector)
                    .invoke('text')
                    .then((text) => {
                        afterClearTexts.push(text.trim());
                        if (afterClearTexts.length === filterSelectors.length) {
                            expect(afterClearTexts).to.deep.equal(initialFilterTexts);
                        }
                    });
            });
        });

    }
    validateDisableNextButton() {
        cy.get('.stepCard.ng-star-inserted').should('not.have.class', 'active');
        cy.get('.p-ripple.p-element').should('be.disabled')
    }
}