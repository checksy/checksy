const Validator = require("../../src/index").Validator;

test("True test will be valid", () => {
  const rule = {
    prop: "name",
    test: prop => true,
    message: "Name is always valid"
  };
  const obj = { name: "Joe" };
  const validator = new Validator();
  validator.addRules([rule]);
  const results = validator.validate(obj);
  expect(results.valid).toBe(true);
});

test("False test will be invalid", () => {
  const rule = {
    prop: "name",
    test: prop => false,
    message: "Name is never valid"
  };
  const obj = { name: "Joe" };
  const validator = new Validator();
  validator.addRules([rule]);
  const results = validator.validate(obj);
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
  const validator = new Validator();
  validator.addRules(rules);
  const results = validator.validate(obj);
  expect(results.valid).toBe(true);
});

test("Missing required prop will be invalid", () => {
  const rule = {
    prop: "name",
    test: prop => false,
    message: "Name is never valid"
  };
  const obj = { age: 32 };
  const validator = new Validator();
  validator.addRules([rule]);
  const results = validator.validate(obj);
  expect(results.valid).toBe(false);
});
