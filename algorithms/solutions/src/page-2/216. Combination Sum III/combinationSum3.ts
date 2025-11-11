type CombinationSum3 = (k: number, n: number) => number[][];

/**
 * Accepted
 */
export const combinationSum3: CombinationSum3 = (k, n) => {
  const result: number[][] = [];

  function backtrack(start: number, remaining: number, combination: number[]) {
    if (combination.length === k && remaining === 0) {
      result.push([...combination]);
      return;
    }

    if (combination.length > k || remaining < 0) return;

    // Try all numbers from 'start' to 9
    for (let i = start; i <= 9; i++) {
      combination.push(i);
      backtrack(i + 1, remaining - i, combination);
      combination.pop();
    }
  }

  backtrack(1, n, []);

  return result;
};
