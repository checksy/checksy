const Validator = require("../src/index").Validator;

test("New validator contains empty rules array", () => {
  const validator = new Validator();
  expect(validator.rules.length).toBe(0);
});
