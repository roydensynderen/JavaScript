var employees = [];

function PartTimer() {
    this.status = "Part-time";
}

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full-time";
}
Employee.prototype.printEmployeeForm = function(input) {
    console.log(input);
}

//Instantiate 3 employees
var john = new Employee("John", "Sales Associate", "$5,000/month");
var jen = new Employee("Jen", "Librarian", "$4,000/month" );
var joe = new Employee("Joe", "Manager", "$6,000/month");

//Call the method for each employee
Employee.prototype.printEmployeeForm(john);
Employee.prototype.printEmployeeForm(jen);
Employee.prototype.printEmployeeForm(joe);

// Making John the Part-timer
john.status = "Part-Timer";
console.log(john);

//Pushing the objects into the array
employees.push(john, jen, joe);
console.log(employees);

