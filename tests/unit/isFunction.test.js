const isFunction = require("../../src/index").isFunction;

function testFunc() {
  return "This is a function";
}

test("A function is a function", () => {
  expect(isFunction(testFunc)).toBe(true);
});

test("A string is not a function", () => {
  expect(isFunction("stringy")).toBe(false);
});
