const Validator = function() {
  this.rules = [];
};

Validator.prototype.addRules = function(rules) {
  this.rules = this.rules.concat(rules);
};

Validator.prototype.validate = function(obj) {
  let errors = [];
  this.rules.forEach(rule => {
    rule.tests = rule.tests || [];
    if (rule.test) {
      rule.tests.push({ test: rule.test, message: rule.message || null });
      rule.test = null;
    }

    rule.tests.forEach(test => {
      if (!Array.isArray(rule.prop)) {
        rule.prop = [rule.prop];
      }

      const message = test.message || `${rule.prop.join(', ')} failed the ${test.test.name} test.`;

      let allPropsPresent = true;

      rule.prop.forEach(prop => {
        if (!obj.hasOwnProperty(prop)) allPropsPresent = false;
      });

      if (!allPropsPresent && (!rule.hasOwnProperty('required') || rule.required === true)) {
        errors.push(message);
      } else if (allPropsPresent) {
        const values = rule.prop.map(prop => obj[prop]);
        if (!test.test(...values)) {
          errors.push(message);
        }
      }
    });
  });

  return { valid: errors.length === 0, errors };
};

// Type validation
const {
  isBoolean,
  isFalse,
  isFunction,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isTrue,
  isUndefined
} = require('./types');

// String validation
const { isValidEmail, stringContains } = require('./strings');

// Number validation
const { isGreaterThan } = require('./numbers');

// Multi-prop validation
const { areEqual } = require('./multi');

module.exports = {
  areEqual,
  isBoolean,
  isFalse,
  isFunction,
  isGreaterThan,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isTrue,
  isUndefined,
  isValidEmail,
  stringContains,
  Validator
};
