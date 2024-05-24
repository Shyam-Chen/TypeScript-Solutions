interface KidsWithCandies {
  (candies: number[], extraCandies: number): boolean[];
}

// candies = [2,3,5,1,3], extraCandies = 3
// 2 + 3 = 5 -> true
// 3 + 2 = 5 -> true
// 5 + 0 = 5 -> true
// 1 + 3 = 4 -> false
// 3 + 2 = 5 -> true
export const kidsWithCandies: KidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};
