// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        }, {
            type: 'input',
            name: 'projectDescription',
            message: 'What is the description of your project?'
        }, {
            type: 'input',
            name: 'InstallationInstructions',
            message: 'Installation instructions for your project:'
        }, {
            type: 'input',
            name: 'usageInfo',
            message: 'Submit Usage information for your project:'
        }, {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Provide some guidelines for contributing to the project:'
        }, {
            type: 'input',
            name: 'testInstructions',
            message: 'Provide some instructions for testing the project:'
        }  ];

// TODO: Create a function to write README file
const writeFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFileSync('../README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(projectData => {
        return generateMarkdown(projectData);
    }).then(markdown => 
        writeFile(markdown)); 
}

// Function call to initialize app
init();
