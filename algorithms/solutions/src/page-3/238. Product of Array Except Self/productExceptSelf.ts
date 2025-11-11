type ProductExceptSelf = (nums: number[]) => number[];

/**
 * Accepted
 */
export const productExceptSelf: ProductExceptSelf = (nums) => {
  const n = nums.length;
  const leftProducts: number[] = Array(n).fill(1);
  const rightProducts: number[] = Array(n).fill(1);
  const answer: number[] = Array(n);

  // Fill leftProducts array
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // Fill rightProducts array
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  // Fill the answer array by multiplying corresponding leftProducts and rightProducts
  for (let i = 0; i < n; i++) {
    answer[i] = leftProducts[i] * rightProducts[i];
  }

  return answer;
};
