function isBetween(min, max, inclusive = false) {
  return function isBetween(value) {
    if (inclusive) {
      return value >= min && value <= max;
    }

    return value > min && value < max;
  };
}

function isEven(value) {
  return value % 2 === 0;
}

/**
 * Create a test to determine if a property is greater than a specified value.
 * @param {Number} value Value against which the prop will be evaluated.
 * @returns {Function} A test function that takes a property.
 */
function isGreaterThan(value) {
  return function isGreaterThan(prop) {
    return prop > value;
  };
}

function isLessThan(value) {
  return function isLessThan(prop) {
    return prop < value;
  };
}

function isOdd(value) {
  return value % 2 === 1;
}

function min(value) {
  return function min(prop) {
    return prop >= value;
  };
}

function max(value) {
  return function min(prop) {
    return prop <= value;
  };
}

module.exports = { isBetween, isEven, isGreaterThan, isLessThan, isOdd, min, max };
