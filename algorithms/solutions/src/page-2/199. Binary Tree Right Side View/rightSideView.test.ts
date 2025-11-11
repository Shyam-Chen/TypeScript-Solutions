import { generateBinaryTree } from '~/utils/binary-tree';

import { rightSideView } from './rightSideView';

describe('199. Binary Tree Right Side View', () => {
  test('rightSideView', () => {
    {
      const root = generateBinaryTree([1, 2, 3, null, 5, null, 4]);
      expect(rightSideView(root)).toStrictEqual([1, 3, 4]);
    }

    {
      const root = generateBinaryTree([1, null, 3]);
      expect(rightSideView(root)).toStrictEqual([1, 3]);
    }

    {
      const root = generateBinaryTree([]);
      expect(rightSideView(root)).toStrictEqual([]);
    }
  });
});
