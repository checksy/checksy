const arrayContains = require('../../../src/arrays').arrayContains;

test('Array contains single value', () => {
  const test = arrayContains(1);
  expect(test([1, 2, 3])).toBe(true);
});

test('Array does not contain single value', () => {
  const test = arrayContains(1);
  expect(test([2, 3, 4])).toBe(false);
});

test('Array contains multiple values', () => {
  const test = arrayContains(1, 2);
  expect(test([1, 2, 3])).toBe(true);
});

test('Array does not contain one of multiple values', () => {
  const test = arrayContains(1, 2);
  expect(test([2, 3, 4])).toBe(false);
});
