const isNull = require('../../../src/index').isNull;

test('Null variable is null', () => {
  expect(isNull(null)).toBe(true);
});

test('String variable is not null', () => {
  expect(isNull('stringy')).toBe(false);
});
