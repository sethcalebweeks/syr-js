const { randomRow, randomMatrix, randomSudoku } = require("./2022-05-May");
const {
  uniqueDigits,
  sudokuChecker,
} = require("../2022-03-March/2022-03-March");
const { sudokuSolver } = require("../2022-04-April/2022-04-April");

describe("[Easy]", () => {
  test("Random row contains the digits 1-9", () => {
    expect(uniqueDigits(randomRow())).toBe(true);
  });
});

describe("[Medium]", () => {
  test("Random matrix is a valid sudoku solution", () => {
    expect(sudokuChecker(randomMatrix())).toBe(true);
  });
});

describe("[Hard]", () => {
  test("Random sudoku is solvable", () => {
    expect(sudokuChecker(sudokuSolver(randomSudoku()))).toBe(true);
  });
});
