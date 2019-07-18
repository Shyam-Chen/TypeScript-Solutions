import { isSameTree } from './same-tree';

describe('100. Same Tree', () => {
  it('isSameTree', () => {
    //   1
    //  / \
    // 2  3
    const binaryTree1p = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };

    const binaryTree1q = { ...binaryTree1p };

    expect(isSameTree(binaryTree1p, binaryTree1q)).toEqual(true);

    //   1
    //  /
    // 2
    const binaryTree2p = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: null,
      },
      right: null,
    };

    //   1
    //    \
    //    2
    const binaryTree2q = {
      val: 1,
      left: null,
      right: {
        val: 2,
        left: null,
        right: null,
      },
    };

    expect(isSameTree(binaryTree2p, binaryTree2q)).toEqual(false);
  });
});
