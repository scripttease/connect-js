//this is the bit that holds the state
function newBoard(x, y) {

  const connect = {
    board: Array(y).fill(null).map(() => []),
    rows: x,
    columns: y
  };
  return connect;
}

function addToken(player, column, boardObj) {
  const board = boardObj.board
  if (winner(boardObj) != undefined) {
    return 'Fail. This game is over';
  }  else if (column > boardObj.columns -1) {
    return 'Fail. This column does not exist';
  } else if (column < 1) {
    return 'Fail. This column does not exist';
  } else if (board[column-1].length > boardObj.rows) {
    return 'Fail. This column is full';
  } else {
    board[column-1].push(player);
  }
}

function winner(boardObj) {
  var retval
  boardObj.board.map((column, indexCol) => column.map((cell, indexCell) => {
    // TODO: Try extracting the switch so I can lose the var
    switch(cell){
      case neighbourUpWin(boardObj, indexCol, indexCell):
        retval = ('Player ' + cell + ' wins!');
        break;
      case neighbourRightWin(boardObj, indexCol, indexCell):
        retval = ('Player ' + cell + ' wins!');
        break;
      case diagonalUpRightWin(boardObj, indexCol, indexCell):
        retval = ('Player ' + cell + ' wins!');
        break;
      default:       
        break
    };
    return(retval);
  }));
  return(retval);
}

// unused?
function neighbourUp(boardObj, indexCol, indexCell) {
  return boardObj.board[indexCol][indexCell + 1];
}

function neighbourUpWin(boardObj, indexCol, indexCell) {
  const u0 = boardObj.board[indexCol][indexCell];
  const u1 = boardObj.board[indexCol][indexCell + 1];
  const u2 = boardObj.board[indexCol][indexCell + 2];
  const u3 = boardObj.board[indexCol][indexCell + 3];
  if(u1 == u0 && u2 == u0 && u3 == u0) {
    return u0;
  } else {
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
      return u0;
    } else {
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
      return u0;
    } else {
      return false;
    }
  }
}

function diagnonalDownRight(boardObj, indexCol, indexCell) {
  if(indexCol + 3 > boardObj.columns - 1){
    return(false);
  } else {
    const u0 = boardObj.board[indexCol][indexCell];
    const u1 = boardObj.board[indexCol + 1 ][indexCell - 1];
    const u2 = boardObj.board[indexCol + 2 ][indexCell - 2];
    const u3 = boardObj.board[indexCol + 3 ][indexCell - 3];
    if(u1 == u0 && u2 == u0 && u3 == u0) {
      return u0;
    } else {
      return false;
    }
  }
}

// unused?
function neighbourDiagonalUpRight(boardObj, indexCol, indexCell) {
  return boardObj.board[indexCol + 1][indexCell + 1];
}

// unused?
function neighbourRight(boardObj, indexCol, indexCell) {
  return boardObj.board[indexCol + 1][indexCell];
}

// unused?
function neighbourDiagonalDownRight(boardObj, indexCol, indexCell) {
  return boardObj.board[indexCol + 1][indexCell - 1];
}

// unused?
// returns cell n of given column
function cell(n, column) {
  return column[n];
}

module.exports = { newBoard, addToken, winner, neighbourUp, neighbourDiagonalUpRight, neighbourRight, neighbourDiagonalDownRight, neighbourUpWin, neighbourRightWin, diagonalUpRightWin, diagnonalDownRight };
