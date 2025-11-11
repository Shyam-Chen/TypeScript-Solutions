import { stringify } from 'flatted';

import { generateBinaryTree } from '~/utils/binary-tree';

import { deleteNode } from './deleteNode';

describe('450. Delete Node in a BST', () => {
  test('deleteNode', () => {
    {
      const root = generateBinaryTree([5, 3, 6, 2, 4, null, 7]);
      const expected = generateBinaryTree([5, 4, 6, 2, null, null, 7]);
      expect(stringify(deleteNode(root, 3))).toBe(stringify(expected));
    }

    {
      const root = generateBinaryTree([5, 3, 6, 2, 4, null, 7]);
      const expected = generateBinaryTree([5, 3, 6, 2, 4, null, 7]);
      expect(stringify(deleteNode(root, 0))).toBe(stringify(expected));
    }

    {
      const root = generateBinaryTree([]);
      const expected = generateBinaryTree([]);
      expect(stringify(deleteNode(root, 0))).toBe(stringify(expected));
    }
  });
});
