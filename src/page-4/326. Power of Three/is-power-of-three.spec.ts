import { isPowerOfThree, isPowerOfThree2, isPowerOfThree3 } from './is-power-of-three';

describe('326. Power of Three', () => {
  it('isPowerOfThree', () => {
    expect(isPowerOfThree(27)).toEqual(true);
    expect(isPowerOfThree(0)).toEqual(false);
    expect(isPowerOfThree(-1)).toEqual(false);
  });

  it('isPowerOfThree2', () => {
    expect(isPowerOfThree2(27)).toEqual(true);
    expect(isPowerOfThree2(0)).toEqual(false);
    expect(isPowerOfThree2(-1)).toEqual(false);
  });

  it('isPowerOfThree3', () => {
    expect(isPowerOfThree3(27)).toEqual(true);
    expect(isPowerOfThree3(0)).toEqual(false);
    expect(isPowerOfThree3(-1)).toEqual(false);
  });
});
