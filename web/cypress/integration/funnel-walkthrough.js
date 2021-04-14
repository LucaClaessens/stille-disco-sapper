describe('Checkout funnel is traversable', () => {


    before(() => {
        cy.visit('/en/checkout')
    });

    it('can traverse the datepicker and move to the next step', () => {
        cy.get('input#date_from').click();
        cy.wait(100);
        cy.get('.next-button').click();
        cy.wait(200);
        cy.contains('12').click();
        cy.wait(200);
        cy.contains('22').click();
        cy.wait(200);
        cy.get('.finish-button').click();
        cy.get("button[data-automation-id='next']").should('be.enabled');
        cy.get("button[data-automation-id='next']").click();
    });

    it('can traverse all rental steps', () => {

        const getMiscVisibility = () => {

            const activeSteps = Cypress.$("[data-checkout-step-active=true]");

            console.log({ at: activeSteps });

            if (activeSteps.length > 0) {
                cy
                    .get('[data-checkout-step-active=true]')
                    .within($step => {
                        cy.wait(2000);
                        cy.get('input#amount').type('{selectall}3').trigger('input').trigger('change');
                    })
                    .then(() => {
                        cy.get("button[data-automation-id='next']").should('be.enabled');
                        cy.get("button[data-automation-id='next']").click();
                        cy.wait(1000);
                        getMiscVisibility();
                    })
            }
            return;

        };

        getMiscVisibility();
    })


});