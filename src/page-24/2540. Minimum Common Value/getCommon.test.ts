import { getCommon } from './getCommon';

describe('2540. Minimum Common Value', () => {
  test('getCommon', () => {
    {
      const nums1 = [1, 2, 3];
      const nums2 = [2, 4];
      expect(getCommon(nums1, nums2)).toBe(2);
    }

    {
      const nums1 = [1, 2, 3, 6];
      const nums2 = [2, 3, 4, 5];
      expect(getCommon(nums1, nums2)).toBe(2);
    }
  });
});
