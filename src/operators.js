function and(...tests) {
  return function and(value) {
    for (let i = 0; i < tests.length; i += 1) {
      if (!tests[i](value)) {
        return false;
      }
    }

    return true;
  };
}

function or(...tests) {
  return function or(value) {
    for (let i = 0; i < tests.length; i += 1) {
      if (tests[i](value)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = { and, or };
