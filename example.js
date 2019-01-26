import { addRules, isString, newValidator, validate } from "../index.js";

let validator = newValidator();
addRules(validator, [
  {
    prop: "name",
    test: isString,
    message: "Name must be a string"
  }
]);

const obj = { name: "23" };

let results = validate(obj, validator);

console.log(results);
