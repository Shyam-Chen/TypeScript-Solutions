type MaxAscendingSum = (nums: number[]) => number;

export const maxAscendingSum: MaxAscendingSum = (nums) => {
  let [result, sum] = [0, nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      result = Math.max(result, sum);
      sum = 0;
    }

    sum += nums[i];
  }

  return Math.max(result, sum);
};
