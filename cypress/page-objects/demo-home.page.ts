

export class HomePage{
    visit(){
        //TODO: Move to a config file or json file.
        cy.visit('https://www.way2automation.com/demo.html#');
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

    get exploreLifetimeMembershipLink(){
        //TODO: Can we create a method passing the text? Seems to be a better solution
        return this.registrationForm.contains("EXPLORE LIFETIME MEMBERSHIP");
    }


    //Headers

    get coursesHeader(){
        return cy.get('.elementor-image-box-title');
    }


    //Carousel

    get carouselSection(){
        return cy.get('.swiper-container-wrap.pp-info-box-carousel-wrap');
    }

    //Determines the active box
    get activeSlide(){
        return this.carouselSection.find('.swiper-slide.swiper-slide-active');
    }

    //Gets the text of the active box
    get slideBoxTitleTxt(){
        return this.activeSlide.find('.pp-info-box-title');
    }

    get getStartedBtn(){
        return this.activeSlide.find('a');
    }

    get nextSlideBtn(){
        return cy.get(".fas.fa-angle-right");
    }


    /**
     * Method to slide the carousel until the desired course is in view
     * Clicks next slide button - arrow button (>) until the 
     * desired course is in view.
     * @param string courseText Course to be viewed
     */
    slideCourseIntoView(
        courseText: string
    ){
        this.slideBoxTitleTxt.then(($element) => {
            const text = $element.text().trim();
            if(text !== courseText){
                this.nextSlideBtn.click();
                this.slideCourseIntoView(courseText);
            }
        })
    }
    
}