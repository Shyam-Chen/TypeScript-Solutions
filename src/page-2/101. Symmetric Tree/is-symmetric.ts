import type { TreeNode } from '~/utils/binary-tree';

type IsSymmetric = (root: TreeNode | null) => boolean;

/**
 * Accepted
 */
export const isSymmetric: IsSymmetric = (root) => {
  if (!root) return true;

  const isSymmetricTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;

    // compare left and right
    return isSymmetricTree(p.left, q.right) && isSymmetricTree(q.left, p.right);
  };

  return isSymmetricTree(root.left, root.right);
};
