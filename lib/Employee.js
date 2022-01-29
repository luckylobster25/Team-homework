class Employee {
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Employee';
    }
}
const testEmployee = new Employee("Test",123,"test@test.com","123-444-5555");
console.log(testEmployee);
module.export = Employee;