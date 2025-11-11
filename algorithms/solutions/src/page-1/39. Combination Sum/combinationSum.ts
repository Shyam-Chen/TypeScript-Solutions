type CombinationSum = (candidates: number[], target: number) => number[][];

/**
 * Accepted
 */
export const combinationSum: CombinationSum = (candidates, target) => {
  // Result array to store all unique combinations
  const result: number[][] = [];

  // Helper function to perform the backtracking
  // remaining: the remaining target to achieve
  // combination: current combination being built
  // index: current candidate index to explore
  function backtrack(remaining: number, combination: number[], index: number): void {
    // Base case: if remaining is 0, we found a valid combination
    if (remaining === 0) {
      // Push a copy of the current combination to the result array
      result.push([...combination]);
      return;
    }

    // Loop through the candidates starting from the current index
    for (let i = index; i < candidates.length; i++) {
      // If the candidate is greater than the remaining target, skip it
      if (candidates[i] > remaining) continue;

      // Add the current candidate to the combination
      combination.push(candidates[i]);

      // Recurse by reducing the remaining target by the current candidate's value
      // and keeping the same index since we can use the same number multiple times
      backtrack(remaining - candidates[i], combination, i);

      // Backtrack by removing the last candidate added
      combination.pop();
    }
  }

  // Start the backtracking process with the initial target and an empty combination
  backtrack(target, [], 0);

  // Return the list of all valid combinations
  return result;
};
