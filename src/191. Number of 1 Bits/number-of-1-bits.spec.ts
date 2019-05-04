import { hammingWeight } from './number-of-1-bits';

describe('hammingWeight', () => {
  it('hammingWeight', () => {
    expect(hammingWeight(11)).toEqual(3);
    expect(hammingWeight(128)).toEqual(1);
  });
});
