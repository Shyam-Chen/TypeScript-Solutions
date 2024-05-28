import { reversePrefix } from './reversePrefix';

describe('2000. Reverse Prefix of Word', () => {
  it('reversePrefix', () => {
    expect(reversePrefix('abcdefd', 'd')).toBe('dcbaefd');
    expect(reversePrefix('xyxzxe', 'z')).toBe('zxyxxe');
    expect(reversePrefix('abcd', 'z')).toBe('abcd');
  });
});
