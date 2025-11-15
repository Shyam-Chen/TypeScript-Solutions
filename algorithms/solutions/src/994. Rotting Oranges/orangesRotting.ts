type OrangesRotting = (grid: number[][]) => number;

/**
 * Accepted
 */
export const orangesRotting: OrangesRotting = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  let freshOranges = 0;
  const queue: [number, number][] = [];

  // Step 1: Initialize the queue with all initially rotten oranges and count fresh oranges
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c]); // Add rotten orange to the queue
      } else if (grid[r][c] === 1) {
        freshOranges += 1; // Count fresh oranges
      }
    }
  }

  // If there are no fresh oranges, return 0 (no time needed to rot)
  if (freshOranges === 0) return 0;

  // Step 2: Perform BFS
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let minutes = 0;

  while (queue.length > 0) {
    const currentLevelSize = queue.length;
    let rottenInThisMinute = false;

    for (let i = 0; i < currentLevelSize; i++) {
      const [row, col] = queue.shift() as [number, number];

      // Check all 4-directionally adjacent cells
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        // If the adjacent cell contains a fresh orange, rot it
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          grid[newRow][newCol] === 1
        ) {
          grid[newRow][newCol] = 2; // Mark it as rotten
          queue.push([newRow, newCol]); // Add it to the queue to process in the next minute
          freshOranges -= 1; // Decrease the count of fresh oranges
          rottenInThisMinute = true;
        }
      }
    }

    // If we rotted any oranges this minute, increment the time counter
    if (rottenInThisMinute) minutes += 1;
  }

  // Step 3: Check if all fresh oranges have rotted
  return freshOranges === 0 ? minutes : -1;
};
