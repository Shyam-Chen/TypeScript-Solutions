type NumberOfPairs = (nums1: number[], nums2: number[], k: number) => number;

/**
 * Accepted
 */
export const numberOfPairs: NumberOfPairs = (nums1, nums2, k) => {
  let count = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) count += 1;
    }
  }

  return count;
};

/**
 * Accepted
 */
export const numberOfPairs2: NumberOfPairs = (nums1, nums2, k) => {
  const [n, m] = [nums1.length, nums2.length];

  let [i, j] = [0, 0];
  let count = 0;

  while (i < n) {
    if (i === n - 1 && j === m) break;

    if (nums1[i] % (nums2[j] * k) === 0) count += 1;

    j += 1;

    if (j === m) {
      i += 1;
      j = 0;
    }
  }

  return count;
};
