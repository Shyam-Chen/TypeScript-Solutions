import { generateBinaryTree } from '~/utils/binary-tree';

import { minDepth } from './minDepth';

describe('111. Minimum Depth of Binary Tree', () => {
  test('minDepth', () => {
    //   3
    //  / \
    // 9  20
    //   /  \
    //  15   7
    const binaryTree = generateBinaryTree([3, 9, 20, null, null, 15, 7]);

    expect(minDepth(binaryTree)).toBe(2);

    expect(minDepth(generateBinaryTree([2, null, 3, null, 4, null, 5, null, 6]))).toBe(5);
  });
});
