const isOdd = require('../../../src/numbers').isOdd;

test('Number is odd', () => {
  expect(isOdd(11)).toBe(true);
});

test('Number is not odd', () => {
  expect(isOdd(6)).toBe(false);
});
