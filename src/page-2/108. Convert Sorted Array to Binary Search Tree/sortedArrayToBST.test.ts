import { stringify } from 'flatted';

import { generateBinaryTree } from '~/utils/binary-tree';

import { sortedArrayToBST } from './sortedArrayToBST';

describe('110. Balanced Binary Tree', () => {
  test('sortedArrayToBST', () => {
    {
      const expected = generateBinaryTree([0, -10, 5, null, -3, null, 9]);
      expect(stringify(sortedArrayToBST([-10, -3, 0, 5, 9]))).toBe(stringify(expected));
    }

    {
      const expected = generateBinaryTree([1, null, 3]);
      expect(stringify(sortedArrayToBST([1, 3]))).toBe(stringify(expected));
    }
  });
});
