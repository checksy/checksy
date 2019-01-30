function arrayContains(...values) {
  return function arrayContains(prop) {
    for (let i = 0; i < values.length; i += 1) {
      if (!prop.includes(values[i])) return false;
    }

    return true;
  };
}

module.exports = { arrayContains };
