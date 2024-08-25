import { generateBinaryTree } from '~/utils/binary-tree';

import { longestZigZag } from './longestZigZag';

describe('1372. Longest ZigZag Path in a Binary Tree', () => {
  test('longestZigZag', () => {
    {
      // biome-ignore format: the array should not be formatted
      const root = generateBinaryTree([1, null, 1, 1, 1, null, null, 1, 1, null, 1, null, null, null, 1]);
      expect(longestZigZag(root)).toBe(3);
    }

    {
      const root = generateBinaryTree([1, 1, 1, null, 1, null, null, 1, 1, null, 1]);
      expect(longestZigZag(root)).toBe(4);
    }

    {
      const root = generateBinaryTree([1]);
      expect(longestZigZag(root)).toBe(0);
    }
  });
});
