type EqualPairs = (grid: number[][]) => number;

/**
 * Accepted
 */
export const equalPairs: EqualPairs = (grid) => {
  const rowMap = new Map<string, number>();

  // Store each row in the map
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i].join();
    rowMap.set(row, (rowMap.get(row) || 0) + 1);
  }

  let count = 0;

  // Check each column against the stored rows
  for (let j = 0; j < grid.length; j++) {
    const col = grid.map((row) => row[j]).join();
    count += rowMap.get(col) || 0;
  }

  return count;
};
