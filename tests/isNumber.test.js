const isNumber = require("../src/index").isNumber;

test("Number variable is number", () => {
  expect(isNumber(12)).toBe(true);
});

test("String variable is not number", () => {
  expect(isNumber("12")).toBe(false);
});
