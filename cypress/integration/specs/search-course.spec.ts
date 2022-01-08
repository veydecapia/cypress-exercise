import { HomePage } from "../../page-objects/demo-home.page";
import { CoursePage } from "../../page-objects/course.page";


describe('Demo Course - Search for a Course', () => {
    const home = new HomePage();
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
        home.getActionName();

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
                            .click(); //Need to click to trigger the carousel slide animation
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
        const course = new CoursePage();

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


});