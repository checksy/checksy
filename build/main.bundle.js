"use strict";

var _index = require("../index.js");

var validator = new _index.Validator();

(0, _index.addRules)(validator, [{
  prop: "name",
  test: _index.isString
}]);

var obj = { name: 23 };

var results = (0, _index.validate)(obj, validator);

console.log(results);
