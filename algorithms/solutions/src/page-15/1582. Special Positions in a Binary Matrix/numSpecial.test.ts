import { numSpecial } from './numSpecial';

describe('1582. Special Positions in a Binary Matrix', () => {
  test('numSpecial', () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ]),
    ).toBe(1);

    expect(
      numSpecial([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(3);
  });
});
