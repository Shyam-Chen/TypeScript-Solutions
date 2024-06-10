import { duplicateNumbersXOR } from './duplicateNumbersXOR';

describe('3158. Find the XOR of Numbers Which Appear Twice', () => {
  test('duplicateNumbersXOR', () => {
    expect(duplicateNumbersXOR([1, 2, 1, 3])).toBe(1);
    expect(duplicateNumbersXOR([1, 2, 3])).toBe(0);
    expect(duplicateNumbersXOR([1, 2, 2, 1])).toBe(3);
  });
});
