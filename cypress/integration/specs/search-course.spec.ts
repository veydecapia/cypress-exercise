import { HomePage } from "../../page-objects/demo-home.page";
import { CoursePage } from "../../page-objects/course.page";


describe('Demo Course - Search for a Course', () => {
    const home = new HomePage();
    const course = new CoursePage();
    const testdata = 'search-course';


    before(() => {
        //TODO:Delete the actions.json file if exists
    });

    it('Should navigate to the demo page', () => {
        //Act
        home.visit();

        //Assert
        cy.url().should('include', 'demo.html');
        cy.contains('Test your Selenium / QTP Scripts').should('be.visible');
    });

    it('List action name', () => {
        //Act
        home.getActionNames();

        //TODO: Assert: Verify the length of the json
        //cy.
    });


    it('Navigate to the Submit Button Clicked link', () => {
        //Arrange: Retrieve and visit the link
        cy.contains('Submit Button Clicked')
                        .invoke('attr', 'href')
                        .then(href => {
                            cy.log(href);

                            //Act: Visit the link
                            cy.visit(href);
                        });

        //Assert
        cy.url().should('include', 'way2auto_jquery');
        home.registrationForm.find('h3')
                            .contains('Dummy Registration Form')
                            .should('be.visible');
    });


    it('Fill out the registration form', () => {
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
        cy.fixture(testdata).then(data => {
            home.alert.should('have.text', data.alertText);
        })
    });

    it('Navigate to Membership', () => {
        //Act
        cy.fixture(testdata).then(data => {
            const text = data.membershipText;
            home.getElement(text).click();
        })

        //Assert
        cy.url().should('include', 'lifetime-membership-club');
    });

    it('Scroll to a Heading section', () => {
        cy.fixture(testdata).then(data => {
            const text = data.headerText;

            //Assert
            home.coursesHeader.should('be.visible')
                            .scrollIntoView()
                            .should('have.text', text);
        })

    });

    it('Slide Carousel to view Course', () => {
        //Arrange: Scroll to carousel section
        home.carouselSection.should('be.visible')
                            .scrollIntoView()
                            .click(); 
                            /** 
                             * Need to click to trigger
                             * the carousel slide animation
                             **/
        
        
                            //Act
        cy.fixture(testdata).then(data => {
            const text = data.courseText;
            home.slideCourseIntoView(text);
        })
        home.getStartedBtn.click();

        //Assert
        cy.fixture(testdata).then(data => {
            const url = data.courseURL;
            cy.url().should('eq', url);
        })
        
    });

    it('Search for the topic', () => {
        

        //Arrange
        course.expandButton.click();

        cy.fixture(testdata).then(data =>{
            const topic = data.topicText;

            //Act
            cy.contains(topic)
                .should('be.visible')    
                .scrollIntoView()
                .contains('Start')
                .click();

            //Assert
            course.heading.should('include.text', topic);
        })
    });

    it('Go Back to previous page', () => {
        //Act
        cy.go('back');

        //Assert
        cy.fixture(testdata).then(data =>{
            const url = data.courseURL;
            cy.url().should('eq', url);
        })

    });

    it.only('Payment', () => {
        cy.visit("https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects");
        
        //Act
        cy.contains('Pay in British Pounds').click();
        
        //Assert
        course.activeProductPrice.should('have.text', '£15');

    });

    it.only('Enroll in Course', () => {
        //Act
        course.enrollBtn
                    .should('contain.text', 'Enroll in Course')
                    .click()
                    .should('have.text', 'Processing...')

        //Assert
        cy.url().should('contain', 'checkout');
        cy.contains('Order Summary').should('be.visible');
    });


    it('Checkout', () => {
        //For each of the input table do focus and blur then check for role=alert visiblity
        //Use tab to test & check if input except for type=checkbox
    });


});