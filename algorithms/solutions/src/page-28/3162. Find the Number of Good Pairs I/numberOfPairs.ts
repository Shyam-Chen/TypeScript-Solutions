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

  // Loop until the end of nums1 is reached.
  while (i < n) {
    // Break the loop if it's the last element of nums1 and all elements of nums2 are processed.
    if (i === n - 1 && j === m) break;

    // Check if the current element in nums1 is divisible by the product of the current element in nums2 and k.
    if (nums1[i] % (nums2[j] * k) === 0) count += 1;

    // Move to the next element in nums2.
    j += 1;

    // If the end of nums2 is reached, move to the next element in nums1 and reset j to 0.
    if (j === m) {
      i += 1;
      j = 0;
    }
  }

  return count;
};
