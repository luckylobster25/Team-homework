const fs = require('fs');
const inquirer = require('inquirer');
const team = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let teamMember = [];

function mainPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose to add employee",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern"]
        }])
        .then((res) => {
            console.log(res);
            switch (res.addEmployee) {
                case "Manager":
                    managerPrompt();
                    break;
                case "Engineer":
                    engineerPrompt();
                    break;
                case "Intern":
                    internPrompt();
                    break;
            }
        })
}
mainPrompt()

function managerPrompt() {
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
            }]).then((ans) => {
                let manager = new Manager(ans.name, ans.id, ans.email, ans.officeNumber)
                teamMember.push(manager);
                console.log(teamMember);
            });
}

function engineerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Engineer's name: ",
                name: "name"
            },
            {
                type: "input",
                message: "Engineer's employee id: ",
                name: "id"
            },
            {
                type: "input",
                message: "Engineer's email: ",
                name: "email"
            },
            {
                type: "input",
                message: "Engineer's Github username: ",
                name: "github"
            }]).then((ans) => {
                let engineer = new Engineer(ans.name, ans.id, ans.email, ans.github)
                teamMember.push(engineer);
                console.log(teamMember);
            });
};

function internPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Intern's name: ",
                name: "name"
            },
            {
                type: "input",
                message: "Intern's employee id: ",
                name: "id"
            },
            {
                type: "input",
                message: "Intern's email: ",
                name: "email"
            },
            {
                type: "input",
                message: "Intern's school: ",
                name: "school"
            }
        ]).then((ans) => {
            let intern = new Intern(ans.name, ans.id, ans.email, ans.school)
            teamMember.push(intern);
            console.log(teamMember);
        });
};