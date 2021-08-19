interface MaxProductDifference {
  (nums: number[]): number;
}

export const maxProductDifference: MaxProductDifference = (nums) => {
  const sorted = nums.sort((a, b) => b - a);
  const [max1, max2] = [sorted[0], sorted[1]];
  const [min1, min2] = [sorted[nums.length - 1], sorted[nums.length - 2]];
  return max1 * max2 - min1 * min2;
};
