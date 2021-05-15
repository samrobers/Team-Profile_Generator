const Manager = require("../lib/Manager");

describe("This is the test on the Intern constructor", () => {
  describe("this is to test to check the properties", () => {
    it("testing the name", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.name).toEqual("sam");
    });
    it("testing the id", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.id).toEqual(123);
    });
    it("testing the email", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.email).toEqual("sam@gmail.com");
    });
    it("testing the office number", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.officeNumber).toEqual("333-333-3333");
    });
  });
  describe("this is to test the meths", () => {
    it("testing the office number", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.getOfficeNumber()).toEqual("333-333-3333");
    });
    it("testing the id", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.getId()).toEqual(123);
    });
    it("testing the email", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.getEmail()).toEqual("sam@gmail.com");
    });
    it("testing the name", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.getName()).toEqual("sam");
    });
    it("testing the Role", () => {
      const manager = new Manager("sam", 123, "sam@gmail.com", "333-333-3333");
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
