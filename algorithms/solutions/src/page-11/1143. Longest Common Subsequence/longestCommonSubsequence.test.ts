import { longestCommonSubsequence } from './longestCommonSubsequence';

describe('1143. Longest Common Subsequence', () => {
  test('longestCommonSubsequence', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });
});
