import { numSpecial } from './num-special';

describe('1582. Special Positions in a Binary Matrix', () => {
  it('numSpecial', () => {
    expect(
      numSpecial([
        [1, 0, 0],
        [0, 0, 1],
        [1, 0, 0],
      ]),
    ).toEqual(1);

    expect(
      numSpecial([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toEqual(3);

    expect(
      numSpecial([
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
      ]),
    ).toEqual(2);

    expect(
      numSpecial([
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
      ]),
    ).toEqual(3);
  });
});
