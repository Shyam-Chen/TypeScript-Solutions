import { arraySign } from './arraySign';

describe('1822. Sign of the Product of an Array', () => {
  test('arraySign', () => {
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toBe(1);
    expect(arraySign([1, 5, 0, 2, -3])).toBe(0);
    expect(arraySign([-1, 1, -1, 1, -1])).toBe(-1);
  });
});
