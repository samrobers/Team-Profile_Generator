//*require all the js docs into this one**//
const Employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const body = require("./src/struct");
const card = require("./src/card");

//**First, Get Correct Questions Working with Inquirer**//

const managerQuestions = [
  {
    type: "input",
    message: "Manager, What is your name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "idNumber",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "Intern, What is your name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "idNumber",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your school?",
    name: "school",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "Engineer, What is your name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "idNumber",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
];

const menu = [
  {
    type: "list",
    message: "Please Choose what type of employee you want to add",
    choices: ["Intern", "Engineer", "Exit"],
    name: "employeeType",
  },
];
const employeeDB = [];

function getManagerInfo() {
  inquirer.prompt(managerQuestions).then((managerInput) => {
    const manager = new Manager(
      managerInput.managerName,
      managerInput.idNumber,
      managerInput.email,
      managerInput.officeNumber
    );
    employeeDB.push(manager);

    getEmployeeType();
  });
}

function getEmployeeType() {
  inquirer.prompt(menu).then((input) => {
    switch (input.employeeType) {
      case "Intern":
        getIntern();
        break;
      case "Engineer":
        getEngineer();
        break;
      default:
        generateHTML();
    }
  });
}
function generateHTML() {
  console.log(employeeDB);

  let teamCard = "";

  for (let i = 0; i < employeeDB.length; i++) {
    teamCard = teamCard + card(employeeDB[i]);
  }
  const team = body(teamCard);
  fs.writeFileSync("./dist/index.html", team);
}

function getIntern() {
  inquirer.prompt(internQuestions).then((input) => {
    const intern = new Intern(
      input.internName,
      input.idNumber,
      input.email,
      input.school
    );
    employeeDB.push(intern);
    getEmployeeType();
  });
}

function getEngineer() {
  inquirer.prompt(engineerQuestions).then((input) => {
    const engineer = new Engineer(
      input.engineerName,
      input.idNumber,
      input.email,
      input.github
    );
    employeeDB.push(engineer);
    getEmployeeType();
  });
}

//**somehow use the other files to generate the document **//
getManagerInfo();
