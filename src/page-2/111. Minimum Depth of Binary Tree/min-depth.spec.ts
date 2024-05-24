import { generateBinaryTree } from '~/utils/binary-tree';

import { minDepth } from './min-depth';

describe('111. Minimum Depth of Binary Tree', () => {
  it('minDepth', () => {
    //   3
    //  / \
    // 9  20
    //   /  \
    //  15   7
    const binaryTree = generateBinaryTree([3, 9, 20, null, null, 15, 7]);

    expect(minDepth(binaryTree)).toEqual(2);

    expect(minDepth(generateBinaryTree([2, null, 3, null, 4, null, 5, null, 6]))).toEqual(5);
  });
});
