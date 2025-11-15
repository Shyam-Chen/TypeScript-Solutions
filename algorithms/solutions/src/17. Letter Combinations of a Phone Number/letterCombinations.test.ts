import { letterCombinations } from './letterCombinations';

describe('17. Letter Combinations of a Phone Number', () => {
  test('letterCombinations', () => {
    // biome-ignore format: the array should not be formatted
    expect(letterCombinations('23')).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    expect(letterCombinations('')).toStrictEqual([]);
    expect(letterCombinations('2')).toStrictEqual(['a', 'b', 'c']);
  });
});
