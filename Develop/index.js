// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
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
            message: 'Describe your project:'
        }, {
            type: 'input', 
            name: 'email',
            message: 'Enter your email address:'
        },{
            type: 'input',
            name: 'username',
            message: 'Enter your github username:'
        },{
            type: 'input',
            name: 'installation',
            message: 'Installation instructions for your project:'
        }, {
            type: 'input',
            name: 'usage',
            message: 'Submit Usage information for your project:'
        }, {
            type: 'rawlist',
            name: 'license',
            message: 'Which licensing would you prefer?',
            choices: ['apache-2.0', 'MIT', 'gpl-3.0']
        },{
            type: 'input',
            name: 'contribution',
            message: 'Provide some guidelines for contributing to the project:'
        }, {
            type: 'input',
            name: 'test',
            message: 'Provide some instructions for testing the project:'
        }  ];

// TODO: Create a function to write README file
const writeFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('../generatedReadme/README.md', data, err => {
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
