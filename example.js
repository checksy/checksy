import {
  areEqual,
  isGreaterThan,
  isNumber,
  isString,
  isValidEmail,
  stringContains,
  Validator
} from "./src/index.js";

let validator = new Validator();

validator.addRules([
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
  },
  {
    prop: ["password", "passwordConfirm"],
    test: areEqual,
    message: "Passwords must be equal."
  }
]);

const obj = {
  name: "John",
  email: "testemail.com",
  age: 21,
  password: "password",
  passwordConfirm: "password"
};

const results = validator.validate(obj);

if (results.valid) {
  console.log("The object is valid!");
} else {
  console.log(results.errors);
}
