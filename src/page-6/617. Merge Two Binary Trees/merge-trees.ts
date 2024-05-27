import type { TreeNode } from '~/utils/binary-tree';

type MergeTrees = (root1: TreeNode | null, root2: TreeNode | null) => TreeNode | null;

export const mergeTrees: MergeTrees = (t1, t2) => {
  const tree = t1;

  if (!tree) return t2;
  if (!t2) return tree;

  tree.val += t2.val;

  tree.left = mergeTrees(tree.left, t2.left);
  tree.right = mergeTrees(tree.right, t2.right);

  return tree;
};
