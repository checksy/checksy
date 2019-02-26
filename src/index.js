/**
 * This method validates the supplied object.
 * @param {Object} obj Object to be validated.
 * @param {Object[]} rules Array of rules to be applied.
 * @returns {Object} The validation results, including a boolean `result` property and an `errors` message array.
 */
const validate = function(obj, rules) {
  let errors = [];
  rules.forEach(rule => {
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

// Object validation
const { hasKey, hasKeys, keyEquals } = require('./objects');

// Array validation
const { arrayContains } = require('./arrays');

// Number validation
const { isBetween, isEven, isGreaterThan, isLessThan, isOdd, min, max } = require('./numbers');

// Multi-prop validation
const { areEqual } = require('./multi');

// Operators
const { and, or } = require('./operators');

module.exports = {
  and,
  areEqual,
  arrayContains,
  hasKey,
  hasKeys,
  isBetween,
  isBoolean,
  isFalse,
  isFunction,
  isEven,
  isGreaterThan,
  isLessThan,
  isNull,
  isNumber,
  isOdd,
  isString,
  isSymbol,
  isTrue,
  isUndefined,
  isValidEmail,
  keyEquals,
  min,
  max,
  or,
  stringContains,
  validate
};
