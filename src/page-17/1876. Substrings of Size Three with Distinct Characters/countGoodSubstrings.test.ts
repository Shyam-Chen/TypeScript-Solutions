import { countGoodSubstrings } from './countGoodSubstrings';

describe('1876. Substrings of Size Three with Distinct Characters', () => {
  test('countGoodSubstrings', () => {
    expect(countGoodSubstrings('xyzzaz')).toBe(1);
    expect(countGoodSubstrings('aababcabc')).toBe(4);
  });
});
