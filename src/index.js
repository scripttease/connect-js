//this is the bit that holds the state

function newBoard(x, y) {
  // here we define a column as [] and we can push to it later
  // const column = [] // will eventually be a max of x high
  // const cols = Array.from(Array(y)).fill(1);

  // below doesnt work because it fills array(y) with 8 pointers to column so if you change it (column) in one place later you will change them all, your datastructure is set now.
  // const board = Array(y).fill(column);

  //this works
  // const board = Array(y).fill(null).map(() => []);
  // return board;

  const connect = {
    board: Array(y).fill(null).map(() => []),
    rows: x
  };
  return connect;
  // TODO: draw newBoard
}

function addToken(player, column, boardObj) {
  const board = boardObj.board
  if (board[column-1].length > 6) {
    return 'Fail. This column is full'
  } else {
    board[column-1].push(player);
    // I'm mutating board with push so I dont need to re-return it
    // return board;
  }
}

function winner(boardObj) {
}
// returns cell n of given column
function cell(n, column) {
  return column[n];
}

module.exports = { newBoard, addToken, winner };

// 1. a column is just an array.
