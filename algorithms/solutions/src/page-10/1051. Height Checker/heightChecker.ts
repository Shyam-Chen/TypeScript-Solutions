type HeightChecker = (heights: number[]) => number;

/**
 * Accepted
 */
export const heightChecker: HeightChecker = (heights) => {
  // Create the expected array by sorting heights
  const expected = [...heights].sort((a, b) => a - b);

  // Initialize a counter to count mismatches
  let mismatchCount = 0;

  // Compare heights and expected arrays
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      mismatchCount += 1;
    }
  }

  // Return the number of mismatched indices
  return mismatchCount;
};
