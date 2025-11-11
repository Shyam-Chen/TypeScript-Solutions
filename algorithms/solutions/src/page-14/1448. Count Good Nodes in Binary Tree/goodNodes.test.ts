import { generateBinaryTree } from '~/utils/binary-tree';

import { goodNodes } from './goodNodes';

describe('1448. Count Good Nodes in Binary Tree', () => {
  test('goodNodes', () => {
    {
      const root = generateBinaryTree([3, 1, 4, 3, null, 1, 5]);
      expect(goodNodes(root)).toBe(4);
    }

    {
      const root = generateBinaryTree([3, 3, null, 4, 2]);
      expect(goodNodes(root)).toBe(3);
    }

    {
      const root = generateBinaryTree([1]);
      expect(goodNodes(root)).toBe(1);
    }
  });
});
