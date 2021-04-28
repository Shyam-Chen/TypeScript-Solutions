import { squareIsWhite } from './square-is-white';

describe('1812. Determine Color of a Chessboard Square', () => {
  it('squareIsWhite', () => {
    expect(squareIsWhite('a1')).toEqual(false);
    expect(squareIsWhite('h3')).toEqual(true);
    expect(squareIsWhite('c7')).toEqual(false);
  });
});
