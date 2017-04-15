require('../src/index.js');

const expect = require('chai').expect;
const { newBoard, addToken, winner, neighbourUp, neighbourDiagonalUpRight, neighbourRight, neighbourDiagonalDownRight, neighbourUpWin, } = require('../src');

describe('index.js', () => {

  describe('newBoard', () => {
    it('creates a nested array', () => {
      const game = newBoard(6, 7);
      expect(game.board).to.deep.equal([
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ]);
    });
  });

  describe('addToken', () => {
    it('adds token to given column of given board', () => {
      const boardObj = newBoard(6, 7);
      // const board = game.board;
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
    });

    it('doesnt add token when column is full', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('o', 3, boardObj);
      addToken('o', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      expect(addToken('x', 3, boardObj)).to.equal('Fail. This column is full');
    });

    xit('doesnt add token if a player has won', () => {

    });
  });

  describe('winner', () => {
    it('returns winner if board has 4 consecutive tokens', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      expect(winner(boardObj)).to.equal('Player x wins!')
    });
  });

  describe('neighbourUp', () => {
    it('returns vertical neighbour of given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 3, boardObj);
      const indexCol = 0;
      const indexCell = 0;
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x'],
        ['x'],
        [],
        [],
        [],
        [],
      ]);
      expect(neighbourUp(boardObj, indexCol, indexCell)).to.equal('x');
      const indexCol2 = 2;
      const indexCell2 = 0;
      expect(neighbourUp(boardObj, indexCol2, indexCell2)).to.equal(undefined);
    });
  });

  describe('neighbourDiagonalUpRight', () => {
    it('returns up right diagonal neighbour of given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 3, boardObj);
      const indexCol = 0;
      const indexCell = 0;
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x'],
        ['x'],
        [],
        [],
        [],
        [],
      ]);
      expect(neighbourDiagonalUpRight(boardObj, indexCol, indexCell)).to.equal('x');
      const indexCol2 = 1;
      const indexCell2 = 0;
      expect(neighbourDiagonalUpRight(boardObj, indexCol2, indexCell2)).to.equal(undefined);
    });
  });

  describe('neighbourRight', () => {
    it('returns right neighbour of given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 3, boardObj);
      const indexCol = 0;
      const indexCell = 0;
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x'],
        ['x'],
        [],
        [],
        [],
        [],
      ]);
      expect(neighbourRight(boardObj, indexCol, indexCell)).to.equal('x');

      const indexCol2 = 1;
      const indexCell2 = 1;
      expect(neighbourRight(boardObj, indexCol2, indexCell2)).to.equal(undefined);
    });
  });

  describe('neighbourDiagonalDownRight', () => {
    it('returns diagonal down right neighbour of given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 3, boardObj);
      addToken('o', 4, boardObj);
      addToken('x', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('x', 4, boardObj);
      addToken('x', 4, boardObj);
      const indexCol = 0;
      const indexCell = 0;
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x'],
        ['x'],
        ['o', 'x', 'o', 'o', 'o', 'x', 'x'],
        [],
        [],
        [],
      ]);
      expect(neighbourDiagonalDownRight(boardObj, indexCol, indexCell)).to.equal(undefined);

      const indexCol2 = 1;
      const indexCell2 = 1;
      expect(neighbourDiagonalDownRight(boardObj, indexCol2, indexCell2)).to.equal('x');

      const indexCol3 = 2;
      const indexCell3 = 0;
      // console.log('given cell: ' + boardObj.board[indexCol3][indexCell3]);
      expect(neighbourDiagonalDownRight(boardObj, indexCol3, indexCell3)).to.equal(undefined);
    });
  });

  describe('neighbourUpWin', () => {
    it('returns true if 4 in vertical row from given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 3, boardObj);
      const indexCol = 1;
      const indexCell = 0;
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x', 'x', 'x'],
        ['x'],
        [],
        [],
        [],
        [],
      ]);
      expect(neighbourUpWin(boardObj, indexCol, indexCell)).to.equal(true);
      const indexCol2 = 1;
      const indexCell2 = 1;
      expect(neighbourUpWin(boardObj, indexCol2, indexCell2)).to.equal(false);
    });
  });
});


// const board = newBoard(7,7);
// addToken('x', 7, board);
// addToken('x', 7, board);
// addToken('x', 7, board);
// addToken('x', 7, board);
