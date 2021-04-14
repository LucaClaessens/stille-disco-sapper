describe('Checkout funnel is reachable', () => {

    it('can reach funnel from landing page', () => {
        cy.visit('/en');
        cy.get('a[slot=rental]').click();
        cy.get("a[href='en/checkout']").click();
        cy.get('#variationControl').should('exist');
    })
});