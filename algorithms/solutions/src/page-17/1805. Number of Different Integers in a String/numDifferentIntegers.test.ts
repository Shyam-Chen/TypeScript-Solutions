import { numDifferentIntegers } from './numDifferentIntegers';

describe('1805. Number of Different Integers in a String', () => {
  test('numDifferentIntegers', () => {
    expect(numDifferentIntegers('a123bc34d8ef34')).toBe(3);
    expect(numDifferentIntegers('leet1234code234')).toBe(2);
    expect(numDifferentIntegers('a1b01c001')).toBe(1);
  });
});
