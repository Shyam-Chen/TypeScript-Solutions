import type { TreeNode } from '~/utils/binary-tree';

type MergeTrees = (root1: TreeNode | null, root2: TreeNode | null) => TreeNode | null;

/**
 * Accepted
 */
export const mergeTrees: MergeTrees = (root1, root2) => {
  const tree = root1;

  if (!tree) return root2;
  if (!root2) return tree;

  tree.val += root2.val;

  tree.left = mergeTrees(tree.left, root2.left);
  tree.right = mergeTrees(tree.right, root2.right);

  return tree;
};
