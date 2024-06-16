import { longestPalindrome } from './longestPalindrome';

describe('5. Longest Palindromic Substring', () => {
  test('longestPalindrome', () => {
    expect(longestPalindrome('babad')).toBe('aba');
    expect(longestPalindrome('cbbd')).toBe('bb');
  });
});
