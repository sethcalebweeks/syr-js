// Read from the console
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", () => process.exit(0));

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
// const write = (message) => new Promise((resolve) => rl.write(message, resolve));

// Helper functions
const cond = (...conditions) => {
  const firstTrue = conditions.find(([predicate, _]) => predicate);
  return firstTrue?.[1];
};

// Determining who won the game
const emptyBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const won = (positions) =>
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ].some((set) => set.every((val) => positions.includes(val)));

const whoWon = ({ X, O }) =>
  cond([won(X), "X"], [won(O), "O"], [O.length + X.length === 9, "Tie"]);

// Deriving game state from board
const initialAccumulator = {
  X: [],
  O: [],
  availableMoves: emptyBoard,
};

const deriveState = (board) =>
  board.reduce(({ X: accX, O: accO }, position, index) => {
    const X = [accX, position === "X" ? index + 1 : []].flat();
    const O = [accO, position === "O" ? index + 1 : []].flat();
    const winner = whoWon({ X, O });
    return {
      X,
      O,
      gameOver: !!winner,
      winner,
      whoseTurn: X.length <= O.length ? "X" : "O",
      availableMoves: board.filter(
        (player) => !(player === "X" || player === "O")
      ),
    };
  }, initialAccumulator);

// Formatting for IO
const printBoard = (board, instruction) => {
  const emptyBoard = `
   1 | 2 | 3 
  ___|___|___
   4 | 5 | 6 
  ___|___|___
   7 | 8 | 9 
     |   |   

  ${instruction}`;
  return board.reduce(
    (filledBoard, player, index) => filledBoard.replace(index + 1, player),
    emptyBoard
  );
};

const getInstruction = ({ gameOver, winner, whoseTurn, availableMoves }) => {
  if (gameOver) {
    return winner === "Tie"
      ? "Tie game. Play again? (y/n): "
      : `Player "${winner}" wins! Play again? (y/n): `;
  } else {
    const moveOptions =
      availableMoves.length === 9 ? "1-9" : availableMoves.join(", ");
    return `Player "${whoseTurn}", make your move (${moveOptions}): `;
  }
};

// Game loop
const playTicTacToe = () => {
  gameLoop(emptyBoard);
};

const gameLoop = (board) => {
  const derivedState = deriveState(board);
  const instruction = getInstruction(derivedState);
  prompt(printBoard(board, instruction))
    .then(validateResponse(derivedState))
    .then(makeMove(board, derivedState))
    .catch(errorHandling(board));
};

const validateResponse =
  ({ gameOver, availableMoves }) =>
  (response) => {
    if (gameOver) {
      return !(response === "y" || response === "n")
        ? Promise.reject("Invalid input.")
        : response;
    } else {
      const int = parseInt(response, 10);
      return !Number.isInteger(int)
        ? Promise.reject("Invalid input.")
        : int < 1 || int > 9
        ? Promise.reject("Invalid input.")
        : !availableMoves.includes(int)
        ? Promise.reject("That position is already taken.")
        : response;
    }
  };

const makeMove =
  (board, { whoseTurn }) =>
  (response) => {
    switch (response) {
      case "y":
        gameLoop(emptyBoard);
        break;
      case "n":
        console.log(
          "\x1b[32m",
          `
    Thanks for playing!`
        );
        rl.close();
        break;
      default:
        gameLoop([
          ...board.slice(0, response - 1),
          whoseTurn,
          ...board.slice(response),
        ]);
        break;
    }
  };

const errorHandling = (board) => (error) => {
  console.error(
    "\x1b[31m",
    `
    ${error}
    `,
    "\x1b[0m"
  );
  gameLoop(board);
};

playTicTacToe();
