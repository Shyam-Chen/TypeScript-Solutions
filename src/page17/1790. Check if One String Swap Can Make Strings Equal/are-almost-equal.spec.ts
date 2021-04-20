import { areAlmostEqual } from './are-almost-equal';

describe('1790. Check if One String Swap Can Make Strings Equal', () => {
  it('areAlmostEqual', () => {
    expect(areAlmostEqual('bank', 'kanb')).toEqual(true);
    expect(areAlmostEqual('attack', 'defend')).toEqual(false);
    expect(areAlmostEqual('kelb', 'kelb')).toEqual(true);
    expect(areAlmostEqual('abcd', 'dcba')).toEqual(false);
  });
});
