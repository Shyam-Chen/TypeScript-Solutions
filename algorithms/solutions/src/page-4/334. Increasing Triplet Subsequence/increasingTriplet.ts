type IncreasingTriplet = (nums: number[]) => boolean;

/**
 * Accepted
 */
export const increasingTriplet: IncreasingTriplet = (nums) => {
  let first = Number.POSITIVE_INFINITY;
  let second = Number.POSITIVE_INFINITY;

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }

  return false;
};
