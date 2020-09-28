import { moveZeroes, moveZeroes2 } from './move-zeroes';

describe('283. Move Zeroes', () => {
  it('moveZeroes', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });

  it('moveZeroes2', () => {
    expect(moveZeroes2([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });
});
