import { longestNiceSubstring } from './longest-nice-substring';

describe('1763. Longest Nice Substring', () => {
  it('longestNiceSubstring', () => {
    expect(longestNiceSubstring('YazaAay')).toEqual('aAa');
    expect(longestNiceSubstring('Bb')).toEqual('Bb');
    expect(longestNiceSubstring('c')).toEqual('');
    expect(longestNiceSubstring('dDzeE')).toEqual('dD');
  });
});
