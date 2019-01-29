const isFalse = require('../../../src/index').isFalse;

test('False variable is false', () => {
  expect(isFalse(false)).toBe(true);
});

test('True variable is not false', () => {
  expect(isFalse(true)).toBe(false);
});

test('String variable is not false', () => {
  expect(isFalse('false')).toBe(false);
});
