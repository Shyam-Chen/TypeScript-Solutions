import { areAlmostEqual } from './areAlmostEqual';

describe('1790. Check if One String Swap Can Make Strings Equal', () => {
  test('areAlmostEqual', () => {
    expect(areAlmostEqual('bank', 'kanb')).toBe(true);
    expect(areAlmostEqual('attack', 'defend')).toBe(false);
    expect(areAlmostEqual('kelb', 'kelb')).toBe(true);
  });
});
