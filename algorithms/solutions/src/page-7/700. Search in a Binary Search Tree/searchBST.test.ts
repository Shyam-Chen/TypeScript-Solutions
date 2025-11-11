import { stringify } from 'flatted';

import { generateBinaryTree } from '~/utils/binary-tree';

import { searchBST } from './searchBST';

describe('700. Search in a Binary Search Tree', () => {
  test('searchBST', () => {
    {
      const root = generateBinaryTree([4, 2, 7, 1, 3]);
      const expected = generateBinaryTree([2, 1, 3]);
      expect(stringify(searchBST(root, 2))).toBe(stringify(expected));
    }

    {
      const root = generateBinaryTree([4, 2, 7, 1, 3]);
      const expected = generateBinaryTree([]);
      expect(stringify(searchBST(root, 5))).toBe(stringify(expected));
    }
  });
});
