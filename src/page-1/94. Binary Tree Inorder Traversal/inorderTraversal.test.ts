import { generateBinaryTree } from '~/utils/binary-tree';

import { inorderTraversal } from './inorderTraversal';

describe('94. Binary Tree Inorder Traversal', () => {
  test('inorderTraversal', () => {
    {
      const root = generateBinaryTree([1, null, 2, 3]);
      expect(inorderTraversal(root)).toStrictEqual([1, 3, 2]);
    }

    {
      const root = generateBinaryTree([]);
      expect(inorderTraversal(root)).toStrictEqual([]);
    }

    {
      const root = generateBinaryTree([1]);
      expect(inorderTraversal(root)).toStrictEqual([1]);
    }
  });
});
