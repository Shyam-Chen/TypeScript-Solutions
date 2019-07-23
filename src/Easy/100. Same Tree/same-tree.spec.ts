import { generateBinaryTree } from '~/utils/binary-tree';

import { isSameTree } from './same-tree';

describe('100. Same Tree', () => {
  it('isSameTree', () => {
    //   1
    //  / \
    // 2  3
    const binaryTree1p = generateBinaryTree([1, 2, 3]);
    const binaryTree1q = { ...binaryTree1p };

    expect(isSameTree(binaryTree1p, binaryTree1q)).toEqual(true);

    //   1
    //  /
    // 2
    const binaryTree2p = generateBinaryTree([1, 2]);

    //   1
    //    \
    //    2
    const binaryTree2q = generateBinaryTree([1, null, 2]);

    expect(isSameTree(binaryTree2p, binaryTree2q)).toEqual(false);
  });
});
