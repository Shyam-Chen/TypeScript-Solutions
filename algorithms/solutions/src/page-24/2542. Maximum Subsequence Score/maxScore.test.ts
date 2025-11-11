import { maxScore } from './maxScore';

describe('2542. Maximum Subsequence Score', () => {
  test('maxScore', () => {
    {
      const nums1 = [1, 3, 3, 2];
      const nums2 = [2, 1, 3, 4];
      expect(maxScore(nums1, nums2, 3)).toBe(12);
    }

    {
      const nums1 = [4, 2, 3, 1, 1];
      const nums2 = [7, 5, 10, 9, 6];
      expect(maxScore(nums1, nums2, 1)).toBe(30);
    }
  });
});
