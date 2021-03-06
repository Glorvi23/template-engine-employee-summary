const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];

function managerQuestions(name, id, email) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the member's office Number?",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      const manager = new Manager(name, id, email, response.officeNumber);
      employees.push(manager);
      init();
    });
}

function engineerQuestions(name, id, email) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the member's github?",
        name: "gitHub",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(name, id, email, response.gitHub);
      employees.push(engineer);
      init();
    });
}

function internQuestions(name, id, email) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the member's school?",
        name: "school",
      },
    ])
    .then((response) => {
      const intern = new Intern(name, id, email, response.school);
      employees.push(intern);
      init();
    });
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function createTeam() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the member's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the member's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the member's email?",
        name: "email",
      },
      {
        type: "list",
        message: "What team member role would you like to add?",
        name: "team",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((response) => {
      const name = response.name;
      const id = response.id;
      const email = response.email;

      switch (response.team) {
        case "Manager":
          managerQuestions(name, id, email);
          break;
        case "Engineer":
          engineerQuestions(name, id, email);
          break;
        case "Intern":
          internQuestions(name, id, email);
          break;
        default:
      }
    });
}

function init() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What team member role would you like to add?",
        name: "continue",
        choices: ["Team", "Finished"],
      },
    ])
    .then((response) => {
      if (response.continue === "Team") {
        createTeam();
      } else {
        const result = render(employees);
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFile(outputPath, result, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    });
}

init();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
