import { generateBinaryTree } from '~/utils/binary-tree';

import { maxDepth } from './maximum-depth-of-binary-tree';

describe('104. Maximum Depth of Binary Tree', () => {
  it('maxDepth', () => {
    //   3
    //  / \
    // 9  20
    //   /  \
    //  15   7
    const binaryTree = generateBinaryTree([3, 9, 20, null, null, 15, 7]);

    expect(maxDepth(binaryTree)).toEqual(3);
  });
});
