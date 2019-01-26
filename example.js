import {
  addRules,
  isGreaterThan,
  isNumber,
  isString,
  isValidEmail,
  stringContains,
  validate,
  Validator
} from "./src/index.js";

let validator = new Validator();

addRules(validator, [
  {
    prop: "name",
    tests: [
      { test: isString, message: "Name must be a string." },
      { test: stringContains("John", false) }
    ]
  },
  {
    prop: "email",
    test: isValidEmail,
    message: "Email must be valid."
  },
  {
    prop: "age",
    tests: [
      { test: isNumber, message: "Age must be a number." },
      { test: isGreaterThan(20), message: "You must be 21 or older." }
    ]
  }
]);

const obj = { name: "John", email: "test@email.com", age: 20 };

const results = validate(obj, validator);

if (results.valid) {
  console.log("The object is valid!");
} else {
  console.log(results.errors);
}
