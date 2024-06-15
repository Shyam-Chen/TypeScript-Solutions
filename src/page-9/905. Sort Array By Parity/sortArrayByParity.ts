type SortArrayByParity = (nums: number[]) => number[];

/**
 * Accepted
 */
export const sortArrayByParity: SortArrayByParity = (nums) => {
  // Initialize two arrays to hold even and odd numbers
  const evens: number[] = [];
  const odds: number[] = [];

  // Iterate through the input array
  for (const num of nums) {
    // Check if the number is even or odd and push to the respective array
    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }

  // Concatenate the even and odd arrays and return the result
  return evens.concat(odds);
};

/**
 * Accepted
 */
export const sortArrayByParity2: SortArrayByParity = (nums) => {
  return nums.sort((x, y) => (x % 2) - (y % 2));
};
