const { columns, squares } = require("../2022-03-March/2022-03-March");

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// [Easy] Given list of numbers, check which digits from 1-9 are missing
const missingDigits = (numbers, digits = DIGITS) => {
  return digits.filter((digit) => !numbers.includes(digit));
};

// [Medium] Given a 9x9 matrix of digits and the indices for a square in the
// matrix, determine which digits are valid for that cell
const validDigits = (matrix, row, column) => {
  const square = 3 * Math.floor(column / 3) + Math.floor(row / 3);
  const missingInRow = missingDigits(matrix[row]);
  const missingInColumn = missingDigits(columns(matrix)[column], missingInRow);
  return missingDigits(squares(matrix)[square], missingInColumn);
};

// [Hard] Given a 9x9 matrix of digits, fill in the missing digits by
// assuming that there is at least one cell at a given time that has only
// one valid digit
const blanks = (matrix) =>
  matrix.flatMap((row, i) =>
    row.flatMap((cell, j) => (cell === 0 ? [[i, j]] : []))
  );

const sudokuSolver = (matrix) => {
  let solved = false;
  do {
    let blankCells = blanks(matrix);
    blankCells.forEach(([row, column]) => {
      const valid = validDigits(matrix, row, column);
      if (valid.length === 1) matrix[row][column] = valid[0];
    });
    solved = blankCells.length === 0;
  } while (!solved);
  return matrix;
};

module.exports = {
  missingDigits,
  validDigits,
  sudokuSolver,
};
