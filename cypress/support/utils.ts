
/**
 * @description
 * Gets the iFrame documents body and retry 
 * until the body element is not empty
 * Finally, wraps body DOM element to allow more chaining
 * @param {string} iFrameSelector 
 * @returns 
 */

export const getIframeBody = (
    iFrameSelector: string
) => {
    return cy
        .get(iFrameSelector)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)
}