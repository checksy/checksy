const isBoolean = require("../src/index").isBoolean;

test("True variable is boolean", () => {
  expect(isBoolean(true)).toBe(true);
});

test("False variable is boolean", () => {
  expect(isBoolean(false)).toBe(true);
});

test("String variable is not boolean", () => {
  expect(isBoolean("Hello")).toBe(false);
});

test("Non-zero number variable is not boolean", () => {
  expect(isBoolean(12)).toBe(false);
});

test("Zero number variable is not boolean", () => {
  expect(isBoolean(0)).toBe(false);
});

test("Object literal is not boolean", () => {
  expect(isBoolean({ val: true })).toBe(false);
});

test("Null is not boolean", () => {
  expect(isBoolean(null)).toBe(false);
});

test("Undefined is not boolean", () => {
  expect(isBoolean(undefined)).toBe(false);
});
