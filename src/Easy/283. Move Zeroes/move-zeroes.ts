export const moveZeroes = (nums: number[]): number[] => (
  [...nums.filter(x => x !== 0), ...nums.filter(x => x === 0)]
);

export const moveZeroes2 = (nums: number[]): number[] => {
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

  return nums;
};
