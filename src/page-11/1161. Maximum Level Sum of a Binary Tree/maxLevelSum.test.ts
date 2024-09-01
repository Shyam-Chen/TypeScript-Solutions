import { generateBinaryTree } from '~/utils/binary-tree';

import { maxLevelSum } from './maxLevelSum';

describe('1161. Maximum Level Sum of a Binary Tree', () => {
  test('maxLevelSum', () => {
    {
      const root = generateBinaryTree([1, 7, 0, 7, -8, null, null]);
      expect(maxLevelSum(root)).toBe(2);
    }

    {
      const root = generateBinaryTree([989, null, 10250, 98693, -89388, null, null, null, -32127]);
      expect(maxLevelSum(root)).toBe(2);
    }
  });
});
