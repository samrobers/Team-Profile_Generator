const Intern = require("../lib/Intern");

describe("This is the test on the Intern constructor", () => {
  describe("this is to test to check the properties", () => {
    it("testing the name", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.name).toEqual("sam");
    });
    it("testing the id", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.id).toEqual(123);
    });
    it("testing the email", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.email).toEqual("sam@gmail.com");
    });
    it("testing the school", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.school).toEqual("harvard");
    });
  });
  describe("this is to test the meths", () => {
    it("testing the name", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.getName()).toEqual("sam");
    });
    it("testing the id", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.getId()).toEqual(123);
    });
    it("testing the email", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.getEmail()).toEqual("sam@gmail.com");
    });
    it("testing the school", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.getSchool()).toEqual("harvard");
    });
    it("testing the role", () => {
      const intern = new Intern("sam", 123, "sam@gmail.com", "harvard");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
