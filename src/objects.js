function hasKey(value) {
  return function hasKey(prop) {
    return prop.hasOwnProperty(value);
  };
}

function hasKeys(...values) {
  return function hasKeys(prop) {
    for (let i = 0; i < values.length; i += 1) {
      if (!prop.hasOwnProperty(values[i])) return false;
    }

    return true;
  };
}

function keyEquals(key, value) {
  return function(prop) {
    if (prop[key] && prop[key] === value) {
      return true;
    }

    return false;
  };
}

module.exports = { hasKey, hasKeys, keyEquals };
