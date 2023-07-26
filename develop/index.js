// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const readMe = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of the project',
    },    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation you would like for your project',
    },    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub account username',
    },    {
        type: 'input',
        name: 'URL',
        message: 'Copy and Paste the url to your deployed application',
    },    {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
    },

];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const filledTemplate = readMe(data);

    const fileName = `example/README.md`;
    writeToFile(fileName, filledTemplate, (err) =>
      err ? console.error(err) : console.log("Success!")
    );
  });
}

// Function call to initialize app
init();
