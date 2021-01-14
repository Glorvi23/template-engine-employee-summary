const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
inquirer
    .prompt([
        {
            type: "list",
            message: "What team member role would you like to add?",
            name: "team",
            choices: ["Employee", "Manager", "Intern", "Engineer"]
        },
        {
            type: "input",
            message: "What is the member's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the member's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the member's name?",
            name: "name",
        }
    ])
    .then((response) => {
        // let firstCharacter;
        // let secondCharacter;

        // switch (response.characterOne) {
        //     case "Luke Skywalker":
        //         firstCharacter = lukeSkywalker;
        //         break;
        //     case "Boba Fett":
        //         firstCharacter = bobaFett;
        //         break;
        //     case "Han Solo":
        //         firstCharacter = hanSolo;
        //         break;
        //     case "Random":
        //         firstCharacter = arrayOfCharacters[randomCharacterIndex];
        //         break;
        //     default:
        //         // code block
        // }

        // switch (response.characterTwo) {
        //     case "Luke Skywalker":
        //         secondCharacter = lukeSkywalker;
        //         break;
        //     case "Boba Fett":
        //         secondCharacter = bobaFett;
        //         break;
        //     case "Han Solo":
        //         secondCharacter = hanSolo;
        //         break;
        //     case "Random":
        //         secondCharacter = arrayOfCharacters[randomCharacterIndex];
        //         break;
        //     default:
        //         // code block
        // }

        // playGame(firstCharacter, secondCharacter);
    });

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