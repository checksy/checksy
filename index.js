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

function isValidEmail(prop) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(prop).toLowerCase());
}

function stringContains(text, caseSensitive = true) {
  return function(prop) {
    if (!caseSensitive) {
      prop = prop.toLowerCase();
      text = text.toLowerCase();
    }

    return prop.includes(text);
  };
}

function validate(obj, validator) {
  let errors = [];
  validator.rules.forEach(rule => {
    rule.tests = rule.tests || [];
    if (rule.test) {
      rule.tests.push({ test: rule.test, message: rule.message || null });
      rule.test = null;
    }

    rule.tests.forEach(test => {
      if (!test.test(obj[rule.prop])) {
        const message =
          test.message || `${rule.prop} failed the ${test.test.name} test.`;
        errors.push(message);
      }
    });
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
  isValidEmail,
  stringContains,
  validate,
  Validator
};
