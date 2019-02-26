const min = require('../../../src/numbers').min;

test('Number is above minimum', () => {
  const test = min(10);
  expect(test(11)).toBe(true);
});

test('Number is not above minimum', () => {
  const test = min(5);
  expect(test(3)).toBe(false);
});
