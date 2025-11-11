import { generateBinaryTree } from '~/utils/binary-tree';

import { leafSimilar } from './leafSimilar';

describe('872. Leaf-Similar Trees', () => {
  test('leafSimilar', () => {
    {
      const root1 = generateBinaryTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
      // biome-ignore format: the array should not be formatted
      const root2 = generateBinaryTree([3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8]);
      expect(leafSimilar(root1, root2)).toBe(true);
    }

    {
      const root1 = generateBinaryTree([1, 2, 3]);
      const root2 = generateBinaryTree([1, 3, 2]);
      expect(leafSimilar(root1, root2)).toBe(false);
    }
  });
});
