import { arraySign, arraySign2 } from './array-sign';

describe('1822. Sign of the Product of an Array', () => {
  it('arraySign', () => {
    expect(arraySign([-1, -2, -3, -4, 3, 2, 1])).toEqual(1);
    expect(arraySign([1, 5, 0, 2, -3])).toEqual(0);
    expect(arraySign([-1, 1, -1, 1, -1])).toEqual(-1);
  });

  it('arraySign2', () => {
    expect(arraySign2([-1, -2, -3, -4, 3, 2, 1])).toEqual(1);
    expect(arraySign2([1, 5, 0, 2, -3])).toEqual(0);
    expect(arraySign2([-1, 1, -1, 1, -1])).toEqual(-1);
  });
});
