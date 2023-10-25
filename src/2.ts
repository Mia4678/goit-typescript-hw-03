/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000); // Викликаємо конструктор суперкласу та збільшуємо salary на 10000
  }
}

const employee1 = new Employee("John", "HR", 50000);
const manager1 = new Manager("Alice", "Finance", 60000);

console.log(employee1.getEmployeeDetails()); // Виведе: Name: John, Department: HR, Salary: 50000
console.log(manager1.getEmployeeDetails());  // Виведе: Name: Alice, Department: Finance, Salary: 70000
