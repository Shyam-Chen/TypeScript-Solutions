type getCommon = (nums1: number[], nums2: number[]) => number;

/**
 * Accepted
 */
export const getCommon: getCommon = (nums1, nums2) => {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    if (nums1[pointer1] === nums2[pointer2]) {
      return nums1[pointer1];
    }

    if (nums1[pointer1] < nums2[pointer2]) {
      pointer1 += 1;
    } else {
      pointer2 += 1;
    }
  }

  return -1;
};
