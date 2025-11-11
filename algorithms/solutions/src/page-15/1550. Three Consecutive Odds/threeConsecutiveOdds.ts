type ThreeConsecutiveOdds = (arr: number[]) => boolean;

/**
 * Accepted
 */
export const threeConsecutiveOdds: ThreeConsecutiveOdds = (arr) => {
  // Counter for consecutive odd numbers
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      // If current number is odd, increase the count
      count += 1;

      // Check if we have found three consecutive odds
      if (count === 3) return true;
    } else {
      // If current number is even, reset the count
      count = 0;
    }
  }

  // If we finish the loop without finding three consecutive odds
  return false;
};
