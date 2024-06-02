import type { TreeNode } from '~/utils/binary-tree';

type IsBalanced = (root: TreeNode | null) => boolean;

/**
 * Accepted
 */
export const isBalanced: IsBalanced = (root) => {
  function checkHeight(node: TreeNode | null): number {
    if (node === null) return 0;

    const leftHeight = checkHeight(node.left);
    const rightHeight = checkHeight(node.right);

    // If left subtree is unbalanced or right subtree is unbalanced
    // or if the height difference is more than 1, return -1 indicating unbalanced
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    // Return the height of the current node
    // which is 1 plus the maximum height of its left and right subtrees
    return Math.max(leftHeight, rightHeight) + 1;
  }

  // The tree is balanced if checkHeight does not return -1
  return checkHeight(root) !== -1;
};
