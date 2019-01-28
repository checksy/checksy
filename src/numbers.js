function isGreaterThan(value) {
  return function isGreaterThan(prop) {
    return prop > value;
  };
}

module.exports = { isGreaterThan };
