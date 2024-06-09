type CanPlaceFlowers = (flowerbed: number[], n: number) => boolean;

/**
 * Accepted
 */
export const canPlaceFlowers: CanPlaceFlowers = (flowerbed, n) => {
  // Counter to track the number of flowers planted
  let count = 0;

  // Current index in the flowerbed array
  let i = 0;

  // Length of the flowerbed array
  const length = flowerbed.length;

  // Traverse the flowerbed array
  while (i < length) {
    // Check if the current position is empty (0)
    if (flowerbed[i] === 0) {
      // Check if the previous position is empty or out of bounds (left boundary)
      const prevEmpty = i === 0 || flowerbed[i - 1] === 0;

      // Check if the next position is empty or out of bounds (right boundary)
      const nextEmpty = i === length - 1 || flowerbed[i + 1] === 0;

      // If both previous and next positions are empty (or out of bounds), we can plant a flower here
      if (prevEmpty && nextEmpty) {
        // Place a flower at the current position
        flowerbed[i] = 1;

        // Increment the flower counter
        count += 1;

        // If we have planted the required number of flowers, return true
        if (count >= n) return true;

        // Move to the position after the next one to avoid adjacent planting
        i += 2;
      } else {
        // Move to the next position if planting is not possible here
        i += 1;
      }
    } else {
      // Skip the next position if the current one is already occupied
      i += 2;
    }
  }

  // After traversing the entire flowerbed, check if we have planted enough flowers
  return count >= n;
};
