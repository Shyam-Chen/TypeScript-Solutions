import { longestSubarray } from './longestSubarray';

describe("1493. Longest Subarray of 1's After Deleting One Element", () => {
  test('longestSubarray', () => {
    expect(longestSubarray([1, 1, 0, 1])).toBe(3);
    expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
    expect(longestSubarray([1, 1, 1])).toBe(2);
  });
});
