import { generateBinaryTree } from '~/utils/binary-tree';

import { inorderTraversal } from './inorderTraversal';

describe('94. Binary Tree Inorder Traversal', () => {
  it('inorderTraversal - Case 1', () => {
    const root = generateBinaryTree([1, null, 2, 3]);
    expect(inorderTraversal(root)).toStrictEqual([1, 3, 2]);
  });

  it('inorderTraversal - Case 2', () => {
    const root = generateBinaryTree([]);
    expect(inorderTraversal(root)).toStrictEqual([]);
  });

  it('inorderTraversal - Case 3', () => {
    const root = generateBinaryTree([1]);
    expect(inorderTraversal(root)).toStrictEqual([1]);
  });
});
