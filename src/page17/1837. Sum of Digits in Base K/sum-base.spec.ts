import { sumBase } from './sum-base';

describe('1837. Sum of Digits in Base K', () => {
  it('sumBase', () => {
    expect(sumBase(34, 6)).toEqual(9);
    expect(sumBase(10, 10)).toEqual(1);
  });
});
