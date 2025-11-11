type SumOddLengthSubarrays = (arr: number[]) => number;

/**
 * Accepted
 */
export const sumOddLengthSubarrays: SumOddLengthSubarrays = (arr) => {
  const n = arr.length;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    // Number of subarrays that include arr[i]
    const leftCount = i + 1;
    const rightCount = n - i;
    const totalSubarrays = leftCount * rightCount;

    // Odd length subarrays are those where length is 1, 3, 5, ..., up to min(leftCount, rightCount)
    const oddSubarraysCount = Math.floor(totalSubarrays / 2) + (totalSubarrays % 2);

    // Sum of elements in odd length subarrays that include arr[i]
    sum += oddSubarraysCount * arr[i];
  }

  return sum;
};
