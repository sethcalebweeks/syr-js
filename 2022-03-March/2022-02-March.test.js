const {
  uniqueDigits,
  sudokuRowChecker,
  sudokuChecker,
} = require("./2022-02-March");

describe("[Easy]", () => {
  test("Returns true for [3, 2, 1, 6, 5, 4, 9, 8, 7]", () => {
    expect(uniqueDigits([3, 2, 1, 6, 5, 4, 9, 8, 7])).toBe(true);
  });
  test("Returns false for [3, 2, 1, 3, 5, 4, 9, 8, 7]", () => {
    expect(uniqueDigits([3, 2, 1, 3, 5, 4, 9, 8, 7])).toBe(true);
  });
});

describe("[Medium]", () => {
  test("Dummy test", () => {
    expect(1).toBe(1);
  });
});

describe("[Hard]", () => {
  test("Dummy test", () => {
    expect(1).toBe(1);
  });
});
