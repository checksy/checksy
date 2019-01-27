const isValidEmail = require("../../src/index").isValidEmail;

test("Email variable is a valid email", () => {
  expect(isValidEmail("example@email.com")).toBe(true);
});

test("Number variable is not valid email", () => {
  expect(isValidEmail(12)).toBe(false);
});
