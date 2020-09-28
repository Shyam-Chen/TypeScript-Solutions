import { getSum, getSum2 } from './sum-of-two-integers';

describe('371. Sum of Two Integers', () => {
  it('getSum', () => {
    expect(getSum(1, 2)).toEqual(3);
  });

  it('getSum2', () => {
    expect(getSum2(1, 2)).toEqual(3);
  });
});
