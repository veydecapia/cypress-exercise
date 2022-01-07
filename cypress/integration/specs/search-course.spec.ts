import { resolve } from "cypress/types/bluebird";
import { HomePage } from "../../page-objects/demo-home.page";



describe('Demo Course - Search for a Course', () => {
    const home = new HomePage();

    it.skip('Should navigate to the demo page', () => {
        //Act
        home.visit();

        //Assert
        cy.url().should('include', 'demo.html')
        cy.contains('Test your Selenium / QTP Scripts').should('be.visible');
    });

    it.skip('List all action name', () => {

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


    it.skip('Navigate to the Submit Button Clicked link', () => {
        //Arrange: Get the link
        //TODO: Create a function to fetch the link "Submit Button Clicked"
        const link = 'http://www.qa.way2automation.com/';

        //Act: Visit the link
        cy.visit(link);

        //Assert
        //TODO: Check other forms of text matchers
        cy.url().should('include', 'way2auto_jquery');
        home.registrationForm.find('h3')
                            .contains('Dummy Registration Form')
                            .should('be.visible');
    });


    it.skip('Fill out the registration form', () => {
        //TODO: Add custom command for filling up the form or a custom method within page object.
        //Arrange
        cy.fixture('registration').then(data =>{
            home.nameTxtbox.type(data.name);
            home.phoneTxtbox.type(data.phone);
            home.emailTxtbox.type(data.email);
            home.cityTxtbox.type(data.city);
            home.usernameTxtbox.type(data.username);
            home.passwordTxtbox.type(data.password);
        })
        
        //Act
        home.submitBtn.click();

        //Assert
        //TODO: Check other forms of text matchers
        home.alert.should('have.text', 
                    'This is just a dummy form, you just clicked SUBMIT BUTTON');
    });

    it.skip('Go to EXPLORE LIFETIME MEMBERSHIP', () => {
        //Act
        home.exploreLifetimeMembershipLink.click();

        //Assert
        cy.url().should('include', 'lifetime-membership-club');
    });

    //TODO: Make the it block text a data file
    it.skip('Scroll to 20+ Courses video library FREE ACCESS', () => {
        //Assert
        home.coursesHeader.should('be.visible')
                          .scrollIntoView({ easing: 'linear', duration: 1000 }) //TODO: Do we need duration?
                          .should('have.text', '20+ Courses video library FREE ACCESS');

        cy.pause();
    });

    //TODO: Make the it block text a data file
    it('Slide Carousel to view Automation Architect Selenium with 7 live projects', () => {

        cy.visit("https://www.way2automation.com/lifetime-membership-club/");

        //Arrange: Scroll to carousel section
        home.carouselSection.should('be.visible')
                            .scrollIntoView({ easing: 'linear', duration: 1000 }) //TODO: Do we need duration?
                            .click() //Need to click to trigger the carousel slide animation.


        const courseText = "Automation Architect Selenium with 7 live projects";
        home.slideCourseIntoView(courseText);


        //Act
        home.getStartedBtn.click();

        //Assert
        cy.url().should('eq', 'https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects');
    });

    it('Click Get Started', () => {
        
    });

    it('Search for the course CucumberParallelWithPageObjects - Project Code', () => {
        
    });

    it('Should start', () => {
        
    });


});