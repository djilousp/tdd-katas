const solver = require("./src/solver");

const fizzbuzz = () => {
  for (i = 1; i <= 100; i++) {
    console.log(solver.solve(i));
  }
};

fizzbuzz();
