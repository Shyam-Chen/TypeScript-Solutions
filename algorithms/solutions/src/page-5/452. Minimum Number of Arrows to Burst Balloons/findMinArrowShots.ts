type FindMinArrowShots = (points: number[][]) => number;

/**
 * Accepted
 */
export const findMinArrowShots: FindMinArrowShots = (points) => {
  // Sort the balloons by their end positions
  points.sort((a, b) => a[1] - b[1]);

  // Initialize the number of arrows needed and the position of the last arrow shot
  let arrows = 1;
  let arrowPosition = points[0][1];

  // Iterate through each balloon
  for (let i = 1; i < points.length; i++) {
    // If the current balloon's start is greater than the last arrow position
    if (points[i][0] > arrowPosition) {
      // We need a new arrow
      arrows += 1;
      arrowPosition = points[i][1]; // Update the arrow position to the current balloon's end
    }
  }

  return arrows;
};
