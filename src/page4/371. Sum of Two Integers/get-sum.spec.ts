import { getSum, getSum2 } from './get-sum';

describe('371. Sum of Two Integers', () => {
  it('getSum', () => {
    expect(getSum(1, 2)).toEqual(3);
    expect(getSum(2, 3)).toEqual(5);
  });

  it('getSum2', () => {
    expect(getSum2(1, 2)).toEqual(3);
    expect(getSum2(2, 3)).toEqual(5);
  });
});
