const isGreaterThan = require("../../src/index").isGreaterThan;

test("Number is correctly greater than another number", () => {
  expect(isGreaterThan(10)(14)).toBe(true);
});
