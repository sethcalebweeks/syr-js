// [Easy] Check to see that a given list of numbers contains the digits 1-9
// once and only once
const uniqueDigits = (numbers) => {
  return new Set(numbers).size === numbers.length;
};

// [Medium] Check to see that a given 9x9 matrix of digits contains the
// digits 1-9 once and only once in each row
const sudokuRowChecker = (matrix) => {
  return matrix.every(uniqueDigits);
};

// [Hard] Check to see that a given 9x9 matrix of digits contains the
// digits 1-9 once and only once in each row, column, and 3x3 square
// corresponding to the thirds of the original matrix
const sudokuChecker = (matrix) => {
  const allRowsValid = matrix.every(uniqueDigits);
  const allColumnsValid = columns(matrix).every(uniqueDigits);
  const allSquaresValid = squares(matrix).every(uniqueDigits);
  return allRowsValid && allColumnsValid && allSquaresValid;
};

const columns = (matrix) => {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
};

const squares = (matrix) => {
  let result = [[], [], [], [], [], [], [], [], []];
  matrix.forEach((row, i) => {
    row.forEach((number, j) => {
      const index = 3 * Math.floor(j / 3) + Math.floor(i / 3);
      result[index].push(number);
    });
  });
  return result;
};

module.exports = {
  uniqueDigits,
  sudokuRowChecker,
  sudokuChecker,
  columns,
  squares,
};
