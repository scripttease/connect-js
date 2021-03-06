const expect = require('chai').expect;
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

    it('doesnt add token if column doesnt exist', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      expect(addToken('o', 9, boardObj)).to.equal('Fail. This column does not exist')
      expect(addToken('o', -1, boardObj)).to.equal('Fail. This column does not exist')
    });

    it('doesnt add token if a player has won', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      expect(addToken('o', 3, boardObj)).to.equal('Fail. This game is over');
    });
  });

  describe('winner', () => {
    it('returns winner if board has 4 consecutive vertical tokens', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      expect(winner(boardObj)).to.equal('Player x wins!')
    });

    it('returns winner if board has 4 consecutive horizontal tokens', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 4, boardObj);
      expect(winner(boardObj)).to.equal('Player x wins!')
    });

    it('returns winner if board has 4 consecutive diagonal tokens', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('o', 2, boardObj);
      addToken('o', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('o', 3, boardObj);
      addToken('x', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('x', 4, boardObj);
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x', 'x', 'o'],
        ['o', 'x', 'x', 'o'],
        ['x', 'o', 'o', 'x'],
        [],
        [],
        [],
      ]);
      expect(winner(boardObj)).to.equal('Player x wins!')
    });

    it('returns nothing if board has no winner (vertical)', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('o', 3, boardObj);
      expect(boardObj.board).to.deep.equal([
        [],
        [],
        ['x', 'x', 'x', 'o'],
        [],
        [],
        [],
        [],
      ]);
      expect(winner(boardObj)).to.equal(undefined)
    });

    it('returns winner on complex board', () => {
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
      addToken('x', 5, boardObj);
      addToken('o', 5, boardObj);
      addToken('o', 5, boardObj);
      addToken('o', 5, boardObj);
      addToken('o', 5, boardObj);
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x'],
        ['x'],
        ['o', 'x', 'o', 'o', 'o', 'x', 'x'],
        ['x', 'o', 'o', 'o', 'o'],
        [],
        [],
      ]);
      expect(winner(boardObj)).to.equal('Player o wins!')
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
    it('returns winning token if 4 in vertical row from given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      const indexCol = 1;
      const indexCell = 0;
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x', 'x', 'x'],
        [],
        [],
        [],
        [],
        [],
      ]);
      expect(neighbourUpWin(boardObj, indexCol, indexCell)).to.equal('x');
      const indexCol2 = 1;
      const indexCell2 = 1;
      expect(neighbourUpWin(boardObj, indexCol2, indexCell2)).to.equal(false);
    });
  });

  describe('neighbourRightWin', () => {
    it('returns winning token if 4 in horizontal row from given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('o', 2, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 4, boardObj);
      const indexCol = 0;
      const indexCell = 0;
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x', 'x', 'o'],
        ['x'],
        ['x'],
        [],
        [],
        [],
      ]);
      expect(neighbourRightWin(boardObj, indexCol, indexCell)).to.equal('x');
      const indexCol2 = 1;
      const indexCell2 = 1;
      expect(neighbourRightWin(boardObj, indexCol2, indexCell2)).to.equal(false);
    });
  });

  describe('diagonalUpRightWin', () => {
    it('returns winning token if 4 in horizontal row from given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('o', 2, boardObj);
      addToken('o', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('o', 3, boardObj);
      addToken('x', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('x', 4, boardObj);
      const indexCol = 0;
      const indexCell = 0;
      expect(boardObj.board).to.deep.equal([
        ['x', 'x'],
        ['x', 'x', 'x', 'o'],
        ['o', 'x', 'x', 'o'],
        ['x', 'o', 'o', 'x'],
        [],
        [],
        [],
      ]);
      expect(diagonalUpRightWin(boardObj, indexCol, indexCell)).to.equal('x');
      const indexCol2 = 1;
      const indexCell2 = 1;
      expect(diagonalUpRightWin(boardObj, indexCol2, indexCell2)).to.equal(false);
    });
  });

  describe('diagnonalDownRight', () => {
    it('returns winning token if 4 in horizontal row from given cell', () => {
      const boardObj = newBoard(6, 7);
      addToken('o', 1, boardObj);
      addToken('o', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 1, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('x', 2, boardObj);
      addToken('o', 2, boardObj);
      addToken('o', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('x', 3, boardObj);
      addToken('o', 3, boardObj);
      addToken('x', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('o', 4, boardObj);
      addToken('x', 4, boardObj);
      const indexCol = 0;
      const indexCell = 3;
      expect(boardObj.board).to.deep.equal([
        ['o', 'o', 'x', 'x'],
        ['x', 'x', 'x', 'o'],
        ['o', 'x', 'x', 'o'],
        ['x', 'o', 'o', 'x'],
        [],
        [],
        [],
      ]);
      expect(diagnonalDownRight(boardObj, indexCol, indexCell)).to.equal('x');
      const indexCol2 = 1;
      const indexCell2 = 3;
      expect(diagnonalDownRight(boardObj, indexCol2, indexCell2)).to.equal(false);
    });
  });
});


// const board = newBoard(7,7);
// addToken('x', 7, board);
// addToken('x', 7, board);
// addToken('x', 7, board);
// addToken('x', 7, board);
