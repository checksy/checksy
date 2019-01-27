const stringContains = require("../../src/index").stringContains;

test("String correctly contains another string", () => {
  expect(stringContains("test")("this contains test")).toBe(true);
});

test("Number variable is does not contain a string", () => {
  expect(stringContains(12)("this contains test")).toBe(false);
});
