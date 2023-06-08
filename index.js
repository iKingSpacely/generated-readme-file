//below consts tie the inquirer npm to the index file and then fs will create the file source
const inquirer = require('inquirer');
const fs = require('fs');

//created the prompts for the user inputs
const readMeQuestions = [
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'Title',
        },

        {
            type: 'input',
            message: 'Please give a brief description of the project.',
            name: 'Description',
        },
        {
            type: 'input',
            message: 'Please describe installation instructions.',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines if applicable.',
            name: 'Contribution Guidelines',
        },
        {
            type: 'input',
            message: 'Please provide usage examples if applicable',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'Please provide tests written for you application with examples if applicable.',
            name: 'Tests',
        },

        {
            type: 'list',
            message: 'What license did you use on your repo?',
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License', 'Mozilla Public License 2.0'],
        },

        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'Github Username',
        },

        {
            type: 'input',
            message: 'What is your email address?',
            name: 'Email Address',

        },

    ];

//the below code will generate the readme content from the user inputs

function createReadMe(userinput) {
    return `
# ${userinput.title}

## Description
${userinput.description}

## Table of Contents
${userinput.installation}
${userinput.contributionguidelines}
${userinput.usage}
${userinput.tests}
${userinput.license}
${userinput.questions}

## Installation
${userinput.installation}

## Contribution Guidelines
${userinput.contributionguidelines}

## Usage
${userinput.usage}

## Tests
${userinput.tests}

## License
${userinput.license}

## Questions
For any questions, please reach out to on Github: ${userinput.questions}
Or, you can contact me via email: ${userinput.email}
`;
}




        .then ((response) =>
            fs.writeFile('Readme.md', JSON.stringify(response),
            (error) => {
                error ? console.log(error) : console.log("Nice, Good Job!");
            }
        ));

function userPrompts() {
    inquirer
        .prompt(questions)

        .then((answers) => {
            const readMeInfo = generateReadMe(answers)
        }
        )
}