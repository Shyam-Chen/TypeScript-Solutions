import { hammingWeight } from './hamming-weight';

describe('191. Number of 1 Bits', () => {
  test('hammingWeight', () => {
    expect(hammingWeight(0b00000000000000000000000000001011)).toBe(3);
    expect(hammingWeight(0b00000000000000000000000010000000)).toBe(1);
    expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31);
  });
});
