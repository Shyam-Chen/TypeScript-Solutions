type MinimumChairs = (s: string) => number;

/**
 * Accepted
 */
export const minimumChairs: MinimumChairs = (s) => {
  let currentPeople = 0;
  let maxPeople = 0;

  for (const event of s) {
    if (event === 'E') {
      currentPeople += 1;
      if (currentPeople > maxPeople) maxPeople = currentPeople;
    } else if (event === 'L') {
      currentPeople -= 1;
    }
  }

  return maxPeople;
};
