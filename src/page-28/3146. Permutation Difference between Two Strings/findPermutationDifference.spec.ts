import { findPermutationDifference } from './findPermutationDifference';

describe('3146. Permutation Difference between Two Strings', () => {
  it('findPermutationDifference', () => {
    expect(findPermutationDifference('abc', 'bac')).toBe(2);
    expect(findPermutationDifference('abcde', 'edbac')).toBe(12);
  });
});
