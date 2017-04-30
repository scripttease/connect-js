function range(n) {
  return [...Array(n).keys()];
}

function drawBoard(boardObj) {
  const numRows = boardObj.rows
  const newBoard = boardObj.board.map((col) => {
    const emptyCells = numRows - col.length
    // console.log('col.length: ' + col.length);
    // console.log('numRows: ' + numRows);
    // console.log('emptycells: ' + emptyCells);
    const newCol = [...col];
    if (col.length < numRows) {
      range(emptyCells).map((emptyCell) => {
        newCol.unshift('_')
      });
    }
    return newCol;
  });

  const display = [''];
  range(numRows).forEach((row_num) => {
    newBoard.forEach((col) => {
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
  return display.join('|');
}

module.exports = { drawBoard };
