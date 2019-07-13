import { hammingWeight } from './number-of-1-bits';

describe('191. Number of 1 Bits', () => {
  it('hammingWeight', () => {
    expect(hammingWeight(11)).toEqual(3);
    expect(hammingWeight(128)).toEqual(1);
  });
});
