import { isPowerOfThree } from './power-of-three';

describe('326. Power of Three', () => {
  it('isPowerOfThree', () => {
    expect(isPowerOfThree(27)).toEqual(true);
    expect(isPowerOfThree(0)).toEqual(false);
    expect(isPowerOfThree(9)).toEqual(true);
    expect(isPowerOfThree(45)).toEqual(false);
  });
});
