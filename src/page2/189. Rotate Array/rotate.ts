export const rotate = (nums: number[], k: number): number[] => {
  const result = [...nums];
  const steps = k % nums.length;

  for (let i = 0; i < steps; i += 1) {
    result.unshift(result.pop());
  }

  return result;
};

/**
 * [7,6,5,4,3,2,1] reversed
 * [5,6,7]         front, steps = 3
 *       [1,2,3,4] rest
 * ---------------
 * [5,6,7,1,2,3,4] [...front, ...rest]
 */
export const rotate2 = (nums: number[], k: number): number[] => {
  const result = [...nums];
  const steps = k % nums.length;

  const reversed = result.reverse();
  const front = reversed.slice(0, steps).reverse();
  const rest = reversed.slice(steps).reverse();

  return [...front, ...rest];
};
