const isTrue = require('../../../src/index').isTrue;

test('True variable is true', () => {
  expect(isTrue(true)).toBe(true);
});

test('Number variable is not true', () => {
  expect(isTrue(12)).toBe(false);
});
