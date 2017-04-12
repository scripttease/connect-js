require('../src/index.js');

const expect = require('chai').expect;
const { newBoard, addToken, winner } = require('../src');

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
    xit('adds token to given column of given board', () => {
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
      expect(winner(boardObj)).to.equal('We have a winner!')
    });
  });
});


// const board = newBoard(7,7);
// addToken('x', 7, board);
// addToken('x', 7, board);
// addToken('x', 7, board);
// addToken('x', 7, board);
