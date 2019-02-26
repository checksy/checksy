const isBetween = require('../../../src/numbers').isBetween;

test('Number is between two numbers', () => {
  const test = isBetween(1, 10);
  expect(test(5)).toBe(true);
});

test('Number is not between two numbers', () => {
  const test = isBetween(1, 10);
  expect(test(0)).toBe(false);
});

test('Number is not between two numbers (at boundary)', () => {
  const test = isBetween(1, 10);
  expect(test(1)).toBe(false);
});

test('Number is between two numbers (at boundary)', () => {
  const test = isBetween(1, 10, true);
  expect(test(1)).toBe(true);
});
