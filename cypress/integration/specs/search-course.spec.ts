import { HomePage } from "../../page-objects/demo-home.page";
import { CoursePage } from "../../page-objects/course.page";
import { CheckoutPage } from "../../page-objects/checkout.page";


describe('Demo Course - Search and Enroll for a Course', () => {
    const home = new HomePage();
    const course = new CoursePage();
    const testdata = 'search-course';


    it('Should navigate to the demo page', () => {
        //Act
        home.visit();

        //Assert
        cy.url().should('include', 'demo.html');
        cy.contains('Test your Selenium / QTP Scripts')
                .should('be.visible');
    });

    it('List action name', () => {
        const fileName = 'actions';

        //Act
        home.listActionNames(fileName);

        //Assert the length of the json
        cy.readFile(`cypress/fixtures/${fileName}.json`)
                    .then(data => {
                        const size = Object.keys(data).length;

                        expect(size).to.eq(6)
                    })
    });

    it('Navigate to the link', () => {
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
        cy.fixture('registration').then(data => {
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
        cy.url().should('include', 
                'lifetime-membership-club');
    });

    it('Scroll to a Heading section', () => {
        cy.fixture(testdata).then(data => {
            const text = data.headerText;

            //Assert
            home.coursesHeader
                .scrollIntoView()
                .should('be.visible')
                .should('have.text', text);
        })

    });

    it('Slide Carousel to view Course', () => {
        //Arrange: Scroll to carousel section
        home.carouselSection.scrollIntoView()
                            .click()
                            .should('be.visible');
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

        cy.fixture(testdata).then(data => {
            const topic = data.topicText;

            //Act
            cy.contains(topic)
                .scrollIntoView()
                .contains('Start')
                .should('be.visible')
                .click();

            //Assert
            course.heading.should('include.text', topic);
        })
    });

    it('Go Back to previous page', () => {
        // cy.go('back'); //Clicking back does not yield to previous page

        cy.fixture(testdata).then(data => {
            const url = data.courseURL;
            //Act
            cy.visit(url);
            //Assert    
            cy.url().should('eq', url);
        })

    });

    it('Payment', () => {
        //Act
        cy.contains('Pay in British Pounds').click();

        //Assert
        course.activeProductPrice.should('have.text', '£15');
    });

    it('Enroll in Course', () => {
        //Act
        course.enrollBtn
            .should('contain.text', 'Enroll in Course')
            .click()
            .should('have.text', 'Processing...')

        //Assert
        cy.url().should('contain', 'checkout');
        cy.contains('Order Summary').should('be.visible');
    });


    describe('Checkout - verify required error', () => {
        const checkout = new CheckoutPage();

        after(() => {
            cy.screenshot('checkout-page', {capture: 'fullPage'});
        });

        it('Email', () => {
            checkout.emailTxtbox.focus().blur()
                .parent()
                .siblings('div')
                .find('span')
                .should('have.text', 'Cannot be blank')
                .and('have.attr', 'role', 'alert');
        });

        it('Username', () => {
            checkout.userNameTxtbox.focus().blur()
                .parent()
                .siblings('div')
                .find('span')
                .should('have.text', 'Cannot be blank')
                .and('have.attr', 'role', 'alert'); 
        });

        it('Card Name', () => {
            checkout.cardNameTxtbox.focus().blur()
                .parent()
                .siblings('div')
                .find('span')
                .should('have.text', 'Cannot be blank')
                .and('have.attr', 'role', 'alert');
        });

        it('Card Number', () => {
            checkout.cardNumberTxtbox
                .should('be.visible')
                .type('123456789') //Focus is flakey so needed to do type action instead
                .should('be.focused')
                .clear();

            checkout.cardNameTxtbox.focus()   //To mimic blurring
                .should('be.focused');

            checkout.cardNumberAlert
                .should('have.text', 'Cannot be blank')
                .and('have.attr', 'role', 'alert');
        });

        it('Expiration Date', () => {
            checkout.expirationDateTxtbox
                    .should('be.visible')
                    .type('1234') //Focus is flakey so needed to type action instead
                    .should('be.focused')
                    .clear();

            checkout.cardNameTxtbox.focus()   //To mimic blurring
                    .should('be.focused');
                    
            checkout.expirationDateAlert
                    .should('have.text', 'Cannot be blank')
                    .and('have.attr', 'role', 'alert');
        });


        it('CVC Code', () => {
            checkout.cvcCodeTxtbox
                    .should('be.visible')
                    .type('123') //Focus is flakey so needed to do type action instead
                    .should('be.focused')
                    .clear();

            checkout.cardNameTxtbox.focus()   //To mimic blurring
                    .should('be.focused');
                    
            checkout.cvcCodeAlert
                    .should('have.text', 'Cannot be blank')
                    .and('have.attr', 'role', 'alert');
        });

        it('Street Address', () => {
            checkout.streetAddressTxtbox.focus().blur()
                .parent()
                .siblings('div')
                .find('span')
                .should('have.text', 'Cannot be blank')
                .and('have.attr', 'role', 'alert');
        });

        it('City', () => {
            checkout.cityTxtbox.focus().blur()
                .parent()
                .siblings('div')
                .find('span')
                .should('have.text', 'Cannot be blank')
                .and('have.attr', 'role', 'alert');
        });

        it('Postal Code', () => {
            checkout.postalCodeTxtbox.focus().blur()
                .parent()
                .siblings('div')
                .find('span')
                .should('have.text', "Cannot be blank")
                .and('have.attr', 'role', 'alert');
        });
    });

        
});