const addRules = require("../../src/index").addRules;

test("Adding rule makes validation rules length 1", () => {
  const validator = {
    rules: []
  };

  addRules(validator, ["test"]);
  expect(validator.rules.length).toBe(1);
});
