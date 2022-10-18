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
const printBoard = (board) => {
  const emptyBoard = `
   1 | 2 | 3 
  ___|___|___
   4 | 5 | 6 
  ___|___|___
   7 | 8 | 9 
     |   |   
  `;
  const filledBoard = board.reduce((filledBoard, player, index) => {
    const position = index + 1;
    return filledBoard.replace(position, player);
  }, emptyBoard);
  console.log(filledBoard);
};

// [Medium] Write a function that takes a board, "X" or "O", and digit from
// 1-9 and returns a new board with the position of the digit marked with the
// character if it isn't already marked.
const play = (board, player, position) => {
  const positionOpen = (position) => typeof board[position - 1] === "number";
  const move = positionOpen(position) ? player : board[position - 1];
  return [...board.slice(0, position - 1), move, ...board.slice(position)];
};

// [Hard] Write a function that determines the who won the game. If a player
// has won the game, return the "X" or "O" depending on who won. If the game
// is tied, return "Tie". If the game is incomplete, return undefined.
const winner = (board) => {
  const winnerOf = (...positions) => {
    const firstPlayer = board[positions[0] - 1];
    const allSame = positions
      .map((position) => board[position - 1])
      .every((player) => player === firstPlayer);
    return allSame ? firstPlayer : undefined;
  };

  const boardFull =
    board.filter((player) => !(player === "X" || player === "O")).length === 0;

  return (
    winnerOf(1, 2, 3) ||
    winnerOf(4, 5, 6) ||
    winnerOf(7, 8, 9) ||
    winnerOf(1, 4, 7) ||
    winnerOf(2, 5, 8) ||
    winnerOf(3, 6, 9) ||
    winnerOf(1, 5, 9) ||
    winnerOf(3, 5, 7) ||
    (boardFull && "Tie") ||
    undefined
  );
};

module.exports = {
  printBoard,
  play,
  winner,
};
