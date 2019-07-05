export const moveZeroes = (nums: number[]): number[] => (
  [...nums.filter(x => x !== 0), ...nums.filter(x => x === 0)]
);
