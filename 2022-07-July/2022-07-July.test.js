const { play, winner } = require("./2022-07-July");

describe("[Medium]", () => {
  test("Place X in the center of an empty board", () => {
    expect(play([1, 2, 3, 4, 5, 6, 7, 8, 9], "X", 5)).toEqual([
      1,
      2,
      3,
      4,
      "X",
      6,
      7,
      8,
      9,
    ]);
  });
  test("Place X in the bottom right corner taken by O", () => {
    expect(play([1, 2, 3, 4, 5, 6, 7, 8, "O"], "X", 9)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      "O",
    ]);
  });
  test("Place O in the top left corner taken by X", () => {
    expect(play(["X", 2, 3, 4, 5, 6, 7, 8, 9], "O", 1)).toEqual([
      "X",
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
});

describe("[Hard]", () => {
  test("X is winner", () => {
    expect(winner(["X", "X", "X", "O", "O", "X", "O", "X", "O"])).toEqual("X");
  });
  test("O is winner", () => {
    expect(winner(["O", 2, "X", "O", "X", "X", "O", "X", 9])).toEqual("O");
  });
  test("Tie game", () => {
    expect(winner(["O", "X", "X", "X", "O", "O", "O", "O", "X"])).toEqual(
      "Tie"
    );
  });
  test("Incomplete", () => {
    expect(winner([1, 2, 3, 4, "X", 6, 7, 8, 9])).toBe(undefined);
  });
});
