const { availablePlays, makeMove } = require("./2022-08-August");

describe("[Easy]", () => {
  test("Return all available plays", () => {
    expect(availablePlays([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual("1-9");
  });
  test("Return plays 1, 3, 5, 7, 9", () => {
    expect(availablePlays([1, "X", 3, "O", 5, "X", 7, "O", 9])).toEqual(
      "1, 3, 5, 7, 9"
    );
  });
  test("Return plays 1, 2, 3, 5, 8", () => {
    expect(availablePlays([1, 2, 3, "O", 5, "X", "O", 8, "X"])).toEqual(
      "1, 2, 3, 5, 8"
    );
  });
});

describe("[Medium]", () => {
  test("X makes valid play", () => {
    expect(
      makeMove(
        {
          board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          status: "X Play",
        },
        5
      )
    ).toEqual({
      board: [1, 2, 3, 4, "X", 6, 7, 8, 9],
      status: "O Play",
    });
  });
  test("X makes invalid play", () => {
    expect(
      makeMove(
        {
          board: [1, 2, 3, 4, "O", 6, 7, 8, 9],
          status: "X Play",
        },
        5
      )
    ).toEqual({
      board: [1, 2, 3, 4, "O", 6, 7, 8, 9],
      status: "X Replay",
    });
  });
  test("O makes valid play", () => {
    expect(
      makeMove(
        {
          board: [1, 2, 3, 4, "X", 6, 7, 8, 9],
          status: "O Play",
        },
        7
      )
    ).toEqual({
      board: [1, 2, 3, 4, "X", 6, "O", 8, 9],
      status: "X Play",
    });
  });
  test("O wins the game", () => {
    expect(
      makeMove(
        {
          board: ["O", "X", "X", "O", "X", 6, 7, 8, 9],
          status: "O Play",
        },
        7
      )
    ).toEqual({
      board: ["O", "X", "X", "O", "X", 6, "O", 8, 9],
      status: "O Wins",
    });
  });
  test("X ties the game", () => {
    expect(
      makeMove(
        {
          board: ["O", "X", "X", "X", "O", "O", "O", "O", 9],
          status: "X Play",
        },
        9
      )
    ).toEqual({
      board: ["O", "X", "X", "X", "O", "O", "O", "O", "X"],
      status: "Tie Game",
    });
  });
});
