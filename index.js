const fs = require('fs');
const inquirer = require('inquirer');
const team = require('./src/page-template');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamMember = [];

let managerPrompt =
    inquirer
        .prompt([
            {
                type: "input",
                message: "Team manager's name: ",
                name: "name"
            },
            {
                type: "input",
                message: "Team manager's employee id: ",
                name: "id"
            },
            {
                type: "input",
                message: "Team manager's email: ",
                name: "email"
            },
            {
                type: "input",
                message: "Team manager's office number: ",
                name: "officeNumber"
            }]);

managerPrompt
    .then((ans) => {
        let manager = new Manager(ans.name, ans.id, ans.email, ans.officeNumber)
        teamMember.push(manager);
    });

const engineerPrompt = [{
    type: "input",
    message: "Engineer's name: ",
    name: "engineerName"
},
{
    type: "input",
    message: "Engineer's employee id: ",
    name: "engineerId"
},
{
    type: "input",
    message: "Engineer's email: ",
    name: "engineerEmail"
},
{
    type: "input",
    message: "Engineer's Github username: ",
    name: "engineerGithub"
}];

const internPrompt = [
    {
        type: "input",
        message: "Intern's name: ",
        name: "internName"
    },
    {
        type: "input",
        message: "Intern's employee id: ",
        name: "internId"
    },
    {
        type: "input",
        message: "Intern's email: ",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Intern's school: ",
        name: "internSchool"
    }
];