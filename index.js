const Validator = function() {
  this.rules = [];
};

function addRules(validator, rules) {
  validator.rules = validator.rules.concat(rules);
}

function isString(prop) {
  return typeof prop === "string";
}

function validate(obj, validator) {
  let errors = [];
  validator.rules.forEach(rule => {
    if (!rule.test(obj[rule.prop])) {
      const message =
        rule.message || `${rule.prop} failed the ${rule.test.name} test.`;
      errors.push(message);
    }
  });
  return { valid: errors.length === 0, errors };
}

module.exports = {
  addRules,
  isString,
  validate,
  Validator
};
