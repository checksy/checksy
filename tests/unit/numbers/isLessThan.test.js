const isLessThan = require('../../../src/numbers').isLessThan;

test('Number is less than another number', () => {
  const test = isLessThan(10);
  expect(test(6)).toBe(true);
});

test('Number is not less than another number', () => {
  const test = isLessThan(10);
  expect(test(11)).toBe(false);
});
