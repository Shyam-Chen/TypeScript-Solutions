type CountPoints = (rings: string) => number;

/**
 * Accepted
 */
export const countPoints: CountPoints = (rings) => {
  // Initialize a Map to store rod colors
  const rodColors = new Map<string, Set<string>>();

  // Iterate through the rings string
  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rod = rings[i + 1];

    // Add colors to the corresponding rod's set
    rodColors.set(rod, (rodColors.get(rod) || new Set()).add(color));
  }

  // Count the rods with all three colors
  let count = 0;

  for (const [_, colors] of rodColors) {
    if (colors.size === 3) count += 1;
  }

  return count;
};
