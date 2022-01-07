import { GoogleSearch } from "../../page-objects/google-search.page";


describe('Google Navigation', () => {
    it('Should Google Search', () => {
        const search = new GoogleSearch();

        cy.visit('https://www.google.com');

        search.googleSearch().type('Something');
        search.googleSearchBtn().click({force: true});
        search.searchResults().should('be.visible');
    });
});