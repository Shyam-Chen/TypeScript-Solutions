import { stringify } from 'flatted';

import { generateBinaryTree } from '~/utils/binary-tree';

import { sortedArrayToBST } from './sortedArrayToBST';

describe('110. Balanced Binary Tree', () => {
  it('sortedArrayToBST - Case 1', () => {
    const expected = generateBinaryTree([0, -10, 5, null, -3, null, 9]);
    expect(stringify(sortedArrayToBST([-10, -3, 0, 5, 9]))).toBe(stringify(expected));
  });

  it('sortedArrayToBST - Case 2', () => {
    const expected = generateBinaryTree([1, null, 3]);
    expect(stringify(sortedArrayToBST([1, 3]))).toBe(stringify(expected));
  });
});
