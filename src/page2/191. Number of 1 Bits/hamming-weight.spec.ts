import { hammingWeight } from './hamming-weight';

describe('191. Number of 1 Bits', () => {
  it('hammingWeight', () => {
    expect(hammingWeight(parseInt('00000000000000000000000000001011', 2))).toEqual(3);
    expect(hammingWeight(parseInt('00000000000000000000000010000000', 2))).toEqual(1);
    expect(hammingWeight(parseInt('11111111111111111111111111111101', 2))).toEqual(31);
  });
});
