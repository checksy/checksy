const validate = require('../../src/index').validate;

test('True test will be valid', () => {
  const rules = [
    {
      prop: 'name',
      test: prop => true,
      message: 'Name is always valid'
    }
  ];
  const obj = { name: 'Joe' };
  const results = validate(obj, rules);
  expect(results.valid).toBe(true);
});

test('False test will be invalid', () => {
  const rules = [
    {
      prop: 'name',
      test: prop => false,
      message: 'Name is never valid'
    }
  ];
  const obj = { name: 'Joe' };
  const results = validate(obj, rules);
  expect(results.valid).toBe(false);
});

test('Multiple true rule tests will be valid', () => {
  const rules = [
    {
      prop: 'name',
      tests: [
        {
          test: prop => true,
          message: 'Name is always valid'
        },
        {
          test: prop => true,
          message: 'Name is still always valid'
        }
      ]
    }
  ];
  const obj = { name: 'Joe' };
  const results = validate(obj, rules);
  expect(results.valid).toBe(true);
});

test('Missing required prop will be invalid', () => {
  const rules = [
    {
      prop: 'name',
      test: prop => false,
      message: 'Name is never valid'
    }
  ];
  const obj = { age: 32 };
  const results = validate(obj, rules);
  expect(results.valid).toBe(false);
});
