import { merge, merge2 } from './merge-sorted-array';

describe('88. Merge Sorted Array', () => {
  it('merge', () => {
    expect(
      merge(
        [1, 2, 3, 0, 0, 0], 3,
        [2, 5, 6], 3,
      ),
    ).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('merge2', () => {
    expect(
      merge2(
        [1, 2, 3, 0, 0, 0], 3,
        [2, 5, 6], 3,
      ),
    ).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
