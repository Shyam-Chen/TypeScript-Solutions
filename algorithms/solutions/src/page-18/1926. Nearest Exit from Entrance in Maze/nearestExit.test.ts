import { nearestExit } from './nearestExit';

describe('1926. Nearest Exit from Entrance in Maze', () => {
  test('nearestExit', () => {
    expect(
      nearestExit(
        [
          ['+', '+', '.', '+'],
          ['.', '.', '.', '+'],
          ['+', '+', '+', '.'],
        ],
        [1, 2],
      ),
    ).toBe(1);

    expect(
      nearestExit(
        [
          ['+', '+', '+'],
          ['.', '.', '.'],
          ['+', '+', '+'],
        ],
        [1, 0],
      ),
    ).toBe(2);

    expect(nearestExit([['.', '+']], [0, 0])).toBe(-1);
  });
});
