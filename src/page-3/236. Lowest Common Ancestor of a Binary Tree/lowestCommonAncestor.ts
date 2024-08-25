import type { TreeNode } from '~/utils/binary-tree';

type LowestCommonAncestor = (
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
) => TreeNode | null;

/**
 * Accepted
 */
export const lowestCommonAncestor: LowestCommonAncestor = (root, p, q) => {
  if (root === null || root === p || root === q) return root;

  // Perform DFS on the left subtree
  const left = lowestCommonAncestor(root.left, p, q);

  // Perform DFS on the right subtree
  const right = lowestCommonAncestor(root.right, p, q);

  // If both left and right are non-null, the current node is the LCA
  if (left !== null && right !== null) return root;

  // If only one of the sides is non-null, return that side
  return left !== null ? left : right;
};
