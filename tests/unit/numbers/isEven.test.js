const isEven = require('../../../src/numbers').isEven;

test('Number is even', () => {
  expect(isEven(6)).toBe(true);
});

test('Number is not even', () => {
  expect(isEven(11)).toBe(false);
});
