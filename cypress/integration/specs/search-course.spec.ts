import { resolve } from "cypress/types/bluebird";
import { HomePage } from "../../page-objects/demo-home.page";



describe('Demo Course - Search for a Course', () => {
    const home = new HomePage();

    it('Should navigate to the demo page', () => {
        //Act
        home.visit();

        //Assert
        cy.url().should('include', 'demo.html')
        cy.contains('Test your Selenium / QTP Scripts').should('be.visible');
    });

    it('List all action name', () => {

        //TODO: Move to a custom command or method within the page object
        let category:string[] = [];
        let actions:string[] = [];

        //Get all action name and store to json
        cy.get('.linkbox').each(($category) => {

            //Get category name
            const text = $category.find('.heading').text();
            cy.log("Category: " + text);
            category.push(text);

            //Get each action name and push to the related category
            cy.wrap($category).find('ul li h2').each(($action) => {
                const text = $action.text();
                cy.log("Action: " + text);

                actions.push(text);
            }).then(() => {
                category[text] = actions;
                actions = [];
            })

        }).then(() =>{
            console.log(category);
            cy.writeFile('cypress/fixtures/actionsName.json', category);
        }) 



    });


    it('Navigate to the Submit Button Clicked link', () => {
        //Act

        //Get the link
        //TODO: Create a function to fetch the link "Submit Button Clicked"
        const link = 'http://www.qa.way2automation.com/';

        //Visit the link
        cy.visit(link);

        //Assert
        cy.url().should('include', 'way2auto_jquery');
        home.registrationForm.contains('Dummy Registration Form').should('be.visible');
    });

    it('Fill out the registration form', () => {
        //TODO: Add custom command for filling up the form
        
    });

    it('Go to EXPLORE LIFETIME MEMBERSHIP', () => {
        
    });

    it('Scroll to 20+ Courses video library FREE ACCESS', () => {
        
    });

    it('Navigate to Automation Architect Selenium with 7 live projects', () => {
        
    });

    it('Click Get Started', () => {
        
    });

    it('Search for the course CucumberParallelWithPageObjects - Project Code', () => {
        
    });

    it('Should start', () => {
        
    });


});