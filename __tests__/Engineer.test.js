const { describe, it } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("This is the test on the engineer constructor", () => {
  describe("this is to test to check the properties", () => {
    it("testing the name", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.name).toEqual("sam");
    });
    it("testing the id", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.id).toEqual(123);
    });
    it("testing the email", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.email).toEqual("sam@gmail.com");
    });
    it("testing the github", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.github).toEqual("github.com");
    });
  });
  describe("this is to test the meths", () => {
    it("testing the name", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.getName()).toEqual("sam");
    });
    it("testing the id", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.getId()).toEqual(123);
    });
    it("testing the email", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.getEmail()).toEqual("sam@gmail.com");
    });
    it("testing the github", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.getGitHub()).toEqual("github.com");
    });
    it("testing the role", () => {
      const engineer = new Engineer("sam", 123, "sam@gmail.com", "github.com");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
