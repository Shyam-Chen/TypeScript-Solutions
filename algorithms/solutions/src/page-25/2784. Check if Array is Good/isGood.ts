type IsGood = (nums: number[]) => boolean;

/**
 * Accepted
 */
export const isGood: IsGood = (nums) => {
  // Find the maximum element in the array
  const maxElement = Math.max(...nums);

  // The expected length of the base array for the candidate n
  const expectedLength = maxElement + 1;

  // Check if the length of nums is equal to n + 1
  if (nums.length !== expectedLength) return false;

  // Create a Map to count occurrences of each element in nums
  const countMap = new Map<number, number>();

  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Check if the counts match the expected counts for base[n]
  for (let i = 1; i < maxElement; i++) {
    if (countMap.get(i) !== 1) return false;
  }

  // The maxElement should appear exactly twice
  if (countMap.get(maxElement) !== 2) return false;

  return true;
};

/**
 * Accepted
 */
export const isGood2: IsGood = (nums) => {
  // Find the maximum element in the array
  const maxElement = Math.max(...nums);

  // The expected length of the base array for the candidate n
  const expectedLength = maxElement + 1;

  // Check if the length of nums is equal to n + 1
  if (nums.length !== expectedLength) return false;

  // Sort the array
  nums.sort((a, b) => a - b);

  // Check the sorted array against the criteria
  let countMaxElement = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === maxElement) {
      countMaxElement += 1;
    } else if (nums[i] !== i + 1) {
      return false;
    }
  }

  // Check if maxElement appears exactly twice
  return countMaxElement === 2;
};
