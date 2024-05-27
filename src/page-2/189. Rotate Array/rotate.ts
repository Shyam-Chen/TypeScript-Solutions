type Rotate = (nums: number[], k: number) => void;

/**
 * Accepted
 */
export const rotate: Rotate = (nums, k) => {
  const point = k % nums.length;
  const move = nums.splice(nums.length - point, point);
  nums.unshift(...move);
};
