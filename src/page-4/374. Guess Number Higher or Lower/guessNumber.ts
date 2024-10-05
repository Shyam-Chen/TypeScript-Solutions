type GuessNumber = (n: number) => number;

/**
 * Accepted
 */
export const guessNumber: GuessNumber = (n) => {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);

    if (res === 0) return mid; // Found the pick

    if (res === -1) {
      high = mid - 1; // The pick is lower than mid
    } else {
      low = mid + 1; // The pick is higher than mid
    }
  }

  return -1; // This will never be reached if the input is valid
};

let pick: number;

function guess(num: number): number {
  if (num === pick) return 0;
  if (num > pick) return -1;
  return 1;
}

export function setPick(value: number) {
  pick = value;
}
