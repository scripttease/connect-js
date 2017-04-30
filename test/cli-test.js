const expect = require('chai').expect;

const deepFreeze = require('deep-freeze');
const {
  newBoard,
  addToken,
  winner,
  neighbourUp,
  neighbourDiagonalUpRight,
  neighbourRight,
  neighbourDiagonalDownRight,
  neighbourUpWin,
  neighbourRightWin,
  diagonalUpRightWin,
  diagnonalDownRight,
} = require('../src/index');
const { drawBoard } = require('../src/cli');

describe('connect.js', () => {
  describe('drawBoard', () => {
    it('draws a new board to a string, and returns it', () => {
      const boardObj = newBoard(6, 7);
      // Ensure it does not mutate the columns
      deepFreeze(boardObj);
      expect(drawBoard(boardObj)).to.deep.equal(
        `|_|_|_|_|_|_|_|
|_|_|_|_|_|_|_|
|_|_|_|_|_|_|_|
|_|_|_|_|_|_|_|
|_|_|_|_|_|_|_|
|_|_|_|_|_|_|_|
`
      );
    });

    it('draws a current board to a string, and returns it', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      deepFreeze(boardObj);
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
        `|_|_|_|_|_|_|_|
|_|_|_|_|_|_|_|
|_|_|_|_|_|_|_|
|_|_|x|_|_|_|_|
|_|_|x|_|_|_|_|
|_|_|x|_|_|_|_|
`
      );
    });
  });
});
