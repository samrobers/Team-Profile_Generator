const Employee = require("./Employee");
// extends a way to attach another constructor to the main to reuse the values
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    //way to import all the properties and methods of the attached constructor
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return `Manager`;
  }
}
module.exports = Manager;
