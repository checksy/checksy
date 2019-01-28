function isValidEmail(prop) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

module.exports = {
  isValidEmail,
  stringContains
};
