const readline = require("readline");
const { play, winner } = require("../2022-07-July/2022-07-July");
const { availablePlays, makeMove } = require("./2022-08-August");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", () => process.exit(0));

const prompt = (query) =>
  new Promise((resolve) => {
    return rl.question(query, resolve);
  });

const printBoard = (board) => {
  const emptyBoard = `
   1 | 2 | 3 
  ___|___|___
   4 | 5 | 6 
  ___|___|___
   7 | 8 | 9 
     |   |   
  `;
  return board.reduce((filledBoard, player, index) => {
    const position = index + 1;
    return filledBoard.replace(position, player);
  }, emptyBoard);
};

const printInstruction = ({ board, status }) => {
  const plays = availablePlays(board);
  switch (status) {
    case "X Play":
      return `Player "X", make your move (${plays}): `;
    case "O Play":
      return `Player "O", make your move (${plays}): `;
    case "X Replay":
      return `Invalid input. Player "X", make your move (${plays}): `;
    case "O Replay":
      return `Invalid input. Player "O", make your move (${plays}): `;
    case "X Wins":
      return `Player "X" wins! Play again? (y/n): `;
    case "O Wins":
      return `Player "O" wins! Play again? (y/n): `;
    case "Tie Game":
      return `Tie Game. Play again? (y/n): `;
    default:
      break;
  }
};

const playTicTacToe = () => {
  const initialState = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    status: "X Play",
  };
  gameLoop(initialState);
};

const tryParse = (response) => {
  const int = parseInt(response, 10);
  return Number.isInteger(int) ? int : response;
};

const gameLoop = (state) => {
  prompt(`
  ${printBoard(state.board)}

  ${printInstruction(state)}`)
    .then(tryParse)
    .then((resolve) => {
      const newState = makeMove(state, resolve);
      if (newState === "Quit") {
        Promise.reject();
      }
      return gameLoop(newState);
    })
    .catch(() => {
      console.log(`
      Thanks for playing!
      `);
      rl.close();
    });
};

playTicTacToe();
