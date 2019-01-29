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

module.exports = { isGreaterThan };
