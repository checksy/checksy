import { addRules, isNumber, isString, validate, Validator } from "./index.js";

let validator = new Validator();

addRules(validator, [
  { prop: "name", test: isString, message: "Name must be a string." },
  { prop: "age", test: isNumber, message: "Age must be a number." }
]);

const obj = { name: "Nick", age: 32 };

let results = validate(obj, validator);

console.log(results);
