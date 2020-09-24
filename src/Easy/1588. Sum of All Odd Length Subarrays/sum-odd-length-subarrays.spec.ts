import { sumOddLengthSubarrays } from './sum-odd-length-subarrays';

describe('1588. Sum of All Odd Length Subarrays', () => {
  it('sumOddLengthSubarrays', () => {
    expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toEqual(58);
    expect(sumOddLengthSubarrays([1, 2])).toEqual(3);
    expect(sumOddLengthSubarrays([10, 11, 12])).toEqual(66);
  });
});
