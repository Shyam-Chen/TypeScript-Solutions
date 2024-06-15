type Check = (nums: number[]) => boolean;

export const check: Check = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      count += 1;
    }
  }

  return count <= 1;
};
