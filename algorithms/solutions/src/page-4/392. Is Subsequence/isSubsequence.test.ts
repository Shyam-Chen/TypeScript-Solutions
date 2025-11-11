import { isSubsequence } from './isSubsequence';

describe('392. Is Subsequence', () => {
  test('isSubsequence', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
  });
});
