import { squareIsWhite } from './square-is-white';

describe('1812. Determine Color of a Chessboard Square', () => {
  test('squareIsWhite', () => {
    expect(squareIsWhite('a1')).toBe(false);
    expect(squareIsWhite('h3')).toBe(true);
    expect(squareIsWhite('c7')).toBe(false);
  });
});
