const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

// let chue = new Manager("chue","12","dfs","sdf")
// console.log(chue.getOfficeNumber());
module.exports = Manager;