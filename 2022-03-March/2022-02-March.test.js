const {
  uniqueDigits,
  sudokuRowChecker,
  sudokuChecker,
} = require("./2022-02-March");

const validRow = [3, 2, 1, 6, 5, 4, 9, 8, 7];
const invalidRow = [3, 2, 1, 6, 5, 4, 9, 8, 1];

const validSolution = [
  [3, 2, 1, 6, 5, 4, 9, 8, 7],
  [6, 5, 4, 9, 8, 7, 3, 2, 1],
  [9, 8, 7, 3, 2, 1, 6, 5, 4],
  [2, 1, 3, 5, 4, 6, 8, 7, 9],
  [5, 4, 6, 8, 7, 9, 2, 1, 3],
  [8, 7, 9, 2, 1, 3, 5, 4, 6],
  [1, 3, 2, 4, 6, 5, 7, 9, 8],
  [4, 6, 5, 7, 9, 8, 1, 3, 2],
  [7, 9, 8, 1, 3, 2, 4, 6, 5],
];

const invalidSolution = [
  [3, 2, 1, 6, 5, 4, 9, 8, 7],
  [6, 5, 4, 9, 8, 7, 3, 2, 1],
  [9, 8, 7, 3, 2, 1, 6, 5, 4],
  [2, 1, 3, 5, 4, 6, 8, 7, 9],
  [5, 4, 6, 8, 1, 9, 2, 1, 3],
  [8, 7, 9, 2, 1, 3, 5, 4, 6],
  [1, 3, 2, 4, 6, 5, 7, 9, 8],
  [4, 6, 5, 7, 9, 8, 1, 3, 2],
  [7, 9, 8, 1, 3, 2, 4, 6, 5],
];

describe("[Easy]", () => {
  test("Returns true for a valid row", () => {
    expect(uniqueDigits(validRow)).toBe(true);
  });
  test("Returns false for an invalid row", () => {
    expect(uniqueDigits(invalidRow)).toBe(false);
  });
});

describe("[Medium]", () => {
  test("Returns true for a valid solution", () => {
    expect(uniqueDigits(validSolution)).toBe(true);
  });
  test("Returns false for an invalid solution", () => {
    expect(uniqueDigits(invalidSolution)).toBe(false);
  });
});

describe("[Hard]", () => {
  test("Returns true for a valid solution", () => {
    expect(uniqueDigits(validSolution)).toBe(true);
  });
  test("Returns false for an invalid solution", () => {
    expect(uniqueDigits(invalidSolution)).toBe(false);
  });
});
