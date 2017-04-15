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
  // 1. get symbol at point x starting bottom left (or assign var ie cell)
  boardObj.board.map((column, indexCol) => column.map((cell, indexCell) => {
    switch(neighbourUpWin(boardObj, indexCol, indexCell)){
      case true:
        console.log('given column: ' + indexCol);
        console.log('given cell: ' + indexCell);
        console.log('given cell value: ' + cell);
        console.log('neighbourup: ' + neighbourUp(boardObj, indexCol, indexCell));
        // console.log('Player ' + cell + ' wins!');
        retval = ('Player ' + cell + ' wins!');
        break;
      default:       
        console.log('no match');
        return('no match');
    };
    console.log(retval);
    return(retval);
    // TODO: can i use break here?
  }));
  return(retval);
    // 2. check if symbol at point up(u) same
    // (if so follow pattern in new method)
    // 3. check if symbol at up diagonal right udr same
    // (new method)
    // 4. check right
    // (new method)
    // 5. check down dr (unless row is zero)
    // (new methd)
    // 6. now check next cell in column array (so up)

    // playerSymbolAtX = boardObj.board.map((col) => col.map((cell) =>  ) )
  }

  function neighbourUp(boardObj, indexCol, indexCell) {
    return boardObj.board[indexCol][indexCell + 1];
  }

  function neighbourUpWin(boardObj, indexCol, indexCell) {
    const u0 = boardObj.board[indexCol][indexCell];
    const u1 = boardObj.board[indexCol][indexCell + 1];
    const u2 = boardObj.board[indexCol][indexCell + 2];
    const u3 = boardObj.board[indexCol][indexCell + 3];
    if(u1 == u0 && u2 == u0 && u3 == u0) {
      // console.log('u0: ' + u0);
      // console.log('u1: ' + u1);
      // console.log('u2: ' + u2);
      // console.log('u3: ' + u3);
      return true;
    } else {
      // console.log('u0: ' + u0);
      // console.log('u1: ' + u1);
      // console.log('u2: ' + u2);
      // console.log('u3: ' + u3);
      return false;
    }
  }

    // return   }

  function neighbourDiagonalUpRight(boardObj, indexCol, indexCell) {
    return boardObj.board[indexCol + 1][indexCell + 1];
  }

  function neighbourRight(boardObj, indexCol, indexCell) {
    return boardObj.board[indexCol + 1][indexCell];
  }

  function neighbourDiagonalDownRight(boardObj, indexCol, indexCell) {
    // console.log('neighbour DDR: ' + boardObj.board[indexCol + 1][indexCell - 1]);
    return boardObj.board[indexCol + 1][indexCell - 1];
  }

  // returns cell n of given column
  function cell(n, column) {
    return column[n];
  }

  module.exports = { newBoard, addToken, winner, neighbourUp, neighbourDiagonalUpRight, neighbourRight, neighbourDiagonalDownRight, neighbourUpWin };

  // 1. a column is just an array.
