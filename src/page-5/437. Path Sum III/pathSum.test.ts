import { generateBinaryTree } from '~/utils/binary-tree';

import { pathSum } from './pathSum';

describe('437. Path Sum III', () => {
  test('pathSum', () => {
    {
      const root = generateBinaryTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]);
      expect(pathSum(root, 8)).toBe(3);
    }

    {
      const root = generateBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);
      expect(pathSum(root, 22)).toBe(3);
    }
  });
});
