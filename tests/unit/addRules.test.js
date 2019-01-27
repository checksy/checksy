const Validator = require("../../src/index").Validator;

test("Adding rule makes validation rules length 1", () => {
  const validator = new Validator();

  validator.addRules(["test"]);
  expect(validator.rules.length).toBe(1);
});
