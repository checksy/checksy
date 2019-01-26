const newValidator = function() {
  return {
    rules: []
  };
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
      errors.push(rule.message);
    }
  });
  return { valid: errors.length === 0, errors };
}

module.exports = {
  addRules,
  isString,
  newValidator,
  validate
};
