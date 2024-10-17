type MoveZeroes = (nums: number[]) => void;

/**
 * Accepted
 */
export const moveZeroes: MoveZeroes = (nums) => {
  let nonZeroIndex = 0; // This will track the index where the next non-zero number should go

  // Traverse the array with the current pointer
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is not 0, swap it with the element at nonZeroIndex
      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
      nonZeroIndex += 1; // Move the non-zero pointer to the next position
    }
  }
};
