interface RunningSum {
  (nums: number[]): number[];
}

export const runningSum: RunningSum = (nums) => {
  const result = [];

  let count = 0;

  for (let i = 0; i < nums.length; i += 1) {
    count += nums[i];
    result.push(count);
  }

  return result;
};
