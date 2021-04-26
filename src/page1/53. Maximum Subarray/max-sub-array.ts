interface MaxSubArray {
  (nums: number[]): number;
}

export const maxSubArray: MaxSubArray = (nums) => {
  let [result, sum] = [0, 0];

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    sum = Math.max(sum + num, num);
    result = Math.max(result, sum);
  }

  return result;
};
