require('../src/index.js');

const expect = require('chai').expect;
const { newBoard, addToken } = require('../src');

describe('index.js', () => {

  describe('newBoard', () => {
    it('creates a nested array', () => {
      const board = newBoard(6, 7);
      expect(board).to.deep.equal([
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
      const board = newBoard(6, 7);
      addToken('x', 3, board);
      addToken('x', 3, board);
      addToken('x', 3, board);
      expect(board).to.deep.equal([
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
      const board = newBoard(6, 7);
      addToken('x', 3, board);
      addToken('x', 3, board);
      addToken('x', 3, board);
      addToken('o', 3, board);
      addToken('o', 3, board);
      addToken('o', 3, board);
      addToken('x', 3, board);
      expect(addToken('x', 3, board)).to.equal('Fail. This column is full');
    });
  });
});


// const board = newBoard(7,7);
// addToken('x', 7, board);
// addToken('x', 7, board);
// addToken('x', 7, board);
// addToken('x', 7, board);
