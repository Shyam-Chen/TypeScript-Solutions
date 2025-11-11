import { sumOddLengthSubarrays } from './sumOddLengthSubarrays';

describe('1588. Sum of All Odd Length Subarrays', () => {
  test('sumOddLengthSubarrays', () => {
    expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toBe(58);
    expect(sumOddLengthSubarrays([1, 2])).toBe(3);
    expect(sumOddLengthSubarrays([10, 11, 12])).toBe(66);
  });
});
