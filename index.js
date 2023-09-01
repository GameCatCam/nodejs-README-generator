// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Can you provide a description of your project?',
    'How is your application installed?',
    'How do you intend this application to be used?',
    'How would you prefer contributors help with this project?',
    'Which license are you using?',
    'What is your GitHub username?',
    'What is your email address?',
    'How do you intend for users to test your project?'
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const file = `${answers.name}.md`
    
    fs.writeFile(file, generateMarkdown(answers), (err) =>
    err ? console.log(err) : console.log('Successfully generated README'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'name',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[4]
            },
            {
                type: 'list',
                name: 'license',
                message: questions[5],
                choices: ['MIT', 'GPLv3', 'Creative Commons Licenses', '']
            },
            {
                type: 'input',
                name: 'github',
                message: questions[6]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[7]
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[8]
            }
        ])
    .then((answers) => {
        writeToFile(answers)
    })
}

// Function call to initialize app
init();
