"use strict";

var _index = require("../index.js");

var validator = (0, _index.newValidator)();
(0, _index.addRules)(validator, [{
  prop: "name",
  test: _index.isString,
  message: "Name must be a string"
}]);

var obj = { name: "23" };

var results = (0, _index.validate)(obj, validator);

console.log(results);
