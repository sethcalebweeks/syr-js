const { missingDigits, validDigits, sudokuSolver } = require("./2022-04-April");

const sudoku = [
  [0, 0, 0, 0, 0, 0, 9, 0, 0],
  [0, 0, 0, 0, 5, 0, 6, 7, 8],
  [6, 0, 0, 0, 4, 8, 2, 0, 0],
  [0, 1, 2, 0, 6, 5, 0, 0, 0],
  [4, 0, 0, 8, 9, 0, 0, 0, 0],
  [8, 0, 5, 3, 0, 0, 0, 6, 4],
  [5, 0, 0, 0, 0, 3, 0, 0, 6],
  [0, 8, 6, 9, 1, 4, 5, 2, 3],
  [9, 4, 0, 5, 2, 6, 0, 0, 7],
];

const solution = [
  [2, 5, 8, 6, 3, 7, 9, 4, 1],
  [1, 3, 4, 2, 5, 9, 6, 7, 8],
  [6, 7, 9, 1, 4, 8, 2, 3, 5],
  [3, 1, 2, 4, 6, 5, 7, 8, 9],
  [4, 6, 7, 8, 9, 1, 3, 5, 2],
  [8, 9, 5, 3, 7, 2, 1, 6, 4],
  [5, 2, 1, 7, 8, 3, 4, 9, 6],
  [7, 8, 6, 9, 1, 4, 5, 2, 3],
  [9, 4, 3, 5, 2, 6, 8, 1, 7],
];

describe("[Easy]", () => {
  test("Returns missing digits from list", () => {
    expect(missingDigits(sudoku[1]).sort()).toEqual([1, 2, 3, 4, 9]);
  });
});

describe("[Medium]", () => {
  test("Returns valid digits for a given cell", () => {
    expect(validDigits(sudoku, 1, 5).sort()).toEqual([1, 2, 9]);
  });
});

describe("[Hard]", () => {
  test("Returns a solved sudoku", () => {
    expect(sudokuSolver(sudoku)).toEqual(solution);
  });
});
