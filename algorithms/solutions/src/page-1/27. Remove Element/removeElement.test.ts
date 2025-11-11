import { removeElement } from './removeElement';

describe('27. Remove Element', () => {
  test('removeElement', () => {
    {
      const nums = [3, 2, 2, 3];
      const expected = [2, 2];
      expect(removeElement(nums, 3)).toBe(expected.length);
      expect(nums.sort()).toStrictEqual(expected.sort());
    }

    {
      const nums = [0, 1, 2, 2, 3, 0, 4, 2];
      const expected = [0, 1, 4, 0, 3];
      expect(removeElement(nums, 2)).toBe(expected.length);
      expect(nums.sort()).toStrictEqual(expected.sort());
    }
  });
});
