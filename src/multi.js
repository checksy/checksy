function areEqual(...props) {
  return [...new Set(props)].length === 1;
}

module.exports = { areEqual };
