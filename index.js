const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { validate } = require('@babel/types');

let team = [];

function mainPrompt() {
    inquirer.prompt([
        {
            type: "list",
            message: "Choose to add employee",
            name: "addEmployee",
            choices: ["Manager", "Engineer", "Intern", "Finish"]
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
                case "Finish":
                    writeTeamPage(team);
                    break;
            }
        })
}
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
                name: "id",
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
                team.push(manager);
                mainPrompt();
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
                team.push(engineer);
                console.log(team);
                mainPrompt();
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
            team.push(intern);
            console.log(team);
            mainPrompt();
        });
};
function writeTeamPage(team) { 
    const generatePage = template(team);
    fs.writeFile("./dist/index.html", generatePage,
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Success!");
    })
}
mainPrompt()