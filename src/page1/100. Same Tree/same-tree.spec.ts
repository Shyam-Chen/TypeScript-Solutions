import { generateBinaryTree } from '~/utils/binary-tree';

import { isSameTree } from './same-tree';

describe('100. Same Tree', () => {
  it('isSameTree', () => {
    //   1
    //  / \
    // 2   3
    const binaryTree1p = generateBinaryTree([1, 2, 3]);

    //   1
    //  / \
    // 2   3
    const binaryTree1q = generateBinaryTree([1, 2, 3]);

    expect(isSameTree(binaryTree1p, binaryTree1q)).toEqual(true);

    //   1
    //  /
    // 2
    const binaryTree2p = generateBinaryTree([1, 2]);

    //   1
    //    \
    //     2
    const binaryTree2q = generateBinaryTree([1, null, 2]);

    expect(isSameTree(binaryTree2p, binaryTree2q)).toEqual(false);

    //   1
    //  / \
    // 2   1
    const binaryTree3p = generateBinaryTree([1, 2, 1]);

    //   1
    //  / \
    // 1   2
    const binaryTree3q = generateBinaryTree([1, 1, 2]);

    expect(isSameTree(binaryTree3p, binaryTree3q)).toEqual(false);
  });
});
