import { generateBinaryTree } from '~/utils/binary-tree';

import { isSameTree } from './isSameTree';

describe('100. Same Tree', () => {
  test('isSameTree', () => {
    {
      //   1
      //  / \
      // 2   3
      const p = generateBinaryTree([1, 2, 3]);

      //   1
      //  / \
      // 2   3
      const q = generateBinaryTree([1, 2, 3]);

      expect(isSameTree(p, q)).toBe(true);
    }

    {
      //   1
      //  /
      // 2
      const p = generateBinaryTree([1, 2]);

      //   1
      //    \
      //     2
      const q = generateBinaryTree([1, null, 2]);

      expect(isSameTree(p, q)).toBe(false);
    }

    {
      //   1
      //  / \
      // 2   1
      const p = generateBinaryTree([1, 2, 1]);

      //   1
      //  / \
      // 1   2
      const q = generateBinaryTree([1, 1, 2]);

      expect(isSameTree(p, q)).toEqual(false);
    }
  });
});
