type LargestAltitude = (gain: number[]) => number;

/**
 * Accepted
 */
export const largestAltitude: LargestAltitude = (gain) => {
  let currentAltitude = 0;
  let highestAltitude = 0;

  for (const point of gain) {
    currentAltitude += point;

    if (currentAltitude > highestAltitude) {
      highestAltitude = currentAltitude;
    }
  }

  return highestAltitude;
};
