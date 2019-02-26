const max = require('../../../src/numbers').max;

test('Number is below maximum', () => {
  const test = max(10);
  expect(test(5)).toBe(true);
});

test('Number is not below maximum', () => {
  const test = max(5);
  expect(test(13)).toBe(false);
});
