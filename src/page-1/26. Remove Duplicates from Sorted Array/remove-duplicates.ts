type RemoveDuplicates = (nums: number[]) => number;

/**
 * Accepted
 */
export const removeDuplicates: RemoveDuplicates = (nums) => {
  const result = Array.from(new Set(nums));
  nums.length = 0;
  nums.push(...result);

  return new Set(nums).size;
};
