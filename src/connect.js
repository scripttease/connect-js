require('../src/index.js');
const { newBoard, addToken, winner, neighbourUp, neighbourDiagonalUpRight, neighbourRight, neighbourDiagonalDownRight, neighbourUpWin, neighbourRightWin, diagonalUpRightWin, diagnonalDownRight } = require('../src');

function drawBoard(boardObj) {
  const display = ['']
  const num_rows = boardObj.rows
  boardObj.board.map((col) => {
    const emptyCells = num_rows - col.length
    if(col.length < num_rows) {
      [...Array(emptyCells).keys()].map((emptyCell) => {
        col.unshift('_')
      });
    }
  });
  [...Array(num_rows).keys()].map((row_num) => {
    boardObj.board.map((col) => { 
      // console.log('col: ' + col);
      // console.log('row_num: ' + row_num);
      // console.log(col[row_num]);
      display.push(col[row_num]);
      // console.log(display);
    });
    display.push('\n');
    // console.log(display);
  });
  // console.log(display.join('|'));

  return(display.join('|'));
}

module.exports = { drawBoard };
