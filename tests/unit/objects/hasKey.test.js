const hasKey = require('../../../src/objects').hasKey;

test('Object has key', () => {
  const obj = { name: 'Joe', age: 25 };
  const test = hasKey('name');
  expect(test(obj)).toBe(true);
});

test('Object does not have key', () => {
  const obj = { name: 'Joe', age: 25 };
  const test = hasKey('surname');
  expect(test(obj)).toBe(false);
});
