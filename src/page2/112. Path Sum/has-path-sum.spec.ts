import { generateBinaryTree } from '~/utils/binary-tree';

import { hasPathSum } from './has-path-sum';

describe('112. Path Sum', () => {
  it('hasPathSum', () => {
    //       5
    //      / \
    //     4   8
    //    /   / \
    //   11  13  4
    //  /  \      \
    // 7    2      1
    const binaryTree = generateBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);

    expect(hasPathSum(binaryTree, 22)).toEqual(true);

    //   1
    //  / \
    // 2   3
    const binaryTree2 = generateBinaryTree([1, 2, 3]);

    expect(hasPathSum(binaryTree2, 5)).toEqual(false);

    expect(hasPathSum(generateBinaryTree([]), 0)).toEqual(false);
  });
});
