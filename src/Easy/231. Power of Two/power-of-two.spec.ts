import { isPowerOfTwoS1, isPowerOfTwoS2, isPowerOfTwoS3, isPowerOfTwoS4 } from './power-of-two';

describe('isPowerOfTwo', () => {
  it('isPowerOfTwoS1', () => {
    expect(isPowerOfTwoS1(1)).toEqual(true);
    expect(isPowerOfTwoS1(16)).toEqual(true);
    expect(isPowerOfTwoS1(218)).toEqual(false);
  });

  it('isPowerOfTwoS2', () => {
    expect(isPowerOfTwoS2(1)).toEqual(true);
    expect(isPowerOfTwoS2(16)).toEqual(true);
    expect(isPowerOfTwoS2(218)).toEqual(false);
  });

  it('isPowerOfTwoS3', () => {
    expect(isPowerOfTwoS3(1)).toEqual(true);
    expect(isPowerOfTwoS3(16)).toEqual(true);
    expect(isPowerOfTwoS3(218)).toEqual(false);
  });

  it('isPowerOfTwoS4', () => {
    expect(isPowerOfTwoS4(1)).toEqual(true);
    expect(isPowerOfTwoS4(16)).toEqual(true);
    expect(isPowerOfTwoS4(218)).toEqual(false);
  });
});
