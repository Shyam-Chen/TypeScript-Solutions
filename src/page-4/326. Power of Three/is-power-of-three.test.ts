import { isPowerOfThree, isPowerOfThree2, isPowerOfThree3 } from './is-power-of-three';

describe('326. Power of Three', () => {
  test('isPowerOfThree', () => {
    expect(isPowerOfThree(27)).toBe(true);
    expect(isPowerOfThree(0)).toBe(false);
    expect(isPowerOfThree(-1)).toBe(false);
  });

  test('isPowerOfThree2', () => {
    expect(isPowerOfThree2(27)).toBe(true);
    expect(isPowerOfThree2(0)).toBe(false);
    expect(isPowerOfThree2(-1)).toBe(false);
  });

  test('isPowerOfThree3', () => {
    expect(isPowerOfThree3(27)).toBe(true);
    expect(isPowerOfThree3(0)).toBe(false);
    expect(isPowerOfThree3(-1)).toBe(false);
  });
});
