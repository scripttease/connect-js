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
    rows: x,
    columns: y
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

  // 1. get symbol at point x starting bottom left (or assign var ie cell)
  // 2. check if symbol at point up(u) same
  // (if so follow pattern in new method)
  // 3. check if symbol at up diagonal right udr same
  // (new method)
  // 4. check right
  // (new method)
  // 5. check down dr (unless row is zero)
  // (new methd)
  // 6. now check next cell in column array (so up)
function winner(boardObj) {
  var retval
  boardObj.board.map((column, indexCol) => column.map((cell, indexCell) => {
    // TODO: Try extracting the switch so I can lose the var
    switch(cell){
      case neighbourUpWin(boardObj, indexCol, indexCell):
        // case true:
        console.log('given column: ' + indexCol);
        console.log('given cell: ' + indexCell);
        console.log('given cell value: ' + cell);
        console.log('neighbourup: ' + neighbourUp(boardObj, indexCol, indexCell));
        retval = ('Player ' + cell + ' wins!');
        console.log('retval1 = ' +retval);
        break;
      case neighbourRightWin(boardObj, indexCol, indexCell):
        // case true:
        console.log('given column: ' + indexCol);
        console.log('given cell: ' + indexCell);
        console.log('given cell value: ' + cell);
        console.log('neighbour right: ' + neighbourRight(boardObj, indexCol, indexCell));
        retval = ('Player ' + cell + ' wins!');
        console.log('retval1 = ' +retval);
        break;
      case diagonalUpRightWin(boardObj, indexCol, indexCell):
        // case true:
        console.log('given column: ' + indexCol);
        console.log('given cell: ' + indexCell);
        console.log('given cell value: ' + cell);
        retval = ('Player ' + cell + ' wins!');
        console.log('retval1 = ' +retval);
        break;
      default:       
        console.log('no match');
        break
    };
    console.log('retval2 = ' +retval);
    return(retval);
  }));
  console.log('retval3 = ' +retval);
  return(retval);
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
    console.log('u0: ' + u0);
    console.log('u1: ' + u1);
    console.log('u2: ' + u2);
    console.log('u3: ' + u3);
    return u0;
  } else {
    // console.log('u0: ' + u0);
    // console.log('u1: ' + u1);
    // console.log('u2: ' + u2);
    // console.log('u3: ' + u3);
    console.log('up from cell: ' + indexCol + ',' + indexCell + ' value: ' + u0 + ' is: ' + u1 + u2 + u3);
    return false;
  }
}

// TODO: get rid of nested if
function neighbourRightWin(boardObj, indexCol, indexCell) {
  if(indexCol + 3 > boardObj.columns - 1){
    return(false);
  } else {
    const u0 = boardObj.board[indexCol][indexCell];
    const u1 = boardObj.board[indexCol + 1 ][indexCell];
    const u2 = boardObj.board[indexCol + 2 ][indexCell];
    const u3 = boardObj.board[indexCol + 3 ][indexCell];
    if(u1 == u0 && u2 == u0 && u3 == u0) {
      console.log('u0: ' + u0);
      console.log('u1: ' + u1);
      console.log('u2: ' + u2);
      console.log('u3: ' + u3);
      return u0;
    } else {
      // console.log('u0: ' + u0);
      // console.log('u1: ' + u1);
      // console.log('u2: ' + u2);
      // console.log('u3: ' + u3);
      return false;
    }
  }
}

function diagonalUpRightWin(boardObj, indexCol, indexCell) {
  if(indexCol + 3 > boardObj.columns - 1){
    return(false);
  } else {
    const u0 = boardObj.board[indexCol][indexCell];
    const u1 = boardObj.board[indexCol + 1 ][indexCell + 1];
    const u2 = boardObj.board[indexCol + 2 ][indexCell + 2];
    const u3 = boardObj.board[indexCol + 3 ][indexCell + 3];
    if(u1 == u0 && u2 == u0 && u3 == u0) {
      console.log('u0: ' + u0);
      console.log('u1: ' + u1);
      console.log('u2: ' + u2);
      console.log('u3: ' + u3);
      return u0;
    } else {
      return false;
    }
  }
}

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

module.exports = { newBoard, addToken, winner, neighbourUp, neighbourDiagonalUpRight, neighbourRight, neighbourDiagonalDownRight, neighbourUpWin, neighbourRightWin, diagonalUpRightWin };
