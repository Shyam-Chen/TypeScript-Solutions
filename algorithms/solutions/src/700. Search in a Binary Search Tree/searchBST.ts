import type { TreeNode } from '~/utils/binary-tree';

type SearchBST = (root: TreeNode | null, val: number) => TreeNode | null;

/**
 * Accepted
 */
export const searchBST: SearchBST = (root, val) => {
  if (!root || root.val === val) return root;
  if (val < root.val) return searchBST(root.left, val);
  return searchBST(root.right, val);
};
