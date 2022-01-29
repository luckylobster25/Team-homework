class Employee {
    constructor(name,employeeId,email,officeNumber){
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.officeNumber = officeNumber;
    }
    getName(){
        return this.name;
    }
    getEmployeeId(){
        return this.employeeId;
    }
    getEmail(){
        return this.email;
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
const testEmployee = new Employee("Test",123,"test@test.com","123-444-5555");
console.log(testEmployee);
module.export = Employee;