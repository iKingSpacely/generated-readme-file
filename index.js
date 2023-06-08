//below consts tie the inquirer npm to the index file and then fs will create the file source
const fs = require('fs');
const inquirer = require('inquirer');

//created the prompts for the user inputs
const questions = [
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'Please give a brief description of the project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please describe installation instructions.',
            name: 'instatlation',
        },
        {
            type: 'input',
            message: 'Please provide contribution guidelines if applicable.',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'Please provide usage examples if applicable',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Please provide tests written for you application with examples if applicable.',
            name: 'tests',
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
            name: 'github',
        },

        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',

        },

    ];

//the below code will generate the readme content from the user inputs

function generateREADME(answers) {return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation] (#installation)
- [Contributions] (#contributions)
- [Usage] (#usage)
- [Tests] (#tests)
- [License] (#license)
- [Questions] (#questions)

## Installation
${answers.installation}

## Contributions
${answers.contributionguidelines}

## Usage
${answers.usage}

## Tests
${answers.tests}

## License
${answers.license}

## Questions
For any questions, please reach out to on Github: ${answers.questions}
Or, you can contact me via email: ${answers.email}
`;
}

//function below will begin the prompt for user inputs to generate readme file

function promptUser () {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const content = generateREADME(answers);
        fs.writeFile('Readme.md', content, (err) =>
    {
        if(err) {
            console.error(err);
        } else {
            console.log('Readme.md file has been created!');
        }
    })
})
.catch((err) => {
    console.error(err);
});

}

promptUser();