export const maxSubArray = (nums: number[]): number => {
  let [result, sum] = [0, 0];

  for (const num of nums) {
    sum = Math.max(sum + num, num);
    result = Math.max(result, sum);
  }

  return result;
};
