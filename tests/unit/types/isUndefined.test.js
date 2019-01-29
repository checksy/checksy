const isUndefined = require('../../../src/index').isUndefined;

test('Undefined variable is undefined', () => {
  expect(isUndefined(undefined)).toBe(true);
});

test('Number variable is not undefined', () => {
  expect(isUndefined(12)).toBe(false);
});
