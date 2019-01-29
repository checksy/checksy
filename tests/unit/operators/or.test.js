const or = require('../../../src/index').or;

test('True tests evaluate to true', () => {
  const firstTest = prop => true;
  const secondTest = prop => true;
  const thirdTest = prop => true;

  const orStatement = or(firstTest, secondTest, thirdTest);

  expect(orStatement('value')).toBe(true);
});

test('Only one true test evaluates to true', () => {
  const firstTest = prop => false;
  const secondTest = prop => false;
  const thirdTest = prop => true;

  const orStatement = or(firstTest, secondTest, thirdTest);

  expect(orStatement('value')).toBe(true);
});

test('False tests evaluate to false', () => {
  const firstTest = prop => false;
  const secondTest = prop => false;
  const thirdTest = prop => false;

  const orStatement = or(firstTest, secondTest, thirdTest);

  expect(orStatement('value')).toBe(false);
});
