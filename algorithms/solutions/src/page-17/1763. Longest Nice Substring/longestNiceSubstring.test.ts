import { longestNiceSubstring } from './longestNiceSubstring';

describe('1763. Longest Nice Substring', () => {
  test('longestNiceSubstring', () => {
    expect(longestNiceSubstring('YazaAay')).toBe('aAa');
    expect(longestNiceSubstring('Bb')).toBe('Bb');
    expect(longestNiceSubstring('c')).toBe('');
  });
});
