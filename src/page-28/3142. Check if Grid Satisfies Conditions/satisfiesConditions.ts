interface SatisfiesConditions {
  (grid: number[][]): boolean;
}

/**
 * Accepted
 */
export const satisfiesConditions: SatisfiesConditions = (grid) => {
  const rowsLength = grid.length;
  const colsLength = grid[0].length;

  for (let i = 0; i < rowsLength - 1; i++) {
    for (let j = 0; j < colsLength; j++) {
      if (grid[i][j] !== grid[i + 1][j]) return false;
    }
  }

  for (let i = 0; i < rowsLength; i++) {
    for (let j = 0; j < colsLength - 1; j++) {
      if (grid[i][j] === grid[i][j + 1]) return false;
    }
  }

  return true;
};
