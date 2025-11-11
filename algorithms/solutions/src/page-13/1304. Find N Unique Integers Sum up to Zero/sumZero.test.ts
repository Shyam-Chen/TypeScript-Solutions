import { sumZero } from './sumZero';

describe('1304. Find N Unique Integers Sum up to Zero', () => {
  test('sumZero', () => {
    expect(sumZero(5).sort()).toStrictEqual([-1, 1, 2, 0, -2].sort());
    expect(sumZero(3).sort()).toStrictEqual([1, 0, -1].sort());
    expect(sumZero(1).sort()).toStrictEqual([0].sort());
  });
});
