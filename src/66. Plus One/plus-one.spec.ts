import { plusOneS1, plusOneS2 } from './plus-one';

describe('plusOne', () => {
  it('plusOneS1', () => {
    expect(plusOneS1([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOneS1([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);

    expect(plusOneS1([1, 9])).toEqual([2, 0]);
    expect(plusOneS1([9, 9])).toEqual([1, 0, 0]);
  });

  it('plusOneS2', () => {
    expect(plusOneS2([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOneS2([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);

    expect(plusOneS2([1, 9])).toEqual([2, 0]);
    expect(plusOneS2([9, 9])).toEqual([1, 0, 0]);
  });
});
