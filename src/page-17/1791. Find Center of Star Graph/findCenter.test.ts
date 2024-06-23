import { findCenter } from './findCenter';

describe('1791. Find Center of Star Graph', () => {
  test('findCenter', () => {
    expect(
      findCenter([
        [1, 2],
        [2, 3],
        [4, 2],
      ]),
    ).toBe(2);

    expect(
      findCenter([
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ]),
    ).toBe(1);
  });
});
