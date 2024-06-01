type CanMakeSquare = (grid: string[][]) => boolean;

/**
 * Accepted
 */
export const canMakeSquare: CanMakeSquare = (grid) => {
  const rowsLength = grid.length;
  const colsLength = grid[0].length;

  for (let i = 0; i < rowsLength - 1; i++) {
    for (let j = 0; j < colsLength - 1; j++) {
      let count = 0;

      if (grid[i][j] === 'B') count += 1;
      if (grid[i][j + 1] === 'B') count += 1;
      if (grid[i + 1][j] === 'B') count += 1;
      if (grid[i + 1][j + 1] === 'B') count += 1;

      if ([0, 1, 3, 4].includes(count)) return true;
    }
  }

  return false;
};
