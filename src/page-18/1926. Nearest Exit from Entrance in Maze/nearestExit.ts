type NearestExit = (maze: string[][], entrance: number[]) => number;

/**
 * Accepted
 */
export const nearestExit: NearestExit = (maze, entrance) => {
  const rows = maze.length;
  const cols = maze[0].length;

  // Directions for moving up, down, left, and right.
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
  ];

  const queue: [number, number, number][] = []; // [row, col, steps]
  const [startRow, startCol] = entrance;

  // Start BFS from the entrance
  queue.push([startRow, startCol, 0]);
  maze[startRow][startCol] = '+'; // Mark the entrance as visited by converting it to a wall.

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === undefined) continue; // Safely handle empty queue

    const [row, col, steps] = current;

    // Check all four possible directions.
    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      // If the new position is out of bounds or is a wall, skip it.
      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        maze[newRow][newCol] === '+'
      ) {
        continue;
      }

      // Check if the new position is an exit (on the border) and not the entrance.
      if (
        (newRow === 0 || newRow === rows - 1 || newCol === 0 || newCol === cols - 1) &&
        (newRow !== startRow || newCol !== startCol)
      ) {
        return steps + 1; // We found the nearest exit.
      }

      // Mark the cell as visited and add it to the queue.
      maze[newRow][newCol] = '+';
      queue.push([newRow, newCol, steps + 1]);
    }
  }

  // No exit found.
  return -1;
};
