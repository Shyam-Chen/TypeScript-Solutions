import { isPowerOfTwo, isPowerOfTwo2, isPowerOfTwo3 } from './is-power-of-two';

describe('231. Power of Two', () => {
  it('isPowerOfTwo', () => {
    expect(isPowerOfTwo(1)).toEqual(true);
    expect(isPowerOfTwo(16)).toEqual(true);
    expect(isPowerOfTwo(3)).toEqual(false);
  });

  it('isPowerOfTwo2', () => {
    expect(isPowerOfTwo2(1)).toEqual(true);
    expect(isPowerOfTwo2(16)).toEqual(true);
    expect(isPowerOfTwo2(3)).toEqual(false);
  });

  it('isPowerOfTwo3', () => {
    expect(isPowerOfTwo3(1)).toEqual(true);
    expect(isPowerOfTwo3(16)).toEqual(true);
    expect(isPowerOfTwo3(3)).toEqual(false);
  });
});
