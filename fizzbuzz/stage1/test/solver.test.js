const solver = require("../src/solver");

describe("stage 1 solver", () => {
  it(`should say fizzbuzz if n is divisible by 3 and 5`, () => {
    expect(solver.solve(15)).toEqual("fizzbuzz");
    expect(solver.solve(30)).toEqual("fizzbuzz");
  });

  it("should say fizz if n is divisible by 3", () => {
    expect(solver.solve(3)).toEqual("fizz");
    expect(solver.solve(6)).toEqual("fizz");
  });

  it("should say buzz if n is divisible by 5", () => {
    expect(solver.solve(5)).toEqual("buzz");
    expect(solver.solve(10)).toEqual("buzz");
  });

  it(`should say n if n is not divisible by 3 nor by 5`, () => {
    expect(solver.solve(7)).toEqual(7);
    expect(solver.solve(11)).toEqual(11);
  });
});
