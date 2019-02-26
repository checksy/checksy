const keyEquals = require('../../../src/objects').keyEquals;

test('Object key equals value', () => {
  const obj = { name: 'Joe', age: 25 };
  const test = keyEquals('name', 'Joe');
  expect(test(obj)).toBe(true);
});

test('Object key does not equal value', () => {
  const obj = { name: 'Joe', age: 25 };
  const test = keyEquals('name', 'Bob');
  expect(test(obj)).toBe(false);
});
