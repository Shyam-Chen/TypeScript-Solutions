interface HeightChecker {
  (heights: number[]): number;
}

/**
 * [1,1,4,2,1,3]
 * [1,1,1,2,3,4]
 * -------------
 * [O,O,X,O,X,X] X = 3
 */

export const heightChecker: HeightChecker = (heights) => {
  let result = 0;

  const sortedHeights = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i += 1) {
    if (heights[i] !== sortedHeights[i]) {
      result += 1;
    }
  }

  return result;
};
