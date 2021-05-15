const { it, expect, describe } = require("@jest/globals");
const Employee = require("../lib/Employee");
describe("This is the test on the employee constructor", () => {
  describe("Testing all the properties of the employee constructor", () => {
    it("testing the name", () => {
      const employee = new Employee("sam", 123, "sam@gmail.com");
      expect(employee.name).toEqual("sam");
    });
    it("testing the id", () => {
      const employee = new Employee("sam", 123, "sam@gmail.com");
      expect(employee.id).toEqual(123);
    });
    it("testing the email", () => {
      const employee = new Employee("sam", 123, "sam@gmail.com");
      expect(employee.email).toEqual("sam@gmail.com");
    });
  });
  describe("this is to test the meths", () => {
    it("testing the name method", () => {
      const employee = new Employee("sam", 123, "sam@gmail.com");
      expect(employee.getName()).toEqual("sam");
    });
    it("testing the id method", () => {
      const employee = new Employee("sam", 123, "sam@gmail.com");
      expect(employee.getId()).toEqual(123);
    });
    it("testing the email method", () => {
      const employee = new Employee("sam", 123, "sam@gmail.com");
      expect(employee.getEmail()).toEqual("sam@gmail.com");
    });
    it("testing the getRole method", () => {
      const employee = new Employee("sam", 123, "sam@gmail.com");
      expect(employee.getRole()).toEqual(`Employee`);
    });
  });
});
