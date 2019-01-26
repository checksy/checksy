import {
  addRules,
  isNumber,
  isString,
  isValidEmail,
  stringContains,
  validate,
  Validator
} from "./index.js";

let validator = new Validator();

addRules(validator, [
  {
    prop: "name",
    tests: [
      {
        test: isString,
        message: "Name must be a string."
      },
      {
        test: stringContains("John", false),
        message: "Name must contain John."
      }
    ]
  },
  {
    prop: "email",
    test: isValidEmail,
    message: "Email must be valid."
  },
  {
    prop: "age",
    test: isNumber,
    message: "Age must be a number."
  }
]);

const obj = { name: "John", email: "test@email.com", age: 32 };

const results = validate(obj, validator);

if (results.valid) {
  console.log("The object is valid!");
} else {
  console.log(results.errors);
}
