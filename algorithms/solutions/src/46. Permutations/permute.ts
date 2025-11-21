type Permute = (nums: number[]) => number[][];

/**
 * Accepted
 */
export const permute: Permute = (nums) => {
  const result: number[][] = [];
  const selected: boolean[] = Array(nums.length).fill(false);

  function backtrack(currentPermutation: number[]) {
    // If the current permutation's length equals the input array's length, we have a complete permutation
    if (currentPermutation.length === nums.length) {
      result.push([...currentPermutation]);
      return;
    }

    // Traverse the available numbers
    for (let i = 0; i < nums.length; i++) {
      // Skip if the number has already been selected (pruning)
      if (selected[i]) continue;

      // Make a choice
      currentPermutation.push(nums[i]);
      selected[i] = true;

      // Recursively make the next choice
      backtrack(currentPermutation);

      // Undo the choice (backtrack)
      currentPermutation.pop();
      selected[i] = false;
    }
  }

  backtrack([]); // Start backtracking

  return result;
};
