type MinEatingSpeed = (piles: number[], h: number) => number;

/**
 * Accepted
 */
export const minEatingSpeed: MinEatingSpeed = (piles, h) => {
  let left = 1;
  let right = Math.max(...piles);

  const canEatAll = (k: number): boolean => {
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / k);
    }

    return hours <= h;
  };

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (canEatAll(mid)) {
      right = mid; // Try smaller k
    } else {
      left = mid + 1; // Try larger k
    }
  }

  return left;
};
