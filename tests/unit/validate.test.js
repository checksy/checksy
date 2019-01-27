const validate = require("../../src/index").validate;

test("True test will be valid", () => {
  const rule = {
    prop: "name",
    test: prop => true,
    message: "Name is always valid"
  };
  const obj = { name: "Joe" };
  const validator = { rules: [rule] };
  const results = validate(obj, validator);
  expect(results.valid).toBe(true);
});

test("False test will be invalid", () => {
  const rule = {
    prop: "name",
    test: prop => false,
    message: "Name is never valid"
  };
  const obj = { name: "Joe" };
  const validator = { rules: [rule] };
  const results = validate(obj, validator);
  expect(results.valid).toBe(false);
});
