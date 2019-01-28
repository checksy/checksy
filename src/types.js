function isBoolean(prop) {
  return typeof prop === 'boolean';
}

function isFalse(prop) {
  return prop === false;
}

function isFunction(prop) {
  return typeof prop === 'function';
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
