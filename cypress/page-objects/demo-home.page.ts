

export class HomePage{
    visit(){
        cy.visit('https://www.way2automation.com/demo.html#');
    }

    //Registration Form
    get registrationForm(){
        return cy.get('#load_box').last();
    }

    get nameTxtbox(){
        return cy.get("input[name='name']");
    }

    get phoneTxtbox(){
        return cy.get("input[name='phone']");
    }
    
    get emailTxtbox(){
        return cy.get("input[name='email']");
    }

    get cityTxtbox(){
        return cy.get("input[name='city']");
    }

    get usernameTxtbox(){
        return this.registrationForm.find("input[name='username']");
    }

    get passwordTxtbox(){
        return this.registrationForm.find("input[name='password']");
    }

    get alert(){
        return cy.get('#alert');
    }

    get submitBtn(){
        return this.registrationForm.find("input[value='Submit']");
    }


}