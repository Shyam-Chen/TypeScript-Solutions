import { successfulPairs } from './successfulPairs';

describe('2300. Successful Pairs of Spells and Potions', () => {
  test('successfulPairs', () => {
    expect(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7)).toStrictEqual([4, 0, 3]);
    expect(successfulPairs([3, 1, 2], [8, 5, 8], 16)).toStrictEqual([2, 0, 2]);
  });
});
