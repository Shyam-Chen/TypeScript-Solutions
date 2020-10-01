import { kidsWithCandies } from './kids-with-candies';

describe('1431. Kids With the Greatest Number of Candies', () => {
  it('kidsWithCandies', () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
  });
});
