/**
 * Creates a new validation object.
 * @returns {Object} A validation object with no rules.
 */
function Validator() {
  this.rules = [];
}

/**
 * This method adds rules to the validation object.
 * @param {Object[]} rules Array of rule objects.
 * @returns {undefined}
 */
Validator.prototype.addRules = function(rules) {
  this.rules = this.rules.concat(rules);
};

/**
 * This method validates the supplied object.
 * @param {Object} obj Object to be validated.
 * @returns {Object} The validation results, including a boolean `result` property and an `errors` message array.
 */
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

function or(...tests) {
  return function or(value) {
    for (let i = 0; i < tests.length; i++) {
      if (tests[i](value)) {
        return true;
      }
    }

    return false;
  };
}

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
  or,
  stringContains,
  Validator
};
