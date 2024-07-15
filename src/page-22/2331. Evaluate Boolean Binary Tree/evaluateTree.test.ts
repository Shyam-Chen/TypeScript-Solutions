import { generateBinaryTree } from '~/utils/binary-tree';

import { evaluateTree } from './evaluateTree';

describe('2331. Evaluate Boolean Binary Tree', () => {
  test('evaluateTree', () => {
    {
      const root = generateBinaryTree([2, 1, 3, null, null, 0, 1]);
      expect(evaluateTree(root)).toBe(true);
    }

    {
      const root = generateBinaryTree([0]);
      expect(evaluateTree(root)).toBe(false);
    }
  });
});
