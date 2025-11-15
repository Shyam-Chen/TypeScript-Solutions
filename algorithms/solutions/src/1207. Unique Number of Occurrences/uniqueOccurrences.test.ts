import { uniqueOccurrences } from './uniqueOccurrences';

describe('1207. Unique Number of Occurrences', () => {
  test('uniqueOccurrences', () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBe(true);
    expect(uniqueOccurrences([1, 2])).toBe(false);
    expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBe(true);
  });
});
