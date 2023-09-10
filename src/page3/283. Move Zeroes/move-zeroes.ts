interface MoveZeroes {
  (nums: number[]): void;
}

/**
 * Accepted
 */
export const moveZeroes: MoveZeroes = (nums) => {
  let [left, right] = [0, 0];

  while (right < nums.length) {
    if (nums[right] === 0) {
      right += 1;
    } else {
      const temp = nums[right];

      nums[right] = nums[left];
      nums[left] = temp;

      left += 1;
      right += 1;
    }
  }
};
