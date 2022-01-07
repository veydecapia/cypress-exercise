

export class HomePage{
    visit(){
        cy.visit('https://www.way2automation.com/demo.html#');
    }

    //Registration Form
    get registrationForm(){
        return cy.get('#load_form h3').last();
    }

    get emailTxtbox(){
        return cy.get("input[name='email']");
    }

}