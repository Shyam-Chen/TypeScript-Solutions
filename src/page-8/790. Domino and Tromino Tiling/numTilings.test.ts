import { numTilings } from './numTilings';

describe('790. Domino and Tromino Tiling', () => {
  test('numTilings', () => {
    expect(numTilings(3)).toBe(5);
    expect(numTilings(1)).toBe(1);
  });
});
