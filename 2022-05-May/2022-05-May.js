const { validDigits } = require("../2022-04-April/2022-04-April");

const digits = new Array(9).fill(0).map((_val, i) => i + 1);
const emptyMatrix = new Array(9).fill(0).map((row) => new Array(9).fill(0));

const print = (matrix) =>
  console.log(matrix.map((row) => row.join(" ")).join("\n"));

// [Easy] Create a function that generates an array of the digits 1-9 in a
// random order.
const randomRow = () => {
  const remaining = [...digits];
  const shuffledRow = [];
  for (let i = 0; i < 9; i++) {
    const index = Math.floor(Math.random() * remaining.length);
    shuffledRow.push(remaining[index]);
    remaining.splice(index, 1);
  }
  return shuffledRow;
};

// [Medium] Create a function that generates a random 9x9 matrix of digits
// that is a valid sudo solution.

// NOTE: It turns out that this problem is much harder than it first appeared.
// Randomly selecting digits to fill the grid does not work because the
// numbers have constraints on the positions they can fill. To solve this
// problem, you would have to place a digit and try to solve the sudoku. If no
// solution could be found, remove the last digit placed, place another one and
// try again until the sudoku is solved.
const randomPosition = Math.floor(Math.random() * 9);
const randomMatrix = () => {
  const shuffledMatrix = [...emptyMatrix];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const valid = validDigits(shuffledMatrix, i, j);
      const index = Math.floor(Math.random() * 80);
      shuffledMatrix[i][j] = valid[index] || 0;
    }
  }
  return shuffledMatrix;
};

print(randomMatrix());

// [Hard] Create a function that generates a random Sudoku that is solvable.
// (Hint: remove a single digit at a time and check that the sudoku can
// still be solved.)
const randomSudoku = () => {};

module.exports = {
  randomRow,
  randomMatrix,
  randomSudoku,
};
