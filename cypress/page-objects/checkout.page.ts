import { getIframeBody } from "../support/utils"

export class CheckoutPage{

    get emailTxtbox(){
        return cy.get('#email');
    }

    get userNameTxtbox(){
        return cy.get('#username');
    }

    get cardNameTxtbox(){
        return cy.get('#cardName');
    }

    get cardNumberTxtbox(){
        return getIframeBody(
                "iframe[title='Secure card number input frame']"
                )
                .find("input[aria-label='Credit or debit card number']")
    }

    get cardNumberAlert(){
        return cy.get('#cardNumber')
                        .siblings('div')
                        .find('span');
    }

    get expirationDateTxtbox(){
        return getIframeBody(
                "iframe[title='Secure expiration date input frame']"
                )
                .find("input[aria-label='Credit or debit card expiration date']")
    }

    get expirationDateAlert(){
        return cy.get('#cardExpiration')
                        .siblings('div')
                        .find('span');
    }

    get cvcCodeTxtbox(){
        return getIframeBody(
                "iframe[title='Secure CVC input frame']"
                )
                .find("input[aria-label='Credit or debit card CVC/CVV']")
    }

    get cvcCodeAlert(){
        return cy.get('#cardCvc')
                        .siblings('div')
                        .find('span');
    }

    get streetAddressTxtbox(){
        return cy.get('#billingStreetAddressLine1');
    }

    get cityTxtbox(){
        return cy.get('#billingCity');
    }

    get postalCodeTxtbox(){
        return cy.get('#billingPostalCode');
    }

}