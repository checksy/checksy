/**
 * Test whether a property is `Boolean`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is `Boolean`, `false` otherwise.
 */
function isBoolean(prop) {
  return typeof prop === 'boolean';
}

/**
 * Test whether a property is `false`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is `false`, `false` otherwise.
 */
function isFalse(prop) {
  return prop === false;
}

/**
 * Test whether a property is a `function`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is a `function`, `false` otherwise.
 */
function isFunction(prop) {
  return typeof prop === 'function';
}

/**
 * Test whether a property is `null`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is `null`, `false` otherwise.
 */
function isNull(prop) {
  return prop === null;
}

/**
 * Test whether a property is a `Number`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is a `Number`, `false` otherwise.
 */
function isNumber(prop) {
  return typeof prop === 'number';
}

/**
 * Test whether a property is a `String`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is a `String`, `false` otherwise.
 */
function isString(prop) {
  return typeof prop === 'string';
}

/**
 * Test whether a property is `Symbol`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is a `Symbol`, `false` otherwise.
 */
function isSymbol(prop) {
  return typeof prop === 'symbol';
}

/**
 * Test whether a property is `true`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is `true`, `false` otherwise.
 */
function isTrue(prop) {
  return prop === true;
}

/**
 * Test whether a property is `undefined`.
 * @param {any} prop Property to be validated.
 * @returns {Boolean} `true` if the property is `undefined`, `false` otherwise.
 */
function isUndefined(prop) {
  return typeof prop === 'undefined';
}

module.exports = {
  isBoolean,
  isFalse,
  isFunction,
  isNull,
  isNumber,
  isString,
  isSymbol,
  isTrue,
  isUndefined
};
