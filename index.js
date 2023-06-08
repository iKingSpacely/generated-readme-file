const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'Title',
            validate: (value) => {if(value){return true} else {return 'You forgot to enter something!'}},
        },

        {
            type: 'input',
            message: 'Please give a brief description of the project.',
            name: 'Description',
            validate: (value) => {if(value){return true} else {return 'You forgot to enter something!'}},
        },
        {
            type: 'input',
            message: 'Please describe installation instructions.',
            name: 'Installation',
            validate: (value) => {if(value){return true} else {return 'You forgot to enter something!'}},
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines if applicable.',
            name: 'Contribution Guidelines',
            validate: (value) => {if(value){return true} else {return 'You forgot to enter something!'}},
        },
        {
            type: 'input',
            message: 'Please provide usage examples if applicable',
            name: 'Usage',
            validate: (value) => {if(value){return true} else {return 'You forgot to enter something!'}},
        },
        {
            type: 'input',
            message: 'Please provide tests written for you application with examples if applicable.',
            name: 'Tests',
            validate: (value) => {if(value){return true} else {return 'You forgot to enter something!'}},
        },

        {
            type: 'list',
            message: 'What license did you use on your repo?',
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License', 'Mozilla Public License 2.0'],
            validate: (value) => {if(value){return true} else {return 'You forgot to choose a license!'}},
        },

        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'Github Username',
            validate: (value) => {if(value){return true} else {return 'You forgot to enter something!'}},
        },

        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Email Address',
            validate: (value) => {if(value){return true} else {return 'You forgot to enter something!'}},
        },

    ])
        .then ((response) =>
            fs.writeFile('Readme.md', JSON.stringify(response),
            (error) => {
                error ? console.log(error) : console.log("Nice, Good Job!");
            }
        ));