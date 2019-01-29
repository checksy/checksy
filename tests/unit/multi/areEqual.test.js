const areEqual = require('../../../src/index').areEqual;

test('Equal values are equal', () => {
  expect(areEqual('Some Value', 'Some Value', 'Some Value')).toBe(true);
});

test('Non-equal values are not equal', () => {
  expect(areEqual('Some Value', 'Some Value', 'Another Value')).toBe(false);
});
