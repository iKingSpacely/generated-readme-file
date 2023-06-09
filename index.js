//below consts tie the inquirer npm to the index file and then fs will create the file source
const fs = require('fs');
const inquirer = require('inquirer');

const generateREADME = (answers) => 
`
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#Installation)
- [Contributions](#Contributions)
- [Usage](#Usage)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation
${answers.installation}

## Contributions
${answers.contributions}

## Usage
${answers.usage}

## Tests
${answers.tests}

## License
${answers.licenses}
[![License](https://img.shields.io/badge/License-${answers.licenses}-red.svg)](https://opensource.org/licenses/${answers.licenses})

## Questions
For any questions, please reach out to on Github: ${answers.github}
Or, you can contact me via email: ${answers.email}
`;


//created the prompts for the user inputs
inquirer.prompt ([
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
            name: 'installation',
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
            name: 'licenses',
            choices: ['MIT', 'Apache 2.0', 'Mozilla Public', 'Mozilla Public 2.0'],
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
    ])


.then((file) => {
    const content = generateREADME(file)
    fs.writeFile("README.md", content, (error) => 
    error ? console.log("This is the error", error) : console.log("Readme file created succesfully!"))
});