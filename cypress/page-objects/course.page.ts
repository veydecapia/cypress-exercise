

export class CoursePage{


    get expandButton(){
        return cy.get('#more_lecture_sections');
    }


    get heading(){
        return cy.get('#lecture_heading');
    }

}