<div id="top"></div>


<!-- ABOUT THE PROJECT -->
## About The Project

Project contains Automated Test written in TypeScript/JavaScript using [Cypress](https://www.cypress.io/) as an open source automation testing framework.
My task is to automate testing of [way2automation site](https://www.way2automation.com/demo.html#), covering some of the use cases.


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Cypress](https://www.cypress.io/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get automated test in your local copy up and running follow these simple example steps.


### Prerequisites
To publish and install packages to and from the public npm registry or a private npm registry, you must install Node.js and the npm command line interface using either a Node version manager or a Node installer.

Note: to download the latest version of npm, on the command line, run the following command:
   ```sh
   npm install -g npm
   ```
*Please refer to the following*
* [Download Node.js](https://nodejs.org/en/download/)
* [Downloading and installing node js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/veydecapia/cypress-exercise.git
   ```
2. Install NPM packages. This downloads dependencies defined in a package.json file and generates a node_modules folder with the installed modules.
   ```sh
   npm install
   ```
   
   It would install first the required npm packages.
   
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. To run the created Automated test. Open cypress
   ```sh
   npx cypress open
   ```
     
     This will open the Cypress test runner. <br/>
     Click **search-course.spec.ts** to open and run the whole test suite.

     ![image](https://user-images.githubusercontent.com/6094567/148682190-2df965c6-47c8-4fa4-b5f1-a56a7ede076e.png)

     <br/>

2. After the test is complete. <br/> *Note: 20 test cases should passed.* <br/>

    **Latest Test Result**
    
    ![e2e_way2automation](https://user-images.githubusercontent.com/6094567/148682314-a2557f21-1202-4be5-80ad-3575c1ef81ed.png)

3. You can view the generated json file under fixtures folder. 
   ```sh
   cypress > fixtures > actions.json
   ```
   **Expected json file to be generated**  
   
   ![image](https://user-images.githubusercontent.com/6094567/148682358-88d29004-f636-4584-9702-ff0e4dab7335.png)

 
4. You can view the generated full page screenshot under screenshots folder.
   ```sh
   cypress > screenshots > specs > search-course.spec.ts
   ```
   **Expected Full Screenshot**
   
   ![checkout-page](https://user-images.githubusercontent.com/6094567/148682455-5a6a86a8-1d34-4bbb-8a2d-c10e54f29b1c.png)


## Test Cases

Automation exercise using Cypress which covers the below provided steps.

1. Navigate to the web page
2. List each of the action name for each categories in JSON format
i.e.
{
interaction: ['draggable',...],
widget: ['accordion', ...]
}
3. Get the associated link of the action "Submit Button Clicked" from the category "Dynamic Elements"
4. Visit the retrieved link
5. Fill up the dummy registration form by using an email from getnada.com >> Do I need to click the submit button?
6. Click on the link "EXPLORE LIFETIME MEMBERSHIP"
7. Scroll to "20+ Courses video library FREE ACCESS"
8. Navigate to "Automation Architect Selenium with 7 live projects" from the carousel by clicking on the left arrow button
9. Click on the "Get Started" button
10. Assert the url page to be equals to "https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects"
11. Search for the course "CucumberParallelWithPageObjects - Project Code"
12. Click "Start" button
13. Wait for the page to load and navigate back to url "https://www.selenium-tutorial.com/p/automation-architect-in-selenium-7-live-projects"
13. Select "Pay in British Pounds"
14. Assert the value is equals to "£15"
15. Click on "Enroll in Course"
16. Assert that the button is changed from "Enroll in Course" to "Processing..."
17. Assert the page loaded contains "Order Summary"
18. Click on each of the input boxes
19. Verify when navigating away on each boxes, an error field will be displayed
20. Screenshot the entire page.

## Other Projects

Please also view and check my Automated browser end to end UI test built using Protractor.

TodoMVC https://github.com/veydecapia/todomvc-exercise

<!-- CONTACT -->
## Contact

Your Name - harveydecapia@gmail.com

Project Link: [https://github.com/veydecapia/cypress-exercise.git](https://github.com/veydecapia/cypress-exercise.git)

<p align="right">(<a href="#top">back to top</a>)</p>
