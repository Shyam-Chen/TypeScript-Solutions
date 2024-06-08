import { gcdOfStrings } from './gcdOfStrings';

describe('1071. Greatest Common Divisor of Strings', () => {
  it('gcdOfStrings', () => {
    expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
    expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB');
    expect(gcdOfStrings('LEET', 'CODE')).toBe('');
  });
});
