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

/**
 * Accepted
 */
export const moveZeroes2: MoveZeroes = (nums) => {
  let left = 0; // Left pointer, points to the next position where a non-zero element should be placed
  let right = 0; // Right pointer, traverses the entire array

  while (right < nums.length) {
    // If the number at the right pointer is not zero
    if (nums[right] !== 0) {
      // Swap the numbers at the left and right pointers
      [nums[left], nums[right]] = [nums[right], nums[left]];

      left += 1; // Move the left pointer to the next position
    }

    right += 1; // Continue moving the right pointer to the right
  }
};
