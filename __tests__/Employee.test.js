const Employee = require("../lib/Employee");
describe("This is the test on the employee constructor", () => {
  describe("Testing all the properties of the employee constructor", () => {
    it("testing the name", () => {
      const employee = new Employee("sam", 123, "sam@gmail.com");
      expect(employee.name).toEqual("sam");
    });
  });

  // describe("test all of the methods",()=>{

  // })
});
