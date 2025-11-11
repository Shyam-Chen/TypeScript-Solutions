import { sumOfUnique, sumOfUnique2 } from './sumOfUnique';

describe('1748. Sum of Unique Elements', () => {
  test('sumOfUnique', () => {
    expect(sumOfUnique([1, 2, 3, 2])).toBe(4);
    expect(sumOfUnique([1, 1, 1, 1, 1])).toBe(0);
    expect(sumOfUnique([1, 2, 3, 4, 5])).toBe(15);
  });

  test('sumOfUnique2', () => {
    expect(sumOfUnique2([1, 2, 3, 2])).toBe(4);
    expect(sumOfUnique2([1, 1, 1, 1, 1])).toBe(0);
    expect(sumOfUnique2([1, 2, 3, 4, 5])).toBe(15);
  });
});
