import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

describe('3. Longest Substring Without Repeating Characters', () => {
  test('lengthOfLongestSubstring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });
});
