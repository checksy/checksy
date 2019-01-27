const isSymbol = require("../src/index").isSymbol;

test("Symbol variable is symbol", () => {
  expect(isSymbol(Symbol("symbol"))).toBe(true);
});

test("Number variable is not symbol", () => {
  expect(isSymbol(12)).toBe(false);
});
