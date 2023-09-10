import { merge } from './merge';

describe('88. Merge Sorted Array', () => {
  it('merge', () => {
    const a = [1, 2, 3, 0, 0, 0];
    const b = [2, 5, 6];

    merge(a, 3, b, 3);

    expect(a).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
