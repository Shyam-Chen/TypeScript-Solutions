type Rob = (nums: number[]) => number;

/**
 * Accepted
 */
export const rob: Rob = (nums) => {
  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let prev2 = 0; // This represents dp[i - 2]
  let prev1 = nums[0]; // This represents dp[i - 1]

  for (let i = 1; i < n; i++) {
    const current = Math.max(nums[i] + prev2, prev1);
    prev2 = prev1;
    prev1 = current;
  }

  return prev1; // prev1 now represents the max amount that can be robbed up to the last house
};
