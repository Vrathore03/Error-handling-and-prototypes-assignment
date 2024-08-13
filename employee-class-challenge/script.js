class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

// Instantiate an instance of the Employee class
const employee = new Employee('Alice', 'Software Engineer', 75000);

// Call the getSalary method
console.log(employee.getSalary());  // Output: 75000
