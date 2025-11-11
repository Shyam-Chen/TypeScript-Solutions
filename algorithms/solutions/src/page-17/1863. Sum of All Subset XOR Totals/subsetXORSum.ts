type SubsetXORSum = (nums: number[]) => number;

/**
 * Accepted
 */
export const subsetXORSum: SubsetXORSum = (nums) => {
  const n = nums.length;

  let totalXOR = 0;

  // Iterate over all possible subsets using bit manipulation
  for (let mask = 0; mask < 1 << n; mask++) {
    let subsetXOR = 0;

    // Calculate XOR for current subset represented by `mask`
    for (let i = 0; i < n; i++) {
      // Check if i-th bit is set in mask
      if ((mask & (1 << i)) !== 0) {
        subsetXOR ^= nums[i];
      }
    }

    // Add the XOR of current subset to the total sum
    totalXOR += subsetXOR;
  }

  return totalXOR;
};

/**
 * Accepted
 */
export const subsetXORSum2: SubsetXORSum = (nums) => {
  let totalXOR = 0;

  // Helper function to perform DFS
  function dfs(index: number, currentXOR: number) {
    // Add currentXOR to totalXOR for every subset
    totalXOR += currentXOR;

    // Explore all subsets that can be formed by including nums[index]
    for (let i = index; i < nums.length; i++) {
      dfs(i + 1, currentXOR ^ nums[i]);
    }
  }

  // Start DFS from index 0 with an initial currentXOR of 0
  dfs(0, 0);

  return totalXOR;
};
