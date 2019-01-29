const and = require('../../../src/index').and;

test('True tests evaluate to true', () => {
  const firstTest = prop => true;
  const secondTest = prop => true;
  const thirdTest = prop => true;

  const andStatement = and(firstTest, secondTest, thirdTest);

  expect(andStatement('value')).toBe(true);
});

test('Only one false test evaluates to false', () => {
  const firstTest = prop => true;
  const secondTest = prop => false;
  const thirdTest = prop => true;

  const andStatement = and(firstTest, secondTest, thirdTest);

  expect(andStatement('value')).toBe(false);
});
