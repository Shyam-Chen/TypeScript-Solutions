import { numDifferentIntegers } from './num-different-integers';

describe('1805. Number of Different Integers in a String', () => {
  it('numDifferentIntegers', () => {
    expect(numDifferentIntegers('a123bc34d8ef34')).toEqual(3);
    expect(numDifferentIntegers('leet1234code234')).toEqual(2);
    expect(numDifferentIntegers('a1b01c001')).toEqual(1);
  });
});
