/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable{

      getIframeBody(iFrameSelector: string): Chainable<Element>

    }
  }