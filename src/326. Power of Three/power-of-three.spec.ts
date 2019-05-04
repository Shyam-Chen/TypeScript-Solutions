import { isPowerOfThree } from './power-of-three';

describe('isPowerOfThree', () => {
  it('isPowerOfThree', () => {
    expect(isPowerOfThree(27)).toEqual(true);
    expect(isPowerOfThree(0)).toEqual(false);
    expect(isPowerOfThree(9)).toEqual(true);
    expect(isPowerOfThree(45)).toEqual(false);
  });
});
