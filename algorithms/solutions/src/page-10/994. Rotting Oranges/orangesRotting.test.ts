import { orangesRotting } from './orangesRotting';

describe('994. Rotting Oranges', () => {
  test('orangesRotting', () => {
    expect(
      orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ]),
    ).toBe(4);

    expect(
      orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ]),
    ).toBe(-1);

    expect(orangesRotting([[0, 2]])).toBe(0);
  });
});
