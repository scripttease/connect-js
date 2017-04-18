const expect = require('chai').expect;

require('../src/index.js');
const { newBoard, addToken, winner, neighbourUp, neighbourDiagonalUpRight, neighbourRight, neighbourDiagonalDownRight, neighbourUpWin, neighbourRightWin, diagonalUpRightWin, diagnonalDownRight } = require('../src/index');

require('../src/connect.js');
const { drawBoard } = require('../src/connect');

describe('connect.js', () => {

  describe('drawBoard', () => {
    it('draws a new board in stdout', () => {
      const boardObj = newBoard(6, 7);
      expect(drawBoard(boardObj)).to.deep.equal(
        '|_|_|_|_|_|_|_|\n|_|_|_|_|_|_|_|\n|_|_|_|_|_|_|_|\n|_|_|_|_|_|_|_|\n|_|_|_|_|_|_|_|\n|_|_|_|_|_|_|_|\n'
      );
    });
    
    it('draws current board in stdout', () => { 
      const boardObj = newBoard(6, 7);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      expect(boardObj.board).to.deep.equal([
        [],
        [],
        ['x', 'x', 'x'],
        [],
        [],
        [],
        [],
      ]);

      expect(drawBoard(boardObj)).to.deep.equal(
        '|_|_|_|_|_|_|_|\n|_|_|_|_|_|_|_|\n|_|_|_|_|_|_|_|\n|_|_|x|_|_|_|_|\n|_|_|x|_|_|_|_|\n|_|_|x|_|_|_|_|\n'
      );
    });
    

  });
  
});
