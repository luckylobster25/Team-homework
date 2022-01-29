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