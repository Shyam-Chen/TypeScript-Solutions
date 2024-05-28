import { hammingWeight } from './hamming-weight';

describe('191. Number of 1 Bits', () => {
  it('hammingWeight', () => {
    expect(hammingWeight(0b00000000000000000000000000001011)).toEqual(3);
    expect(hammingWeight(0b00000000000000000000000010000000)).toEqual(1);
    expect(hammingWeight(0b11111111111111111111111111111101)).toEqual(31);
  });
});
