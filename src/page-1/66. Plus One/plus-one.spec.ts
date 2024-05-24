import { plusOne, plusOne2 } from './plus-one';

describe('66. Plus One', () => {
  it('plusOne', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    expect(plusOne([9])).toEqual([1, 0]);
  });

  it('plusOne2', () => {
    expect(plusOne2([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne2([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    expect(plusOne2([9])).toEqual([1, 0]);
  });
});
