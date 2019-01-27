const isString = require("../src/index").isString;

test("String variable is string", () => {
  expect(isString("stringy")).toBe(true);
});

test("Number variable is not string", () => {
  expect(isString(12)).toBe(false);
});
