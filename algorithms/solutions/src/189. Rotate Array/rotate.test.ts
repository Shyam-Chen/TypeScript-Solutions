import { rotate } from './rotate';

describe('189. Rotate Array', () => {
  test('rotate', () => {
    {
      const nums = [1, 2, 3, 4, 5, 6, 7];
      rotate(nums, 3);
      expect(nums).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
    }

    {
      const nums = [-1, -100, 3, 99];
      rotate(nums, 2);
      expect(nums).toStrictEqual([3, 99, -1, -100]);
    }
  });
});
