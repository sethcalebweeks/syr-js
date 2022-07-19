// A tic tak toe board can be defined by the following visual:
//  1 | 2 | 3       O | X | X
// ___|___|___     ___|___|___
//  4 | 5 | 6       X | O | O
// ___|___|___     ___|___|___
//  7 | 8 | 9       O | O | X
//    |   |           |   |
//
// This can be represented by an the arrays:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// ["O", "X", "X", "X", "O", "O", "O", "O", "X"]

// [Easy] Write a function that takes an array of 9 characters and prints the
// board state to the console as shown above.
const printBoard = (board) => {};

// [Medium] Write a function that takes a board, "X" or "O", and digit from
// 1-9 and returns a new board with the position of the digit marked with the
// character if it isn't already marked.
const play = (board, player, position) => {};

// [Hard] Write a function that determines the who won the game. If a player
// has won the game, return the "X" or "O" depending on who won. If the game
// is tied, return "Tie". If the game is incomplete, return undefined.
const winner = (board) => {};

module.exports = {
  printBoard,
  play,
  winner,
};
