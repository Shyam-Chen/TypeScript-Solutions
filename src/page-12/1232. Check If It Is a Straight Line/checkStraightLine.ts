type CheckStraightLine = (coordinates: number[][]) => boolean;

/**
 * Accepted
 */
export const checkStraightLine: CheckStraightLine = (coordinates) => {
  // If there are less than 2 points, cannot form a line
  if (coordinates.length < 2) return false;

  // Extract first two points
  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];

  // Check if all points lie on the same line
  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];

    // Calculate slope of the line formed by (x1, y1) and (x2, y2)
    // slope = (y2 - y1) / (x2 - x1)
    // Avoid division by zero by checking x2 - x1
    if ((y2 - y1) * (x - x1) !== (y - y1) * (x2 - x1)) return false;
  }

  // All points are on the same line
  return true;
};
