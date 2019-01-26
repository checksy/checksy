const Validator = function() {
  this.rules = [];
};

function addRules(validator, rules) {
  validator.rules = validator.rules.concat(rules);
}

function isBoolean(prop) {
  return typeof prop === "boolean";
}

function isFalse(prop) {
  return prop === false;
}

function isFunction(prop) {
  return typeof prop === "function";
}

function isNull(prop) {
  return prop === null;
}

function isNumber(prop) {
  return typeof prop === "number";
}

function isString(prop) {
  return typeof prop === "string";
}

function isSymbol(prop) {
  return typeof prop === "symbol";
}

function isTrue(prop) {
  return prop === true;
}

function isUndefined(prop) {
  return typeof prop === "undefined";
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
  isBoolean,
  isFalse,
  isFunction,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isTrue,
  isUndefined,
  validate,
  Validator
};
