const readline = require("readline");
const cli = require("../src/cli");
const connect = require("../src/index");

//
// Build initial game state
//

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const boardObj = connect.newBoard();
let players = ["x", "o"];

//
// Game functions
//

function playOneTurn() {
  console.log(cli.drawBoard(boardObj));

  rl.question("\nPick a column! ", (answer) => {

    // Ensure it is a number the user has given
    const colNum = parseInt(answer);
    if (isNaN(colNum)) {
      console.log("Hey, that's not a number!\n");
      return playOneTurn();
    }

    // Update the board, and check for errors
    const error = connect.addToken(players[0], colNum, boardObj);
    if (error) {
      console.log(error + "\n");
      return playOneTurn();
    }


    const nextTurnPlayers = [players[1], players[0]];
    players = nextTurnPlayers;
    const winner = connect.winner(boardObj);
    if (winner) {
      console.log(`${winner} wins!`);
      console.log(cli.drawBoard(boardObj));
      finishGame();
    } else {
      playOneTurn();
    }
  });
}

function finishGame() {
  console.log("Thanks for playing!");
  rl.close();
}

//
// Start the game
//

console.log("Welcome to Connect JS!");
playOneTurn();
