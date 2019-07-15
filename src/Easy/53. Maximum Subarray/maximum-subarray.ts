export const maxSubArray = (nums: number[]): number => {
  const maximum = Math.max(...nums);
  const secondLargest = Math.max(...[...nums].filter(num => num !== maximum));

  return maximum + secondLargest;
};
