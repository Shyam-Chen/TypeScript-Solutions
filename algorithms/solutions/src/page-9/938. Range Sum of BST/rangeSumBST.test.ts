import { generateBinaryTree } from '~/utils/binary-tree';

import { rangeSumBST } from './rangeSumBST';

describe('938. Range Sum of BST', () => {
  test('rangeSumBST', () => {
    {
      const root = generateBinaryTree([10, 5, 15, 3, 7, null, 18]);
      expect(rangeSumBST(root, 7, 15)).toBe(32);
    }

    {
      const root = generateBinaryTree([10, 5, 15, 3, 7, 13, 18, 1, null, 6]);
      expect(rangeSumBST(root, 6, 10)).toBe(23);
    }
  });
});
