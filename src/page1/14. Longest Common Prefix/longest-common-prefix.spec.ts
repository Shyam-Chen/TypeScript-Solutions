import { longestCommonPrefix } from './longest-common-prefix';

describe('14. Longest Common Prefix', () => {
  it('longestCommonPrefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });
});
