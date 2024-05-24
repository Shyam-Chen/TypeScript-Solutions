import { generateBinaryTree } from '~/utils/binary-tree';

import { maxDepth } from './max-depth';

describe('104. Maximum Depth of Binary Tree', () => {
  it('maxDepth', () => {
    //   3
    //  / \
    // 9  20
    //   /  \
    //  15   7
    const binaryTree = generateBinaryTree([3, 9, 20, null, null, 15, 7]);
    expect(maxDepth(binaryTree)).toEqual(3);

    //   1
    //    \
    //     2
    const binaryTree2 = generateBinaryTree([1, null, 2]);
    expect(maxDepth(binaryTree2)).toEqual(2);
  });
});
