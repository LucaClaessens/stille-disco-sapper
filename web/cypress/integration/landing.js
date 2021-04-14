describe('Landing page', () => {
	beforeEach(() => {
		cy.visit('/en')
	});

	it('has events and rental slots', () => {
		cy.get('a[slot=events]').should('exist');
		cy.get('a[slot=rental]').should('exist');
	});

	it('shows a logo image', () => {
		cy.get('#site-logo')
			.find('img')
			.should('be.visible')
			.and(($img) => {
				expect($img[0].naturalWidth).to.be.greaterThan(0)
			})
	})

});