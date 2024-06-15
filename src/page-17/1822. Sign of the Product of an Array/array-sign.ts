type ArraySign = (nums: number[]) => number;

export const arraySign: ArraySign = (nums) => {
  const allValues = nums.reduce((acc, cur) => acc * cur);
  if (allValues > 0) return 1; // `1` if `x` is positive.
  if (allValues < 0) return -1; // `-1` if `x` is negative.
  return 0; // `0` if `x` is equal to `0`.
};

export const arraySign2: ArraySign = (nums) => {
  let result = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) return 0;
    if (num < 0) result *= -1;
  }

  return result;
};
