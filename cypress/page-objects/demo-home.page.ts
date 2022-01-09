

export class HomePage{
    visit(){
        cy.visit('/demo.html#');
    }

    //Registration Form

    get registrationForm(){
        return cy.get('#load_box');
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



    //Links

    getElement(
        text: string
    ){
        return this.registrationForm.contains(text);
    }

    //Headers

    get coursesHeader(){
        return cy.get('.elementor-image-box-title');
    }


    //Carousel

    get carouselSection(){
        return cy.get(
            '.swiper-container-wrap.pp-info-box-carousel-wrap');
    }

    //Determines the active slide box
    get activeSlide(){
        return this.carouselSection
                //Takes time to initiate animation so needed to extend timeout
                .find('.swiper-slide.swiper-slide-active',
                             {timeout: 30000});
    }

    //Gets the text of the active box
    get slideBoxTitleTxt(){
        return this.activeSlide
                .find('.pp-info-box-title');
    }

    get getStartedBtn(){
        return this.activeSlide.find('a');
    }

    get nextSlideBtn(){
        return cy.get(".fas.fa-angle-right");
    }


    /**
     * @description 
     * Slides the carousel until the desired course is in view
     * Clicks next slide button - arrow button (>) until the 
     * desired course is in view.
     * 
     * @param {string} courseText Exact course text to be viewed
     */
    slideCourseIntoView = (
        courseText: string
    ) => {
        this.slideBoxTitleTxt.then(($element) => {
            const text = $element.text().trim();
            if(text !== courseText){
                this.nextSlideBtn
                        .click()
                        .should('be.visible');

                this.slideCourseIntoView(courseText);
            }
        })
    }


    /**
     * @description
     * List all the categories and actions names
     * and store it to a json file under fixtures folder. 
     * @param {string} fileName filename of the json file
     */
    listActionNames = (
        fileName: string
    ) => {
        let category = {};
        let actions = [];

        //Get all action name and store to json
        cy.get('.linkbox').each(($category) => {
            //Get category name
            const text = $category
                            .find('.heading')
                            .text();
            cy.log("Category: " + text);

            //Get each action name and push 
            //to the related category
            cy.wrap($category)
                        .find('ul li h2')
                        .each(($action) => {
                
                const text = $action.text();
                cy.log("Action: " + text);

                actions.push(text);
            }).then(() => {
                category[text] = actions;
                actions = [];
            })

        }).then(() =>{
            console.log(category);

            cy.writeFile(
                    `cypress/fixtures/${fileName}.json`
                    , category);
        }) 
    }

}