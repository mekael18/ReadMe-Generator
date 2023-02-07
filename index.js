// Packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');


// write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() { 
    inquirer.prompt([
                {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address.',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide how project should be used.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines for your project.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide test instructions for your project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license for your project.',
            choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib', 'None'],
        },
    ])
    .then((data) => {
        writeToFile(generateMarkdown(data));
    });
}

// function call to initialize program
init();