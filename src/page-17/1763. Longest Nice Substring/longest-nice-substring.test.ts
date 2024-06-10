import { longestNiceSubstring } from './longest-nice-substring';

describe('1763. Longest Nice Substring', () => {
  test('longestNiceSubstring', () => {
    expect(longestNiceSubstring('YazaAay')).toBe('aAa');
    expect(longestNiceSubstring('Bb')).toBe('Bb');
    expect(longestNiceSubstring('c')).toBe('');
    expect(longestNiceSubstring('dDzeE')).toBe('dD');
  });
});
