import { generateBinaryTree } from '~/utils/binary-tree';

import { isBalanced } from './isBalanced';

describe('110. Balanced Binary Tree', () => {
  test('isBalanced', () => {
    {
      // https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg
      const root = generateBinaryTree([3, 9, 20, null, null, 15, 7]);
      expect(isBalanced(root)).toBe(true);
    }

    {
      // https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg
      const root = generateBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4]);
      expect(isBalanced(root)).toBe(false);
    }

    {
      const root = generateBinaryTree([]);
      expect(isBalanced(root)).toBe(true);
    }
  });
});
