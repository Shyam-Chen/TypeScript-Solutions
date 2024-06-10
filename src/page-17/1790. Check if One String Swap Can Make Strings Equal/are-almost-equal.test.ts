import { areAlmostEqual } from './are-almost-equal';

describe('1790. Check if One String Swap Can Make Strings Equal', () => {
  test('areAlmostEqual', () => {
    expect(areAlmostEqual('bank', 'kanb')).toBe(true);
    expect(areAlmostEqual('attack', 'defend')).toBe(false);
    expect(areAlmostEqual('kelb', 'kelb')).toBe(true);
    expect(areAlmostEqual('abcd', 'dcba')).toBe(false);
  });
});
