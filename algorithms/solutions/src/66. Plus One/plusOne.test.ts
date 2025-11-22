import { plusOne, plusOne2 } from './plusOne';

describe('66. Plus One', () => {
  test('plusOne', () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
    expect(plusOne([9])).toStrictEqual([1, 0]);
  });

  test('plusOne2', () => {
    expect(plusOne2([1, 2, 3])).toStrictEqual([1, 2, 4]);
    expect(plusOne2([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
    expect(plusOne2([9])).toStrictEqual([1, 0]);
  });
});
