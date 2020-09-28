import { isPowerOfTwo, isPowerOfTwo2, isPowerOfTwo3, isPowerOfTwo4 } from './power-of-two';

describe('231. Power of Two', () => {
  it('isPowerOfTwo', () => {
    expect(isPowerOfTwo(1)).toEqual(true);
    expect(isPowerOfTwo(16)).toEqual(true);
    expect(isPowerOfTwo(218)).toEqual(false);
  });

  it('isPowerOfTwo2', () => {
    expect(isPowerOfTwo2(1)).toEqual(true);
    expect(isPowerOfTwo2(16)).toEqual(true);
    expect(isPowerOfTwo2(218)).toEqual(false);
  });

  it('isPowerOfTwo3', () => {
    expect(isPowerOfTwo3(1)).toEqual(true);
    expect(isPowerOfTwo3(16)).toEqual(true);
    expect(isPowerOfTwo3(218)).toEqual(false);
  });

  it('isPowerOfTwo4', () => {
    expect(isPowerOfTwo4(1)).toEqual(true);
    expect(isPowerOfTwo4(16)).toEqual(true);
    expect(isPowerOfTwo4(218)).toEqual(false);
  });
});
