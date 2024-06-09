type KidsWithCandies = (candies: number[], extraCandies: number) => boolean[];

/**
 * Accepted
 */
export const kidsWithCandies: KidsWithCandies = (candies, extraCandies) => {
  const maxCandies = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= maxCandies);
};
