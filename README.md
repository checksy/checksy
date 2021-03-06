![checksy](https://i.imgur.com/ZQgJPJ8.png)

[![Build Status](https://travis-ci.org/checksy/checksy.svg?branch=master)](https://travis-ci.org/checksy/checksy) [![Codecov Status](https://codecov.io/gh/checksy/checksy/branch/master/graph/badge.svg)](https://codecov.io/gh/checksy/checksy/branch/master)

## API Docs

Full API documentation can be found at [https://checksy.github.io](https://checksy.github.io).

## Example Usage

```javascript
import {
  areEqual,
  isGreaterThan,
  isNumber,
  isString,
  isValidEmail,
  or,
  stringContains,
  validate
} from './src/index.js';

let rules = [
  {
    prop: 'name',
    tests: [
      { test: isString, message: 'Name must be a string.' },
      { test: stringContains('John'), message: 'Name must be John' }
    ]
  },
  {
    prop: 'email',
    test: or(isValidEmail, stringContains('Nick')),
    message: 'Email must be valid.'
  },
  {
    prop: 'age',
    tests: [
      { test: isNumber, message: 'Age must be a number.' },
      { test: isGreaterThan(20), message: 'You must be 21 or older.' }
    ]
  },
  {
    prop: ['password', 'passwordConfirm'],
    test: areEqual,
    message: 'Passwords must be equal.'
  }
];

const obj = {
  name: 'John',
  email: 'Nick.com',
  age: 21,
  password: 'password',
  passwordConfirm: 'password'
};

const results = validate(obj, rules);

if (results.valid) {
  console.log('The object is valid!');
} else {
  console.log(results.errors);
}
```
