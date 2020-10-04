const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];

// Write code to use inquirer to gather information about the development team members,
employeeChoice();

function employeeChoice() {
    inquirer.prompt([{
        type: "list",
        name: "choice",
        choices: ['Intern', 'Engineer', 'Manager', 'Done'],
        message: "Please choose one of the following: ",
    }])
        .then(function (answers) {
            if (answers.choice === "Intern") {
                createIntern();
            }
            if (answers.choice === "Engineer") {
                engineerQuestions();
            }
            if (answers.choice === "Manager") {
                managerQuestions();
            }
            if (answers.choice === "Done") {
                createHTMLFile();
            }
        })
}
function createIntern() {
    // ask for the name, id, email, and school
     inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "Id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role-specific property (School, GitHub Link, Office Number)?",
            name: "Property"
        },
    ]).then (function (internAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(internAnswers);

        const intern = new Intern (internAnswers.Name, internAnswers.Id, internAnswers.Email, internAnswers.Property)
        console.log(intern);
        employees.push(intern);
        console.log(employees);
        
        // executing initial function for multiple employees, or to finish running the function and build the HTML file
        employeeChoice();
    })
};



function engineerQuestions() {
    // ask for the name, id, email, and github

    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "Id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role specific property (School, GitHub Link, Office Number)?",
            name: "Property"
        },
    ]).then (function (engineerAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(engineerAnswers);

        const engineer = new Engineer (engineerAnswers.Name, engineerAnswers.Id, engineerAnswers.Email, engineerAnswers.Property)
        console.log(engineer);
        employees.push(engineer);
        console.log(employees);

        // executing initial function for multiple employees, or to finish running the function and build the HTML file
        employeeChoice();
    })
};


function managerQuestions() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "Name"
        },
        {
            type: "input",
            message: "What is your ID?",
            name: "Id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "Email"
        },
        {
            type: "input",
            message: "What is your role specific property (School, GitHub Link, Office Number)?",
            name: "Property"
        },
    ]).then (function (managerAnswers){ 
        // function is pushing all the answers into an array which will be used by the htmlrender.js file
        console.log(managerAnswers);

        const manager = new Manager (managerAnswers.Name, managerAnswers.Id, managerAnswers.Email, managerAnswers.Property)
        console.log(manager);
        employees.push(manager);
        console.log(employees);

    
        employeeChoice();
    })
};


function createHTMLFile(){
    
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }
  
  fs.writeFileSync(outputPath, render(employees), "utf-8")
}

