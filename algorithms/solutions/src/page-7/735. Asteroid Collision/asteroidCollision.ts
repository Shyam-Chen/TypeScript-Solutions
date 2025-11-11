type AsteroidCollision = (asteroids: number[]) => number[];

/**
 * Accepted
 */
export const asteroidCollision: AsteroidCollision = (asteroids) => {
  // Stack to keep track of the remaining asteroids after collisions
  const stack: number[] = [];

  // Iterate over each asteroid in the input array
  for (const asteroid of asteroids) {
    // A flag to determine whether the current asteroid is to be added to the stack
    let addAsteroid = true;

    // Handle collision scenarios only if the stack is not empty and
    // the current asteroid is moving left (negative) while the top of the stack is moving right (positive)
    while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
      const topAsteroid = stack[stack.length - 1];

      // Check if the top asteroid is larger, if so, the current asteroid explodes
      if (Math.abs(topAsteroid) > Math.abs(asteroid)) {
        addAsteroid = false;
        break;
      }

      // Check if both asteroids are of the same size, both explode
      if (Math.abs(topAsteroid) === Math.abs(asteroid)) {
        stack.pop();
        addAsteroid = false;
        break;
      }

      // If the top asteroid is smaller, it explodes
      stack.pop();
    }

    // If the current asteroid survives the collisions, add it to the stack
    if (addAsteroid) stack.push(asteroid);
  }

  // Return the state of the asteroids after all collisions
  return stack;
};
