import { longestCommonPrefix } from './longestCommonPrefix';

describe('14. Longest Common Prefix', () => {
  test('longestCommonPrefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });
});
