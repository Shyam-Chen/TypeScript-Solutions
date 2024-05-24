interface removeElement {
  (nums: number[], val: number): number;
}

/**
 * Accepted
 */
export const removeElement: removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  return nums.length;
};
