import { moveZeroes } from './move-zeroes';

describe('moveZeroes', () => {
  it('moveZeroes', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });
});
