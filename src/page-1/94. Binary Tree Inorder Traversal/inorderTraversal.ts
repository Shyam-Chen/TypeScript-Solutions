import type { TreeNode } from '~/utils/binary-tree';

type InorderTraversal = (root: TreeNode | null) => number[];

/**
 * Accepted
 */
export const inorderTraversal: InorderTraversal = (root) => {
  const result: number[] = [];

  function traverse(node: TreeNode | null): void {
    if (node === null) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  }

  traverse(root);
  return result;
};
