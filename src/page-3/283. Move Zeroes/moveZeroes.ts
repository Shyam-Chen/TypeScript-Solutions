type MoveZeroes = (nums: number[]) => void;

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

/**
 * Accepted
 */
export const moveZeroes2: MoveZeroes = (nums) => {
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroFoundAt] = nums[i];
      lastNonZeroFoundAt += 1;
    }
  }

  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
    nums[i] = 0;
  }
};
