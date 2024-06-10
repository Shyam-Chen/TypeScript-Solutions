import { removeDuplicates } from './removeDuplicates';

describe('26. Remove Duplicates from Sorted Array', () => {
  test('removeDuplicates', () => {
    {
      const nums = [1, 1, 2];
      expect(removeDuplicates(nums)).toBe(2);
      expect(nums).toStrictEqual([1, 2]);
    }

    {
      const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
      expect(removeDuplicates(nums)).toBe(5);
      expect(nums).toStrictEqual([0, 1, 2, 3, 4]);
    }
  });
});
