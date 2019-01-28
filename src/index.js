const Validator = function() {
  this.rules = [];
};

function areEqual(...props) {
  const reduced = [...new Set(props)];
  return reduced.length === 1;
}

function isBoolean(prop) {
  return typeof prop === 'boolean';
}

function isFalse(prop) {
  return prop === false;
}

function isFunction(prop) {
  return typeof prop === 'function';
}

function isGreaterThan(value) {
  return function isGreaterThan(prop) {
    return prop > value;
  };
}

function isNull(prop) {
  return prop === null;
}

function isNumber(prop) {
  return typeof prop === 'number';
}

function isString(prop) {
  return typeof prop === 'string';
}

function isSymbol(prop) {
  return typeof prop === 'symbol';
}

function isTrue(prop) {
  return prop === true;
}

function isUndefined(prop) {
  return typeof prop === 'undefined';
}

function isValidEmail(prop) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(prop).toLowerCase());
}

function stringContains(text, caseSensitive = true) {
  return function stringContains(prop) {
    if (!caseSensitive) {
      prop = prop.toLowerCase();
      text = text.toLowerCase();
    }

    return prop.includes(text);
  };
}

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
