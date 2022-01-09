

export class CoursePage{


    get expandButton(){
        return cy.get('#more_lecture_sections');
    }


    get heading(){
        return cy.get('#lecture_heading');
    }

    get activeProductPrice(){
        return cy.get('.active .product-price span').first();
    }

    get enrollBtn(){
        return cy.get('#enroll-button');
    }

}