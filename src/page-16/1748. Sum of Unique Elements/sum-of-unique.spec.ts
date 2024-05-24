import { sumOfUnique, sumOfUnique2 } from './sum-of-unique';

describe('1748. Sum of Unique Elements', () => {
  it('sumOfUnique', () => {
    expect(sumOfUnique([1, 2, 3, 2])).toEqual(4);
    expect(sumOfUnique([1, 1, 1, 1, 1])).toEqual(0);
    expect(sumOfUnique([1, 2, 3, 4, 5])).toEqual(15);
  });

  it('sumOfUnique2', () => {
    expect(sumOfUnique2([1, 2, 3, 2])).toEqual(4);
    expect(sumOfUnique2([1, 1, 1, 1, 1])).toEqual(0);
    expect(sumOfUnique2([1, 2, 3, 4, 5])).toEqual(15);
  });
});
