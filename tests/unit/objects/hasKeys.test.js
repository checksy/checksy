const hasKeys = require('../../../src/objects').hasKeys;

test('Object has keys', () => {
  const obj = { name: 'Joe', age: 25 };
  const test = hasKeys('name', 'age');
  expect(test(obj)).toBe(true);
});

test('Object does not have keys', () => {
  const obj = { name: 'Joe', age: 25 };
  const test = hasKeys('name', 'email');
  expect(test(obj)).toBe(false);
});
