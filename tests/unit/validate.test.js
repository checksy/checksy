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

test("Multiple true rule tests will be valid", () => {
  const rules = [
    {
      prop: "name",
      tests: [
        {
          test: prop => true,
          message: "Name is always valid"
        },
        {
          test: prop => true,
          message: "Name is still always valid"
        }
      ]
    }
  ];
  const obj = { name: "Joe" };
  const validator = { rules };
  const results = validate(obj, validator);
  expect(results.valid).toBe(true);
});

test("Missing required prop will be invalid", () => {
  const rule = {
    prop: "name",
    test: prop => false,
    message: "Name is never valid"
  };
  const obj = { age: 32 };
  const validator = { rules: [rule] };
  const results = validate(obj, validator);
  expect(results.valid).toBe(false);
});
