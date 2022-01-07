import { HomePage } from "../../page-objects/demo-home.page";
import { CoursePage } from "../../page-objects/course.page";


describe('Demo Course - Search for a Course', () => {
    const home = new HomePage();

    it.skip('Should navigate to the demo page', () => {
        //Act
        home.visit();

        //Assert
        cy.url().should('include', 'demo.html')
        cy.contains('Test your Selenium / QTP Scripts').should('be.visible');
    });


    it.skip('Navigate to the Submit Button Clicked link', () => {
        home.getActionName();

        //Arrange: Get the link
        //TODO: Create a function to fetch the link "Submit Button Clicked"
        const link = 'http://www.qa.way2automation.com/';

        //Act: Visit the link
        cy.visit(link);

        //Assert
        cy.url().should('include.text', 'way2auto_jquery');
        home.registrationForm.find('h3')
                            .contains('Dummy Registration Form')
                            .should('be.visible');
    });


    it.skip('Fill out the registration form', () => {
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
        home.alert.should('have.text', 
                    'This is just a dummy form, you just clicked SUBMIT BUTTON');
    });

    //TODO: Make the it block text a data file
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
    it.skip('Slide Carousel to view Automation Architect Selenium with 7 live projects', () => {
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

    it.skip('Search for the course CucumberParallelWithPageObjects - Project Code', () => {
        const course = new CoursePage();

        //Arrange
        course.expandButton.click();

        //Act
        cy.contains('CucumberParallelWithPageObjects - Project Code')
                .should('be.visible')    
                .scrollIntoView()
                .contains('Start')
                .click();

        //Assert
        course.heading.should('include.text', 'CucumberParallelWithPageObjects - Project Code')
    });


});