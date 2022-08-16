import { printBoard, play, winner } from "../2022-07-July/2022-07-July";
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

// [Easy] Write a function that takes an array of 9 characters and returns a
// comma separated string of the remaining available positions to play in. If
// all positions are open, return "0-9".
const availablePlays = (board) => {};

// [Medium] Write a function that takes a game state and a position from 1-9
// and returns a new game state. A game state is defined as the following:
// {
//   board: [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   status: "X Play" | "O Play" | "X Replay" | "O Replay" |
//           "Tie Game" | "X Wins" | "O Wins"
// }
// If the status was "X Play" or "X Replay" and player "O" makes a valid move,
// set the status to "O Play" and vice versa. If the player makes an invalid
// move, set the status to "X Replay" or "O Replay". If the game is complete,
// set the status to "X Wins", "O Wins", or "Tie" as appropriate.
const makeMove = ({ board, status }, position) => {};

// [Hard] Write a function that starts a game of tic tac toe in the console.
// The game should go something like this:
//
//    1 | 2 | 3
//   ___|___|___
//    4 | 5 | 6
//   ___|___|___
//    7 | 8 | 9
//      |   |
//
// Player "X", make your move (1-9): 5
//
//    1 | 2 | 3
//   ___|___|___
//    4 | X | 6
//   ___|___|___
//    7 | 8 | 9
//      |   |
//
// Player "O", make your move (1, 2, 3, 4, 6, 7, 8, 9): 1
//
//    O | 2 | 3
//   ___|___|___
//    4 | X | 6
//   ___|___|___
//    7 | 8 | 9
//      |   |
//
// Player "X", make your move (2, 3, 4, 6, 7, 8, 9): 3
//
//    O | 2 | X
//   ___|___|___
//    4 | X | 6
//   ___|___|___
//    7 | 8 | 9
//      |   |
//
// Player "O", make your move (2, 4, 6, 7, 8, 9): 5
//
//    O | 2 | X
//   ___|___|___
//    O | X | 6
//   ___|___|___
//    7 | 8 | 9
//      |   |
//
// That position is already taken. Player "O", make your move (2, 4, 6, 7, 8, 9): 4
//
//    O | 2 | X
//   ___|___|___
//    O | X | 6
//   ___|___|___
//    7 | 8 | 9
//      |   |
//
// Player "X", make your move (2, 6, 7, 8, 9): 7
//
//    O | 2 | X
//   ___|___|___
//    4 | X | 6
//   ___|___|___
//    X | 8 | 9
//      |   |
//
// Player "X" wins! Play again? (y/n):

const playTicTacToe = () => {};

module.exports = {
  availablePlays,
  makeMove,
  playTicTacToe,
};
