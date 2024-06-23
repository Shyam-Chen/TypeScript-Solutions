import { sumBase, sumBase2 } from './sumBase';

describe('1837. Sum of Digits in Base K', () => {
  test('sumBase', () => {
    expect(sumBase(34, 6)).toBe(9);
    expect(sumBase(10, 10)).toBe(1);
  });

  test('sumBase2', () => {
    expect(sumBase2(34, 6)).toBe(9);
    expect(sumBase2(10, 10)).toBe(1);
  });
});
