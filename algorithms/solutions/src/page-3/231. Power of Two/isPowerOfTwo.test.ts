import { isPowerOfTwo, isPowerOfTwo2, isPowerOfTwo3 } from './isPowerOfTwo';

describe('231. Power of Two', () => {
  test('isPowerOfTwo', () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(16)).toBe(true);
    expect(isPowerOfTwo(3)).toBe(false);
  });

  test('isPowerOfTwo2', () => {
    expect(isPowerOfTwo2(1)).toBe(true);
    expect(isPowerOfTwo2(16)).toBe(true);
    expect(isPowerOfTwo2(3)).toBe(false);
  });

  test('isPowerOfTwo3', () => {
    expect(isPowerOfTwo3(1)).toBe(true);
    expect(isPowerOfTwo3(16)).toBe(true);
    expect(isPowerOfTwo3(3)).toBe(false);
  });
});
